import { urls } from '../utils/Urls'
import { HttpMethod, MultipartUpload, UploadedPart } from '../utils/Types'
import { internalRequest } from '../utils/Request'

const uploadUrl = urls.baseUrl + urls.api.files.init
const getUrl = urls.baseUrl + urls.api.files.urls
const completeFileUploadUrl = urls.baseUrl + urls.api.files.complete

const downloadUrl = urls.baseUrl + urls.api.files.download

export const initFileUpload = (filename: string) => {
  return internalRequest<MultipartUpload>({
    url: uploadUrl,
    method: HttpMethod.POST,
    body: {
      filename,
    },
  })
}

export const getUploadUrls = (uploadId: string, key: string, parts: number) => {
  return internalRequest<string[]>({
    url: getUrl,
    method: HttpMethod.POST,
    body: {
      uploadId,
      key,
      parts,
    },
  })
}

export const completeFileUpload = (
  uploadId: string,
  key: string,
  parts: UploadedPart[]
) => {
  return internalRequest<string>({
    url: completeFileUploadUrl,
    method: HttpMethod.POST,
    body: {
      uploadId,
      key,
      parts,
    },
  })
}

export const getFileDownloadUrl = (filename: string) => {
  return internalRequest<string>({
    url: downloadUrl,
    method: HttpMethod.POST,
    body: {
      key: filename,
    },
  })
}
