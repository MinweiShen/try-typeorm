import "reflect-metadata";
import 'module-alias/register';
import Koa from 'koa';
import router from './controller';


const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

console.log('Starting server on port 3000...')

app.listen(3000)