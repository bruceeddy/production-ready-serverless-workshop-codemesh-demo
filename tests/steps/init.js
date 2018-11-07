let initialized = false

const init = async () => {
    if (initialized) {
        return
    }
    process.env.restaurants_api   = "https://2hbp5rgbfc.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-bruce"
    process.env.AWS_REGION        = "eu-west-1"

    initialized = true
}

module.exports = {
    init
}