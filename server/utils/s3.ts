import { S3, GetObjectCommand, UploadPartCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { MultipartUpload, UploadedPart } from 'utils/Types'

const REGION = 'us-east-1'
const BUCKET = 'samrat-portfolio'

// TODO: error handling
const s3client = new S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_TOKEN as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_TOKEN as string,
  },
  region: REGION,
})

export const initMultipartUpload = async (
  filename: string
): Promise<MultipartUpload> => {
  const multipartUpload = await s3client.createMultipartUpload({
    Bucket: BUCKET,
    Key: filename,
  })

  return {
    UploadId: multipartUpload.UploadId as string,
    Key: multipartUpload.Key as string,
  }
}

export const getMultipartUploadPresignedUrls = async (
  uploadId: string,
  key: string,
  parts: number
): Promise<string[]> => {
  const promises = []

  for (let partNum = 1; partNum <= parts; partNum++) {
    const cmd = new UploadPartCommand({
      Bucket: BUCKET,
      Key: key,
      UploadId: uploadId,
      PartNumber: partNum,
    })
    promises.push(getSignedUrl(s3client, cmd))
  }

  const signedUrls = await Promise.all(promises)

  return signedUrls
}

export const completeMultipartUpload = async (
  uploadId: string,
  key: string,
  parts: UploadedPart[]
): Promise<string> => {
  const res = await s3client.completeMultipartUpload({
    Bucket: BUCKET,
    Key: key,
    UploadId: uploadId,
    MultipartUpload: {
      Parts: parts,
    },
  })

  return res.Key as string
}

export const getDownloadPresignedUrl = async (key: string) => {
  const cmd = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key,
  })

  const signedUrl = await getSignedUrl(s3client, cmd)

  return signedUrl
}
