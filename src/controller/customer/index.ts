import Router from 'koa-router';
import { Context } from 'koa';
import { createConnection } from 'typeorm';
import { Customer } from '@entity';

const router = new Router();

router.get('/customer/:id', async (ctx: Context) => {
  await createConnection()
  const { id } = ctx.params;
  const customer = await Customer.findOne(id, {
    relations: ['currentVersion']
  })
  const name = customer.currentVersion.name;
  ctx.body = name
});


export default router;