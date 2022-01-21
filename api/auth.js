import express from "express";
import { createUser as register, login } from '../controllers/users.js';

const api = express.Router();

api.post('/register', register);
api.post('/login', login);

export default api;