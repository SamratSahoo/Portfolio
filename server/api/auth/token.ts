import APIWrapper from '../../utils/APIWrapper'
import { getUserByEmail } from '~/server/actions/User'
import { comparePassword, getWebToken } from '~/server/utils/Authentication'
import { User } from '~/utils/Types'

export default APIWrapper({
  POST: {
    config: {
      requireToken: false,
    },
    handler: async (event: any) => {
      const requestBody = await readBody(event)
      const email = requestBody.email
      const password = requestBody.password
      const user: User = (await getUserByEmail(email)) as User

      const comparison = await comparePassword(user.hashedPassword, password)
      if (!comparison) {
        throw new Error("User's email or password is incorrect")
      }

      return {
        webToken: getWebToken({
          email,
        }),
      }
    },
  },
})
