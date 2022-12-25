import TechnologyModel from '../models/Technology'
import { dbConnect } from 'server/utils/dbConnect'

export async function createTechnology(
  technologyName: string,
  imagePath: string
) {
  await dbConnect()
  const technology = await TechnologyModel.create({
    technologyName,
    imagePath,
  })

  return technology
}

export async function getAllTechnologies() {
  await dbConnect()
  const technologies = await TechnologyModel.find({})
  return technologies
}
