const {ApolloServer} = require("apollo-server-express")
const express = require('express')
const {typeDefs} = require('./schema/typeDefs')
const {resolvers} = require("./schema/resolvers");
const {FlinkAPI} = require("./schema/data-sources/FlinkApi");
const {NLEetApi} = require("./schema/data-sources/NLEetApi");
const app = express()

const server = new ApolloServer({
    typeDefs, resolvers, dataSources: () => {
        return {
            FlinkAPI: new FlinkAPI(),
            nlEetAPI: new NLEetApi()
        }
    }
})
server.applyMiddleware({ app })

const PORT = 3001

app.listen(PORT, () => {
    console.log(`🚀🚀 SERVER is listening op port: ${PORT}  - http://localhost:${PORT}/graphql`)
})