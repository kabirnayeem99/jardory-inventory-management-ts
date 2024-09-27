import { Product } from "../../entities/Product.ts";
import { IProductRepository } from "../IProductRepository.ts";

export class ProductRepository implements IProductRepository {
  private products: Product[] = [
    {
      id: "7808e830-9af8-4413-bbf9-3563f9f873b7",
      name: "Intel Xeon E5-2690 v4 Processor (14 Core, 2.60 GHz)",
      sku: "SKU-CPU-2690V4",
      price: 1299.99,
      stock: 50,
    },
    {
      id: "a12c6bee-4223-4aca-b322-fbf393b4b6cf",
      name: "Samsung 32GB DDR4 2666MHz ECC Registered RAM",
      sku: "SKU-RAM-32GB-ECC",
      price: 299.99,
      stock: 120,
    },
    {
      id: "2a915fa2-27c1-4fb5-be36-11402739b4c6",
      name: 'Seagate Exos X16 12TB 7200RPM 3.5" Hard Drive',
      sku: "SKU-HDD-12TB-X16",
      price: 429.99,
      stock: 80,
    },
    {
      id: "3b64087e-9a1a-457d-a6fd-e00af2b80291",
      name: "Supermicro X11DPi-N Dual LGA3647 Server Motherboard",
      sku: "SKU-MB-X11DPI-N",
      price: 649.99,
      stock: 35,
    },
    {
      id: "462a9dad-0fa4-4a3c-92a0-046eb16f0145",
      name: "NVIDIA Tesla V100 PCIe 32GB Graphics Card",
      sku: "SKU-GPU-V100-32GB",
      price: 9999.99,
      stock: 20,
    },
    {
      id: "b2d0966c-2e0a-45c8-a227-9490881ddca3",
      name: "Corsair AX1600i 1600W Titanium ATX Power Supply",
      sku: "SKU-PSU-AX1600i",
      price: 479.99,
      stock: 65,
    },
  ];

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
