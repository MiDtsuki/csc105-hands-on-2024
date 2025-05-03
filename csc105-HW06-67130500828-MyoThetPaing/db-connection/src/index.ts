import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/index.js'
import { mainRouter } from './routes/index.route.ts';

const app = new Hono()

export const db = new PrismaClient();


db.$connect()
  .then(()=> {
    console.log("Connected to database");
  })
  .catch((error)=>{
    console.error("error connection database:", error);
  });
app.route("", mainRouter);
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
