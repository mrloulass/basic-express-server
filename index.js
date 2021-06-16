'use strict';

require('dotenv').config();

const server = require('./src/server.js')

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log('Server is Running'));
