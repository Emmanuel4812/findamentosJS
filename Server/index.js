"use strict";
const koa = require("koa");
const app = new koa();

app.use(async function server_start(ctx) {
        ctx.body = "Hello World!"
    }
)

app.listen(3000);