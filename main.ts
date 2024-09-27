// mod.ts
import { Application } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import productRoutes from "./src/routes/productRoutes.ts";
import { createResponseString } from "./src/presentation/utils/BaseResponse.ts";

const app = new Application();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.status || 500;
    ctx.response.body = createResponseString({
      statusCode: err.status || 500,
      message: err,
    });
  }
});

app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());

const PORT = 8080;
console.log(`Server running on http://localhost:${PORT}/`);
await app.listen({ port: PORT });
