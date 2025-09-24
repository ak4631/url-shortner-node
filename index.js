const express = require("express");
const app = express();
const path = require("path");
const UrlRouter = require("./routes/route");
const StaticRouter = require("./routes/staticRoute");
const {connectMongoDb} = require("./connection");
const { handleGetRealUrl } = require("./controller");
require("dotenv").config();
console.log("uri",process.env.MONGODB_URI);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));

connectMongoDb(process.env.MONGODB_URI).then(()=>console.log("Connected")).catch((err)=>console.log("Error",err));

app.use("/url",UrlRouter);
app.use("/",StaticRouter);
app.get("/:shortId",handleGetRealUrl);

app.listen(3000,()=>{
    console.log(`Server Running at Port 3000`)
})
