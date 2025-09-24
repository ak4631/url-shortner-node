const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        required:true,
    },
    visits:{
        type:Number,
        default:0
    }
},{timestamps:true})

const UrlModel = new mongoose.model("url_shortner",UrlSchema);

module.exports = UrlModel;