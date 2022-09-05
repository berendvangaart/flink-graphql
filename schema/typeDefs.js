const gql = require('graphql-tag')


const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        married: Boolean!    
    },
    
    type Movie {
        name: String!
    }
    
    type GroceryCard {
        deliveryParty: String!
        isOpen: Boolean!
        minimumOrderValue: Float!
        currency: String!
        shippingFee: Float!
        delivers_to_requested_location: Boolean!
    }
    
    # Queries
   type Query {
        getAllUsers: [User!]!,
        getUser(name: String!): User!,
        getFlinkCard(id: Int!): GroceryCard!,
        getNLEetRestaurants(lat: Float ,long: Float): String
   }
`

module.exports = {typeDefs}