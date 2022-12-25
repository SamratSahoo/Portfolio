import mongoose from 'mongoose'

import { Technology } from '~/utils/Types'

const TechnologySchema = new mongoose.Schema<Technology>({
  technologyName: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
})

const TechnologyModel =
  (mongoose.models.Technology as mongoose.Model<Technology>) ||
  mongoose.model<Technology>('Technology', TechnologySchema)

export default TechnologyModel
