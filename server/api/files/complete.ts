import APIWrapper from '../../utils/APIWrapper'
import { completeMultipartUpload } from '../../utils/s3'
import { UploadedPart } from 'utils/Types'

export default APIWrapper({
  POST: {
    config: {
      requireToken: true,
    },
    handler: async (event: any) => {
      const body = await readBody(event)
      const uploadId: string = body.uploadId as string
      const key: string = body.key as string
      const parts: UploadedPart[] = body.parts as UploadedPart[]

      const arn = await completeMultipartUpload(uploadId, key, parts)

      if (!arn) {
        throw new Error('Failed to complete upload')
      }

      return arn
    },
  },
})
