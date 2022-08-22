const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')

const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require('graphql')

const seedData = [
    {id: 1, language: 'JavaScript', loved: true},
    {id: 2, language: 'Python', loved: true},
    {id: 3, language: 'Java', loved: true}
]

//type
const languageType = new GraphQLObjectType({
    name: 'Language',
    description: 'Programming Language',
    fields:  {
        id: {
            type: GraphQLInt
        },
        language : {
            type: GraphQLString
        },
        loved : {
            type: GraphQLBoolean
        }
    }
})

const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'Query',
    fields: {
        languages: {
            type: GraphQLList(languageType),
            resolve: () => seedData
        }
    }
})


const schema = new GraphQLSchema({query: rootQuery})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = 3001

app.listen(PORT, () => {
    console.log(`🚀🚀 App is listening on Port ${PORT} 🚀🚀 `)
})