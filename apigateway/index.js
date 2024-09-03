const express = require("express");
const axios = require("axios");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const app = express();
const SECRET_KEY= "##@@@3276VFFSDHEW**&&"
app.use(express.json());
app.use(cors("*"));
function authenticate(key){
    try{
        const validated = jwt.verify(key,SECRET_KEY);
        return validated;
    }catch(error){
        console.log("not authenticated");
        
    }
}
app.use(async (req, res,next) => {
    const authkey = req.header("x-token")
    if(authenticate(authkey)){
        console.log("authenticated");
        
    
    const resdata = await axios.get("http://localhost:5012/services")
    console.log(resdata.data);
    const actionname=req.path.split("/")[1]
    const url = req.path.split("/")[0]
    console.log(url);
    console.log(actionname);
    const servicedata = resdata.data
    const serviceinfo = servicedata.find((e)=>e.servicename == actionname)
    console.log(serviceinfo);
    const serviceurl=serviceinfo.url+"/"+req.path.split("/")[2];
    console.log(serviceurl);
    
    const alldata = await axios.get(serviceurl)
    res.send(alldata.data)
}
else{
    res.send("Invalid key")
}

})

app.listen(3001, () => {
    console.log("API Gateway started on port 3001");
});
