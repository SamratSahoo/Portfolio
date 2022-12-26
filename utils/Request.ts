import { ErrorTypes, InternalRequestData, InternalResponseData } from './Types'
import { useAuthTokenStore } from '~/stores/authToken'

export async function internalRequest<T>({
  url,
  queryParams,
  method,
  body,
}: InternalRequestData): Promise<T> {
  const authStore = useAuthTokenStore()
  if (authStore.authToken) {
    authStore.refreshToken()
  }
  const requestInfo: RequestInit = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      accesstoken: authStore.authToken,
    },
  }

  if (body) {
    requestInfo.body = JSON.stringify(body)
  }
  if (queryParams) {
    Object.entries(queryParams)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        url = `${url}?${key}=${(
          value as string | number | boolean
        ).toString()}&`
        return null
      })
  }

  const response = await fetch(url, requestInfo)
  const responseBody = (await response.json()) as InternalResponseData<T>

  if (!responseBody) {
    throw new Error('Unable to connect to API.')
  } else if (!responseBody.success) {
    const errorMessage = responseBody.message

    // Refresh auth token logic
    if ((errorMessage as ErrorTypes) === ErrorTypes.EXPIRED_ACCESS_TOKEN) {
      await authStore.refreshToken()
      return internalRequest({ url, queryParams, method, body })
    }

    throw new Error(errorMessage)
  }

  return responseBody.payload as T
}
