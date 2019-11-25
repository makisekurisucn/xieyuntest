"use strict";
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

app.use(bodyParser());

app.use(controller());

app.listen(3001);

console.log('server started at port 3001');