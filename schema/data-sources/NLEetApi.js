const {RESTDataSource} = require("apollo-datasource-rest");

class NLEetApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = '';
    }

    async getRestaurants(lat,long) {
        console.log('test');
        let res =  await this.post(`https://www.nederland-eet.nl/api/v1/stores/search?latitude=${lat}&longitude=${long}`)
        console.log(res.stores)
        return "hello"
    }
}

module.exports = { NLEetApi }