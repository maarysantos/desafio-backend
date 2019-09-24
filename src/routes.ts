import { Router } from 'express'

import userController from './controllers/userController'
import examController from './controllers/examController'
import scheduleController from './controllers/scheduleController'

const routes = Router()

routes.get('/users', userController.index)
routes.post('/users', userController.store)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

routes.get('/exams', examController.index)

routes.get('/schedules', scheduleController.index)
routes.post('/schedules', scheduleController.store)

export default routes
