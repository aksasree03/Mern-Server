// This is where my Rest API Located
//routes->users.js
const express = require('express')
const router = express.Router()
const User = require('../model/userSchema')
//import schema in routes


//POST method to handle Post request 
router.post('/',(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const newUser = new User({name,email,password});
    //After our Query created we cn save it  to the DB
    //data passed to schema for validation
    newUser.save();
    res.status(201).send(
        {
            message:"User Created",newUser
        }
    );
}
catch(err){
    res.status(500).send(
        {
            message:err.message
        }
    );
}
})
//GEt method
router.get('/',async(req,res)=>{
    try{
        const data = await User.find()
        res.status(201).send(data);
    }
    catch(err){
        res.status(500),send({message:err})
    }
})
//PUT the data (update the data)
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId, {password: password }, { new: true });
          //use findByIdAndUpdate instead of UpdateOne
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" }); 
        }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });

//delete
router.delete('/:id',async (req,res)=>{
    try{
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({_id:userId});
        if(deletedUser.nModified===0){
            return res.status(404).send({message:"Id does'nt exist"})
        }
        res.status(200).send({message:"user deleted",deletedUser});
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports = router;