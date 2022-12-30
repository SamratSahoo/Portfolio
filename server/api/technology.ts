import { createTechnology, getAllTechnologies } from '../actions/Technology'

import APIWrapper from '../utils/APIWrapper'

export default APIWrapper({
  GET: {
    config: {
      requireToken: false,
    },
    handler: async () => {
      const technologies = await getAllTechnologies()
      return technologies
    },
  },
  POST: {
    config: {
      requireToken: true,
    },
    handler: async (event: any) => {
      const body = await readBody(event)
      const technology = await createTechnology(
        body.technologyName,
        body.imagePath
      )
      return technology
    },
  },
})
