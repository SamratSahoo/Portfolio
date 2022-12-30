import APIWrapper from '../../utils/APIWrapper'
import { getMultipartUploadPresignedUrls } from '../../utils/s3'

export default APIWrapper({
  POST: {
    config: {
      requireToken: true,
    },
    handler: async (event: any) => {
      const body = await readBody(event)
      const uploadId: string = body.uploadId as string
      const key: string = body.key as string
      const parts: number = body.parts as number

      const signedUrls = await getMultipartUploadPresignedUrls(
        uploadId,
        key,
        parts
      )

      if (!signedUrls || signedUrls.length === 0) {
        throw new Error('Failed to create signed URLs')
      }

      return signedUrls
    },
  },
})
