'use strict'

const express = require ('express');
const logger = require ('./middleware/logger.js');
const validator = require ('./middleware/validator.js');
const err404 = require ('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');
const app = express();

app.use(logger);
app.use(validator);

app.get('/person',validator,(req,res)=>{
  res.send({
    name:"louis",
  })
})

app.use(err404);
app.use(err500);


module.exports = {
  app: app,
  start:(PORT)=> {
    app.listen(PORT, () => console.log('Server is Running'))
  },
}
