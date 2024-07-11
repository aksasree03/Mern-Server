const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer ,gql}= require('apollo-server-express')
const typeDefs = require('./routes/Schema')
const  resolvers = require('./resolvers')

const app = express();
const port = 3001;
const url = 'mongodb+srv://budalapatiaksa3:luU8RikmOGCEkXPr@cluster0.5iqzohg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=>{})
.catch((err)=>{});

//start my apollo express server
const server = new ApolloServer({typeDefs,resolvers});
app.get('./users',async(req,res)=>{
    try{
        const {data,errors}=await server.executeOperation({
            query:gql`we will out queries here`
        })

    }catch(err){

    }
})
async function StartServer(){
    await server.start();
    server.applyMiddleware({app});//middleware is executing on express app
    app.listen(port,()=>{
        
    })
}
StartServer();