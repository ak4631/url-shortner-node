const {mongoose} = require("mongoose");

async function connectMongoDb(url) {
    return mongoose.connect(url,{
        dbName:"url_shortner",
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {connectMongoDb}