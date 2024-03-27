const express=require('express')
const urlShortner = require('../controllers/urlShortner.controller')

const urlRouter=express.Router()


urlRouter.post("/create",urlShortner)

module.exports=urlRouter