function getBaseURL() {
  return 'https://portfolio-samratsahoo.vercel.app'
  // return `http://localhost:3000`
}

export const urls = {
  baseUrl: getBaseURL(),
  api: {
    auth: {
      token: `/api/auth/token`,
    },
    technology: `/api/technology`,
    files: {
      init: '/api/files/init',
      urls: '/api/files/urls',
      complete: '/api/files/complete',
      download: '/api/files/download',
    },
  },
}
