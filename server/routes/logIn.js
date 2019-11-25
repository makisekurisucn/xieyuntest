const AUTH_TOKEN = require('../static/token')

let userPwdMap = {
    'admin': '123456'
}

let fn_logIn = async (ctx, next) => {
    let username = ctx.request.body.username || '';
    let password = ctx.request.body.password || '';
    console.log(ctx.request.body);
    if (userPwdMap[username] && userPwdMap[username] === password) {
        ctx.response.body = {
            success: true,
            token: AUTH_TOKEN
        }
    } else {
        ctx.response.body = {
            success: false
        }
    }

}

module.exports = {
    'POST /api/login': fn_logIn
}