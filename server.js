const express=require('express')
const dotenv=require('dotenv')
// const { default: connectDB } = require('./src/db/db')
const connectDB=require('./src/db/db')
const urlRouter = require('./src/routes/urlShortner.routes')

const app=express()
dotenv.config()


const port=process.env.PORT || 3300

connectDB()

app.listen(port,()=>{
    console.log(`Server started on port ${port} 🚀`);
})

app.use(express.json())

app.use('/urlRouter',urlRouter)