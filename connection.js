const {mongoose} = require("mongoose");

async function connectMongoDb(url) {
    return mongoose.connect(url,{
        dbName:"url_shortner"
    });
}

module.exports = {connectMongoDb}