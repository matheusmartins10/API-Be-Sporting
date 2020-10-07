import {Router, Request, Response, response} from 'express'

import SessionController from './controllers/SessionsController'

const routes = Router()

const sessionController = new SessionController()

routes.get('/', (req: Request, res: Response) => {
   return res.status(200).json({message: 'Hello world'})
})

routes.post('/sessions', sessionController.store)

export default routes