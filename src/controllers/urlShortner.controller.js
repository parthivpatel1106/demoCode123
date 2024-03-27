const dotenv=require('dotenv')
const Url=require('../models/shortUrlSaver.model')
const nanoid=require('nanoid')
const isUrlHttp = require('is-url-http')
dotenv.config()


const urlShortner=async(req,res)=>{
    console.log("here");
    try {
        const originalUrl=req.body.OriginalUrl
        console.log(originalUrl);
        const base=process.env.BASE
        const uriId=nanoid()
        if(isUrlHttp(originalUrl)){
            console.log("false");
            return res.status(404).json({success:0, data:null, message:"Given link is not or invalid http link"})
        }else{
            console.log("true");
            let url=await Url.findOne(originalUrl)
            console.log(url);
            if(url)
            {
                return res.status(200).json({success:1, data:url, message:"link is retrived from table"})
            }
            else{
                const shortUrl=`${base}/${uriId}`
                url=new Url({
                    uriId,
                    originalUrl,
                    shortUrl,
                    date:new Date()
                })
                await url.save()
                return res.status(200).json({success:1, data:url, message:"short link is generated and stored in table"})
            }

        }
    } catch (error) {
        return res.status(500).json({success:0, data:null, messageL:"Internal server error"})   
    }
}

module.exports=urlShortner