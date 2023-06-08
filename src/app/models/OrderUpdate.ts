import { Resource } from './Resource';

export class OrderUpdate extends Resource<OrderUpdate> {
  public addressId!: String;
  public paymentMethodId!: String;
  constructor(model?: Partial<OrderUpdate>) {
    super(model);
  }
}
