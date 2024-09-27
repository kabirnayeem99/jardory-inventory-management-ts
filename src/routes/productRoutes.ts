import { Router } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import { ProductController } from "../controllers/ProductController.ts";
import { ProductRepository } from "../repositories/implementations/ProductRepository.ts";

const router = new Router();
const productRepository = new ProductRepository();
const productController = new ProductController(productRepository);

router
  .post("/product-management/add-new-product", async (ctx) => {
    productController.addNewProduct(
      await ctx.request.body.json(),
      (responseBody, statusCode) => {
        ctx.response.status = statusCode;
        ctx.response.body = responseBody;
      }
    );
  })
  .get("/product-management/products", async (ctx) => {
    await productController.getAllProducts((responseBody, statusCode) => {
      ctx.response.status = statusCode;
      ctx.response.body = responseBody;
    });
  })
  .get("/product-management/products/:productId", async (ctx) => {
    const productId = ctx.params.productId;
    await productController.getProductById(
      productId,
      (responseBody, statusCode) => {
        ctx.response.status = statusCode;
        ctx.response.body = responseBody;
      }
    );
  });

export default router;
