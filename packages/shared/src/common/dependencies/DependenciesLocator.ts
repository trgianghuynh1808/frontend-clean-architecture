import { ProductInMemoryRepository } from "../../product/data/repository";
import { ProductUseCase } from "../../product/domain/use-case";
import { ProductsPloc } from "../../product/presentation/ploc";

function provideProductsPloc(): ProductsPloc {
  const productRepository = new ProductInMemoryRepository();
  const productUseCase = new ProductUseCase(productRepository);
  const productsPloc = new ProductsPloc(productUseCase);

  return productsPloc;
}

export const dependenciesLocator = {
  provideProductsPloc,
};
