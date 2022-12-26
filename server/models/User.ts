import mongoose from 'mongoose'
import { User } from '~/utils/Types'

const UserSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
})

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema)

export default UserModel
