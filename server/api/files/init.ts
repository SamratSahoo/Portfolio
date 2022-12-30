import APIWrapper from '../../utils/APIWrapper'
import { initMultipartUpload } from '../../utils/s3'

export default APIWrapper({
  POST: {
    config: {
      requireToken: true,
    },
    handler: async (event: any) => {
      const body = await readBody(event)
      const filename: string = body.filename as string
      const multipartUpload = await initMultipartUpload(filename)

      return multipartUpload
    },
  },
})
