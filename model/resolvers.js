//to preprocess the Queries to 
//queries->retrive the data
//mutatiob-> to update the data.
const User = require('./model/userSchema');//Parent
const resolvers ={
    Query:{
        getUser: async(_,{id})=>{
            return await User.findById(id);
        },
        getUsers:async()=>{
            return await User.find();
        },
        searchUsers:async(_,{name})=>{
           return await User.find({name: new RegExp(name,'i')})
        },
        getLimitedUsers:async(_,{limit,offset})=>{
            return await User.find().skip(offset).limit(limit)
        }
    },
    Mutation:{
        createUser:async (_,{input})=>{
            const newUser = new User(input);
            return await newUser.save();
        },
        changePassword: async (_,{id,password})=>{
            return await User.updateOne({_id:id},{$set:{password:password}})
        },
        updateUser:async (_,{id,input})=>{
            return await User.findByIdAndUpdate(id,input)
        },
        deleteUser:async(_,{id})=>{
            return await User.findByIdAndDelete(id);
        },
        
    },
    User:{
        email:(parent)=>parent.email || '',
    },
};
module.exports = resolvers;