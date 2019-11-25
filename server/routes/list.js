const AUTH_TOKEN = require('../static/token');

let fn_getList = async (ctx, next) => {
    const token = ctx.request.headers.authorization;
    console.log('server token: ', token);
    if (token === AUTH_TOKEN) {
        ctx.response.body = {
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    } else {
        ctx.response.status = 401;
    }
}

module.exports = {
    'GET /api/list': fn_getList
}