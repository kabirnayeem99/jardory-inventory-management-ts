// mod.ts
import { Application } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import productRoutes from "./src/routes/productRoutes.ts";

const app = new Application();

app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());

const PORT = 8080;
console.log(`Server running on http://localhost:${PORT}/`);
await app.listen({ port: PORT });
