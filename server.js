import { app } from './app.js'
import mongoose from 'mongoose'
import cloudinary from 'cloudinary'

import dv from 'dotenv'

dv.config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})

const url = process.env.MONGO_URL

mongoose.connect(url).then(console.log('Database Connected'))