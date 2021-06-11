//Q7
const Router = require("@koa/router");

//Q8
const router = new Router ({
    prefix: '/home'
});

router.get('/', ctx => {
    ctx.body = 'Hello World from GET';
});

router.post('/', ctx => {
    ctx.body = 'Hello World from POST';
});

//Q9
module.exports = router;
