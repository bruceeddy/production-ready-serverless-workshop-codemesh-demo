const APP_ROOT = '../../'
const _ = require('lodash')

const viaHandler = async (event, functionName) => {
    const handler = require(`${APP_ROOT}/functions/${functionName}`).handler

    const context = {}
    const response = await handler(event, context)
    const contentType = _.get(response, 'headers.content-type', 'application/json');
    if (response.body && contentType === 'application/json') {
        response.body = JSON.parse(response.body);
    }
    return response
}

const we_invoke_get_index = () => viaHandler({}, 'get-index')
const we_invoke_get_restaurants = () => viaHandler({}, 'get-restaurants')

module.exports = {
    we_invoke_get_index,
    we_invoke_get_restaurants
}