const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = "mongodb+srv://awais:qwerasdfzx1@cluster0.idwqs.mongodb.net/event?retryWrites=true&w=majority"

mongoose.connect(db, err =>{
if(err){
    console.error("Error!"+ err);
}else{
    console.log("Connected to mongodb");
}
});

router.get('/', (req, res)=>{
    res.send("from api route")
});

module.exports = router;