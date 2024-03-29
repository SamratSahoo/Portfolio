import mongoose from 'mongoose'

export async function dbConnect(): Promise<void> {
  mongoose.set('strictQuery', false)
  if (mongoose.connections[0].readyState) return

  await mongoose
    .connect(process.env.DATABASE_URL as string, {
      socketTimeoutMS: 360000,
      dbName: process.env.DATABASE_NAME,
    })
    .catch((error) => {
      throw error
    })
}
