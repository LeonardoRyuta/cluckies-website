/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    ALCHEMY_API_KEY:'rgUHJ0vFgXlsf8LN6-3pFn-NZQxEnV5J',
    DB_CONNECTION:'mongodb+srv://leonardoryuta05:hAeG7LJhQaAXtIOR@nfts.avp1boy.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig