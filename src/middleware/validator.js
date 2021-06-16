'use strict';

module.exports = (req,res,next) => {
  if(!req.query.name){
    res.status(404).send({'Error':'No name'})
  }else{
    next();
  }
}
