import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

export const ProductInputDto = z.object({
  name: z.string().min(1, { message: "name is required" }),
  sku: z.string(),
  price: z.number(),
  stock: z.number(),
});
