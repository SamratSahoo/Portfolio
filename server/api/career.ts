import { getAllCareers } from '../actions/Career'

export default defineEventHandler(async () => {
  const technologies = await getAllCareers()
  return { technologies }
})
