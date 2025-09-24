const UrlModel = require("../models")
const {nanoid} = require("nanoid");

async function handleCreateShortenUrl(request,response) {
    const {currentUrl} = request.body;
    const data = {
        "url":currentUrl,
        "shortId":nanoid(6)
    }
    const result = await UrlModel.create(data);
    if(result){
        return response.render("home",{
            id:result.shortId
        })
        return response.status(200).json({"unique":result.shortId,"msg":"URL recieved"});
    }
    return response.status(400).json({"msg":"Something Went Wrong"})   
}

async function handleGetRealUrl(request,response) {
    console.log("data",request.params.shortId);
    let uniqueId = request.params.shortId;
    const urlById = await UrlModel.findOne({shortId:uniqueId});
    // console.log("data",urlById);

    if(urlById){
        let visits = urlById.visits;
        let mainUrl = urlById.url;
        let updateData = {
            "visits":visits + 1
        }
        const result = await UrlModel.updateOne({shortId:uniqueId},{$set:updateData});
        // return response.status(200).json({"url":mainUrl,"msg":"URL Retrived"});
        return response.redirect(mainUrl); 
    }
    return response.status(400).json({"msg":"Something Went Wrong"});
}

async function handleGetClickAnalytics(request,response) {
    let uniqueId = request.params.id;
    const urlById = await UrlModel.findOne({shortId:uniqueId});
    console.log("data",urlById);

    if(urlById){
        let visits = urlById.visits;
        return response.render("analytics",{
            analytics:{
                "views":visits,
                "originalUrl":urlById.url,
                "id":urlById.shortId,
                "createdAt":urlById.createdAt
            }
        })
        return response.status(200).json({"totalClicks":visits,"msg":"URL Retrived"});
    }
    return response.status(400).json({"msg":"Something Went Wrong"});
}

async function handleShowAllUrls(request,response){
    const result =  await UrlModel.find({});
    // return response.status(200).json({"data":result})
    return response.render("home",{
        urls:result
    })
}


module.exports = {
    handleCreateShortenUrl,
    handleGetRealUrl,
    handleGetClickAnalytics,
    handleShowAllUrls
}
