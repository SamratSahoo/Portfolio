function getBaseURL() {
  if (process.env.ENVIRONMENT === 'production') {
    return `portfolio-samratsahoo.vercel.app`
  }
  return 'http://localhost:3000'
}

export const urls = {
  baseUrl: getBaseURL(),
  api: {
    auth: {
      token: `/api/auth/token`,
    },
  },
}
