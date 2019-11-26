"use strict";
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const AUTH_TOKEN = require('./static/token');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
    if (ctx.request.path === '/api/login') {
        next();
    } else {
        const token = ctx.request.headers.authorization;
        if (token === AUTH_TOKEN) {
            next();
        } else {
            ctx.response.status = 401;
        }
    }
})

app.use(controller());

app.listen(3001);

console.log('server started at port 3001');