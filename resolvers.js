//resolvers.js 
//to pre process the queries 
//query -> to retrive the data (Exactly WHat data we want)
//mutation -> to update the data
const User = require('./model/userSchema');//parent
const resolvers ={
    Query:{
        getUser: async(_,{id})=>{return await User.findById(id);},
        getUsers: async()=>{return await User.find();},
        searchUsers: async(_,{name})=>{return await User.find(
            {name:new RegExp(name,'i')})
        },
    },
    User:{
        email:(parent)=> parent.email || '',
    },
};module.exports=resolvers;//export resolvers