import APIWrapper from '../../utils/APIWrapper'
import { getDownloadPresignedUrl } from '../../utils/s3'

export default APIWrapper({
  POST: {
    config: {
      requireToken: false,
    },
    handler: async (event: any) => {
      const body = await readBody(event)
      const key: string = body.key as string

      const signedUrl = await getDownloadPresignedUrl(key)

      if (!signedUrl || signedUrl.length === 0) {
        throw new Error('Failed to get download URL')
      }

      return signedUrl
    },
  },
})
