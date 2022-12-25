import mongoose from 'mongoose'

import { Career } from '~/utils/Types'

const CareerSchema = new mongoose.Schema<Career>({
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
})

const CareerModel =
  (mongoose.models.Career as mongoose.Model<Career>) ||
  mongoose.model<Career>('Career', CareerSchema)

export default CareerModel
