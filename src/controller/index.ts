import Router from 'koa-router';
import customerRoute from './customer';


const globalRouter = new Router();
const routes = [customerRoute];

routes.forEach(r => {
  globalRouter.use(r.routes()).use(r.allowedMethods());
});

export default globalRouter;