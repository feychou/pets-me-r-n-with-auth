import express from 'express';

import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  editUser
} from '../controllers/users.js';

import protect from '../middleware/auth.js';

const api = express.Router();

api
  .route('/')
  .get(protect, getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(editUser)

export default api;