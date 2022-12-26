import { Types } from 'mongoose'

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
