import { ProductRepository } from "../repository";
import { Product } from "../interface";
import { Either } from "../../../common/domain/Either";
import { DataError } from "../../../common/domain/DataError";

export class ProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  get(filter: string): Promise<Either<DataError, Product[]>> {
    return this.productRepository.get(filter);
  }
}
