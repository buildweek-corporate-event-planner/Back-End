const express = require('express')

const server = express();

const cors = require('cors');

const helmet = require('helmet');

const authRouter = require('./endpoints/auth/auth-router')

const authorize = require('./middleware/auth-middleware')

server.use(express.json());
server.use(helmet())
server.use(cors())
server.use('/api/auth', authRouter);
server.use(authorize)

module.exports = server;