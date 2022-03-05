const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/booking/', BookingController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;