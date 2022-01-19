import express from 'express';

import {
  getPets,
  getPet,
  createPet,
  deletePet,
  editPet
} from '../controllers/pets.js';

const api = express.Router();

api
  .route('/')
  .get(getPets)
  .post(createPet)

api
  .route('/:id')
  .get(getPet)
  .delete(deletePet)
  .put(editPet)

export default api;