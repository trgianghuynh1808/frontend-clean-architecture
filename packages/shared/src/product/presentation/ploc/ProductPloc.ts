import { DataError } from "../../../common/domain/DataError";
import { Ploc } from "../../../common/presentation/Ploc";
import { ProductUseCase } from "../../domain";
import { productsInitialState, ProductsState } from "../state/ProductState";

export class ProductsPloc extends Ploc<ProductsState> {
  constructor(private productUseCase: ProductUseCase) {
    super(productsInitialState);
  }

  async search(searchTerm: string) {
    const productResult = await this.productUseCase.get(searchTerm);

    productResult.fold(
      (error) => this.changeState(this.handleError(searchTerm, error)),
      (products) =>
        this.changeState({
          kind: "LoadedProductsState",
          products,
          searchTerm,
        })
    );
  }

  private handleError(searchTerm: string, error: DataError): ProductsState {
    switch (error.kind) {
      case "UnexpectedError": {
        return {
          searchTerm,
          kind: "ErrorProductsState",
          error: "Sorry, an error has ocurred. Please try later again",
        };
      }
    }
  }
}
