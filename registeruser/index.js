const express = require("express");
const axios = require("axios");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const app = express();
const SECRET_KEY= "##@@@3276VFFSDHEW**&&"
app.use(express.json());
app.use(cors("*"));
app.post("/registeruser",(req,res)=>{
    const user = req.body
    const jwtkey = jwt.sign(user,SECRET_KEY)
    res.send(jwtkey)
})
app.listen(3032,()=>{
    console.log("Server started");
    
})