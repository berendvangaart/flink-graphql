const {users} = require( "../data")

const resolvers = {
    Query: {
        getAllUsers() {
            return users
        },
        getUser(_,args) {
            return users.find(u => u.name === args.name)
        },
        getFlinkCard: async (_, { id }, { dataSources }) => {
            return dataSources.FlinkAPI.getFlinkCard(id);
        },
    }
}

module.exports = {resolvers}