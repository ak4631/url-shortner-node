const {mongoose} = require("mongoose");

async function connectMongoDb(url) {
    return mongoose.connect(url,{
        dbName:"url_shortner",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000
    });
}

module.exports = {connectMongoDb}