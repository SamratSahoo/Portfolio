import CareerModel from '../models/Career'
import { dbConnect } from '../utils/dbConnect'

export async function createCareer(
  companyName: string,
  jobTitle: string,
  jobDescription: string
) {
  await dbConnect()
  const career = await CareerModel.create({
    companyName,
    jobTitle,
    jobDescription,
  })

  return career
}

export async function getAllCareers() {
  await dbConnect()
  const careers = await CareerModel.find({})
  return careers
}
