import { Router } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import { ProductController } from "../controllers/ProductController.ts";
import { ProductRepository } from "../repositories/implementations/ProductRepository.ts";

const router = new Router();
const productRepository = new ProductRepository();
const productController = new ProductController(productRepository);

router.post("/product-management/add-new-product", (ctx) => {
  productController.addNewProduct(ctx, (responseBody, statusCode) => {
    ctx.response.status = statusCode;
    ctx.response.body = responseBody;
  });
});

export default router;
