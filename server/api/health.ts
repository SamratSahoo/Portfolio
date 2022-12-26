import APIWrapper from '../utils/APIWrapper'

export default APIWrapper({
  GET: {
    config: {
      requireToken: true,
    },
    handler: () => {
      return {
        Hello: 'World',
        Version: 2.0,
      }
    },
  },
})
