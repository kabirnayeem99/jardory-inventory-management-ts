import { Router } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import { ProductController } from "../controllers/ProductController.ts";
import { ProductRepository } from "../repositories/implementations/ProductRepository.ts";

const router = new Router();
const productRepository = new ProductRepository();
const productController = new ProductController(productRepository);

router.post("/product-management/add-new-product", async (ctx) => {
  ctx.response.body = await productController.addNewProduct(ctx.request);
});

export default router;
