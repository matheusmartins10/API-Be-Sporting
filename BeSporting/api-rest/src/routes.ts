import { Router } from 'express';
import * as multer from 'multer';

import uploadConfig from './config/upload';

import SessionController from './controllers/SessionsController';
import SpotController from './controllers/SpotController';
import DashboardController from './controllers/DashboardController';
import BookingController from './controllers/BookingController'

const sessionController = new SessionController();
const spotController = new SpotController();
const dashboardController = new DashboardController();
const bookingController = new BookingController();

const routes = Router();

const upload = multer(uploadConfig);

routes.post('/sessions', sessionController.store);
routes.post('/spot', upload.single('thumbnail'), spotController.store);
routes.get('/dashboard', dashboardController.show);
routes.post('/spots/:spot_id/bookings', bookingController.store);

export default routes;
