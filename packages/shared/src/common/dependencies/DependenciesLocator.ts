import { ProductInMemoryRepository } from "../../product/data/ProductInMemoryRepository";
import { GetProductsUseCase } from "../../product/domain/GetProductsUseCase";
import { ProductsPloc } from "../../product/presentation/ProductPloc";

function provideProductsPloc(): ProductsPloc {
  const productRepository = new ProductInMemoryRepository();
  const getProductsUseCase = new GetProductsUseCase(productRepository);
  const productsPloc = new ProductsPloc(getProductsUseCase);

  return productsPloc;
}

export const dependenciesLocator = {
  provideProductsPloc,
};
