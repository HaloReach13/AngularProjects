import express from 'express';
import { UserController } from './controller/user.controller';

export const appRoutes = express.Router();
const userController = new UserController();

appRoutes.get('/user', userController.getAll);
appRoutes.get('/user/:id', userController.getOne);
appRoutes.post('/user', userController.create);
appRoutes.put('/user', userController.update);
appRoutes.delete('/user/:id', userController.delete);