const gql = require('graphql-tag')


const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        married: Boolean!    
    }
    
    
    # Queries
   type Query {
        getAllUsers: [User!]!,
        getUser(name: String!): User!
   }
`

module.exports = {typeDefs}