import express from 'express';

import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  editUser
} from '../controllers/users.js';

const api = express.Router();

api
  .route('/')
  .get(getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(editUser)

export default api;