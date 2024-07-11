//GraphQL schema
const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    id:ID !,
    name:String !,
    email:String !,
    password:String !
}
type Query {
    getUser(id:ID):User
    getUsers:[User]
    searchUsers(name:String!):[User]
    getLimitedUsers(limit:Int !,offset:Int !):User
}
input createUserInput{
    name:String!,
    email:String!,
    password:String!
 }
input updateUserInput{
    name:String!,
    email:String!,
    password:String!
}
type Mutation{
    createUser(input:createUserInput):User
    changePassword(id:ID!,password:String!):User
    updateUser(id:ID!,input:updateUserInput!):User
    deleteUser(id:ID!):User
}`;
//we can process the Query through Resolvers!
module.exports = typeDefs;