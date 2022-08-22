const {RESTDataSource} = require("apollo-datasource-rest");

class FlinkAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://consumer-api.goflink.com/v1/locations/hub?lat=52.3786092&long=4.9312941';
    }

    // GET
    async getFlinkCard(id) {
        let res =  await this.get(`https://consumer-api.goflink.com/v1/locations/hub?lat=52.3786092&long=4.9312941`) // path

            const finkCard = {
                deliveryParty: "Flink",
                isOpen: !res.details.is_closed,
                minimumOrderValue: res.details.minimum_order_value.amount,
                currency: res.details.minimum_order_value.currency,
                shippingFee:  res.details.shipping_fee.amount,
                delivers_to_requested_location:  res.delivers_to_requested_location
            }

        return finkCard
    }
}

module.exports = {FlinkAPI}