import { Product } from "../../entities/Product.ts";
import { IProductRepository } from "../IProductRepository.ts";

export class ProductRepository implements IProductRepository {
  private products: Product[] = [];

  async add(product: Product): Promise<Product> {
    this.products.push(product);
    await this.delay(100);
    return product;
  }

  async update(product: Product): Promise<Product> {
    const index = this.products.findIndex((p) => p.id === product.id);
    await this.delay(100);
    if (index > -1) {
      this.products[index] = product;
      return product;
    }
    throw new Error("Product not found for id " + product.id);
  }

  async delete(id: string): Promise<void> {
    await this.delay(100);
    this.products = this.products.filter((p) => p.id !== id);
  }

  async findById(id: string): Promise<Product | null> {
    await this.delay(100);
    return this.products.find((p) => p.id === id) || null;
  }

  async findAll(): Promise<Product[]> {
    await this.delay(100);
    return this.products;
  }

  delay(ms: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
