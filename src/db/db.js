const mongoose=require('mongoose')
const config=require('config')
const db=config.get('dbConfig.mongoURI')

const connectDB=async()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            // useUnifiedTopology:true
        })
        console.log(`Mongobd is connected 🛢️  at ${db}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports=connectDB