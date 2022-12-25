import { Types } from 'mongoose'

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
