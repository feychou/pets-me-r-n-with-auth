import express from "express";
import { createUser as register } from '../controllers/users.js';

const api = express.Router();

api.post('/register', register);

export default api;