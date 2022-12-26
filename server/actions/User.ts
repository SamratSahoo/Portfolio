import UserModel from '../models/User'
import { dbConnect } from '../utils/dbConnect'

export const getUserByEmail = async (email: string) => {
  await dbConnect()
  const user = await UserModel.findOne({
    email,
  })
  return user
}
