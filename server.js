import dotenv from 'dotenv';
import colors from 'colors';
import express from "express";

import connectDB from './dbinit.js';
import pets from './api/pets.js';
import users from './api/users.js';
import auth from './api/auth.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = express();
connectDB();
server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to the pet server!'));
server.use('/api/pets', pets);
server.use('/api/users', users);
server.use('/auth', auth);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`.rainbow));
