function getBaseURL() {
  return 'https://portfolio-samratsahoo.vercel.app'
}

export const urls = {
  baseUrl: getBaseURL(),
  api: {
    auth: {
      token: `/api/auth/token`,
    },
  },
}
