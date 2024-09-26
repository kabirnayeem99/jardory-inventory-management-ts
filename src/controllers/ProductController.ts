import { IProductRepository } from "../repositories/IProductRepository.ts";
import { Product } from "../entities/Product.ts";
import { Request } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import { ProductInputDto } from "../dtos/ProductInputDto.ts";
import { ZodError } from "https://deno.land/x/zod@v3.23.8/mod.ts";
import { ResponseBody } from "https://deno.land/x/oak@v17.0.0/response.ts";

export class ProductController {
  constructor(private productRepository: IProductRepository) {}

  async addNewProduct(req: Request): Promise<ResponseBody> {
    try {
      const body = await req.body.json();
      const productInput = ProductInputDto.parse(body);
      const productId = crypto.randomUUID();
      const product = new Product(
        productId,
        productInput.name,
        productInput.sku,
        productInput.price,
        productInput.stock
      );
      this.productRepository.add(product);
      return JSON.stringify(product);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues);
        return JSON.stringify((error as ZodError).issues);
      } else {
        console.error("Something went wrong. " + error);
        return JSON.stringify(error);
      }
    }
  }
}
