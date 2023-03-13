import dotenv from 'dotenv'
dotenv.config()

const config = {
allowedMedia: ['jpg', 'jpeg', 'png', 'gif'],
dbConection: process.env.ENGINE_CONNECTION,
port: process.env.PORT
}

export default config