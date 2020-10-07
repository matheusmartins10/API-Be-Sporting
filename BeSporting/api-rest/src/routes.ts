import {Router, Request, Response, response} from 'express'
import * as multer from 'multer'

import uploadConfig from './config/upload'

import SessionController from './controllers/SessionsController'
import SpotController from './controllers/SpotController'

const sessionController = new SessionController()
const spotController = new SpotController()

const routes = Router()

const upload = multer(uploadConfig)

routes.get('/', (req: Request, res: Response) => {
   return res.status(200).json({message: 'Hello world'})
})

routes.post('/sessions', sessionController.store)
routes.post('/spot', upload.single('thumbnail'), spotController.store)

export default routes