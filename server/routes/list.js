const AUTH_TOKEN = require('../static/token');

let fn_getList = async (ctx, next) => {
    ctx.response.body = {
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
}

module.exports = {
    'GET /api/list': fn_getList
}