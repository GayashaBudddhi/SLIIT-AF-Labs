const Koa = require('koa');
const bodyParser = require("koa-bodyparser");
const HomeRouter = require("./routes/home.router");
const PostRoutes = require("./routes/post.routes");

//Creating koa application
const app = new Koa();

//Registering the body parser
app.use(bodyParser());

app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());

//Q1
app.use(ctx => {
    ctx.body = 'Hello';
});
app.listen(3000);
console.log('Application is running on port 3000');


