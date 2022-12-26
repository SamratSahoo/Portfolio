import APIWrapper from '../utils/APIWrapper'

export default APIWrapper({
  GET: {
    config: {
      requireToken: false,
    },
    handler: () => {
      return {
        Hello: 'World',
        Version: 2.0,
      }
    },
  },
})
