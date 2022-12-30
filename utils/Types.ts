import { Types } from 'mongoose'

export enum ErrorTypes {
  EXPIRED_ACCESS_TOKEN = 'This access token is expired',
}
export interface User {
  email: string
  hashedPassword: string
}
export interface Technology {
  _id: Types.ObjectId
  technologyName: string
  imagePath: string
}

export interface Career {
  _id: Types.ObjectId
  companyName: string
  jobTitle: string
  jobDescription: string
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface InternalRequest {
  body: { [key: string]: unknown }
}

export interface InternalRequestData {
  url: string
  method: HttpMethod
  body?: { [key: string]: unknown }
  queryParams?: { [key: string]: string | number | boolean | undefined }
}

export interface InternalResponseData<T> {
  success: boolean
  message?: string
  payload?: T
}

export interface MultipartUpload {
  UploadId: string
  Key: string
}

export interface UploadedPart {
  ETag: string
  PartNumber: number
}

export enum StorageLocation {
  TECHNOLOGY_CARDS = 'TechnologyCards/',
  CAREER_CARDS = 'CareerCards/',
}
