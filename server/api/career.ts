import { getAllCareers } from '../actions/Career'

import APIWrapper from '../utils/APIWrapper'

export default APIWrapper({
  GET: {
    config: {
      requireToken: false,
    },
    handler: async () => {
      const careers = await getAllCareers()
      return careers
    },
  },
})
