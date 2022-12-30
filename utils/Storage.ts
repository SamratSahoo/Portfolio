import {
  initFileUpload,
  getUploadUrls,
  completeFileUpload,
  getFileDownloadUrl,
} from '../actions/File'
import { StorageLocation } from './Types'

export const uploadFile = async (
  filename: string,
  storageLocation: StorageLocation,
  base64Data: string
): Promise<string> => {
  // obtain file data from uri
  const fileData = Buffer.from(base64Data, 'base64')

  // get upload session
  const multipart = await initFileUpload(storageLocation + filename)
  const chunkSize = 1024 * 1024 * 8 // 8MB
  const uploadId = multipart.UploadId
  const key = multipart.Key
  const numParts = Math.ceil(fileData.byteLength / chunkSize)
  const promises = []

  const signedUrls = await getUploadUrls(uploadId, key, numParts)
  // upload file in parts
  for (let index = 0; index < signedUrls.length; index++) {
    const start = index * chunkSize
    const end = (index + 1) * chunkSize

    const blob =
      index < signedUrls.length - 1
        ? (fileData as Uint8Array).slice(start, end)
        : (fileData as Uint8Array).slice(start)
    promises.push(
      fetch(signedUrls[index], {
        method: 'PUT',
        body: blob as Uint8Array,
        mode: 'cors',
      })
    )
  }

  const res = await Promise.all(promises)

  const uploadedParts = res.map((part, index) => {
    if (part.status !== 200) {
      throw new Error('Upload failed')
    }
    return {
      ETag: (part as any).headers.map.etag as string,
      PartNumber: index + 1,
    }
  })

  // trigger assemble of uploaded parts
  const fileKey = await completeFileUpload(uploadId, key, uploadedParts)

  return fileKey
}

export const getFile = async (filename: string) => {
  const signedUrl = await getFileDownloadUrl(filename)

  return signedUrl
}
