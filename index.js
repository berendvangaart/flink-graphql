const {ApolloServer} = require("apollo-server-express")
const express = require('express')
const {typeDefs} = require('./schema/typeDefs')
const {resolvers} = require("./schema/resolvers");
const app = express()

const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({ app })

const PORT = 3001

app.listen(PORT, () => {
    console.log(`🚀🚀 SERVER is listening op port: ${PORT}`)
})