// deno-lint-ignore-file no-explicit-any
import { IProductRepository } from "../repositories/IProductRepository.ts";
import { Product } from "../entities/Product.ts";
import { Request } from "https://deno.land/x/oak@v17.0.0/mod.ts";
import { ProductInputDto } from "../dtos/ProductInputDto.ts";
import { ZodError } from "https://deno.land/x/zod@v3.23.8/mod.ts";
import { ResponseBody } from "https://deno.land/x/oak@v17.0.0/response.ts";
import { createResponseString } from "../presentation/utils/BaseResponse.ts";
import { toGenericIssuesList } from "../presentation/utils/handleZodErrors.ts";

export class ProductController {
  constructor(private productRepository: IProductRepository) {}

  addNewProduct(
    requestBody: any,
    onResponse: (responseBody: string, statusCode: number) => void
  ) {
    try {
      const productInput = ProductInputDto.parse(requestBody);
      const productId = crypto.randomUUID();
      const product = new Product(
        productId,
        productInput.name,
        productInput.sku,
        productInput.price,
        productInput.stock
      );
      this.productRepository.add(product);
      const responseBody = createResponseString({
        statusCode: 200,
        data: product,
      });
      onResponse(responseBody, 200);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues);
        const responseBody = createResponseString({
          statusCode: 400,
          errors: toGenericIssuesList({ error: error }),
          message: "Required fields are missing.",
        });
        onResponse(responseBody, 400);
      } else {
        console.error("Something went wrong. " + error);
        const responseBody = createResponseString({
          statusCode: 500,
          message: error,
        });
        onResponse(responseBody, 500);
      }
    }
  }
}
