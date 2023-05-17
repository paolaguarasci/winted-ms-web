import { Resource } from './Resource';

export class Order extends Resource<Order> {
  constructor(model?: Partial<Order>) {
    super(model);
  }
}
