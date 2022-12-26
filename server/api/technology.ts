import { getAllTechnologies } from '../actions/Technology'

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
})
