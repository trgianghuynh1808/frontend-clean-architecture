import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Product } from "../interface/ProductInterface";

export interface ProductRepository {
  get(filter: string): Promise<Either<DataError, Product[]>>;
}
