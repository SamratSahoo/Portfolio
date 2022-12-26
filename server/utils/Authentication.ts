import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const getUser = (accesstoken: string) => {
  if (!accesstoken) {
    return null
  }
  const data = verifyWebToken(accesstoken)
  return data
}

export const hashString = async (stringToHash: string) => {
  const saltRounds = 10
  const hashed = await bcrypt.hash(stringToHash, saltRounds)
  return hashed
}

export const comparePassword = async (
  hashedPassword: string,
  password: string
) => {
  const res = await bcrypt.compare(password, hashedPassword)
  return res
}

export const getWebToken = (data: Record<string, string | boolean>) => {
  const secrets = useRuntimeConfig()
  data.authorized = true
  return jwt.sign(data, secrets.appSecret as string, {
    expiresIn: '15m',
  })
}

export const verifyWebToken = (webToken: string) => {
  const secrets = useRuntimeConfig()
  const data = jwt.verify(webToken, secrets.appSecret as string, {
    ignoreExpiration: false,
  })
  return data as Record<string, string | boolean>
}
