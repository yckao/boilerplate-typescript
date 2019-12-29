import dotenv from 'dotenv'
dotenv.config()

interface Config {
  url: string
}

export default {
  url: process.env.POSTGRES_URL,
} as Config
