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

app.use((req, res, next) => {
    // Set the appropriate headers for CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3200'); // Replace with your client's domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Set Access-Control-Allow-Credentials to true
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // Continue to the next middleware or route handler
    next();
  });

app.use('/urlRouter',urlRouter)