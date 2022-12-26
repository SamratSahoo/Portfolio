import { internalRequest } from '~/utils/Request'
import { HttpMethod } from '~/utils/Types'
import { urls } from '~/utils/Urls'

const authTokenUrl = urls.baseUrl + urls.api.auth.token

export const getAuthToken = (email: string, password: string) => {
  return internalRequest({
    url: authTokenUrl,
    method: HttpMethod.POST,
    body: {
      email,
      password,
    },
  })
}
