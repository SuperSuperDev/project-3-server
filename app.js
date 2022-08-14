import express from 'express'
import cors from 'cors'
import logger from './middleware/logger.js'
import router from './views/router.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.json())

const corsOptions = {
  origin: 'http://cloudify-client.capt.nonovium.com',
}
app.use(cors(corsOptions))

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

export default app
