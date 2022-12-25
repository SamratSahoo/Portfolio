import { getAllTechnologies } from '../actions/Technology'

export default defineEventHandler(async () => {
  const technologies = await getAllTechnologies()
  return { technologies }
})
