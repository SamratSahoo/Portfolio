import mongoose from 'mongoose'
import { HttpMethod } from '../../utils/Types'
import { getUser } from './Authentication'

interface RouteConfig {
  requireToken?: boolean
  handleResponse?: boolean // handleResponse if the route handles setting status code and body
  requireAdminVerification?: boolean
  requireEmailVerified?: boolean
}

interface Route<T> {
  config?: RouteConfig
  handler: (event: any) => Promise<T>
}

function APIWrapper(
  routeHandlers: Partial<Record<HttpMethod, Route<unknown>>>
) {
  return async (event: any) => {
    const req = event.node.req
    const method = req.method
    const route = routeHandlers[method as HttpMethod]

    if (!method || !route) {
      const errorMessage = method
        ? `Request method ${method} is invalid.`
        : 'Missing request method.'

      throw createError({
        statusCode: 400,
        statusMessage: errorMessage,
        data: { success: false, message: errorMessage },
      })
    }

    const { config, handler } = route
    try {
      // Handle user access token + roles restrictions
      if (config?.requireToken) {
        const user = await getUser(req.headers.accesstoken as string)

        if (!user) {
          throw createError({
            statusCode: 400,
            statusMessage: 'This access token is invalid',
            data: {
              success: false,
              message: 'This access token is invalid',
            },
          })
        }
      }

      const data = await handler(event)
      if (config?.handleResponse) {
        return
      }
      return { success: true, payload: data }
    } catch (e) {
      if (e instanceof mongoose.Error) {
        throw createError({
          statusCode: 500,
          statusMessage: 'An Internal Server error occurred.',
          data: {
            success: false,
            message: 'An Internal Server error occurred.',
          },
        })
      }

      const error = e as Error
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
        data: {
          success: false,
          message: error.message,
        },
      })
    }
  }
}

export default defineEventHandler(APIWrapper)
