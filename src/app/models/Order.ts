import { Resource } from './Resource';

export class Order extends Resource<Order> {
  public buyer!: string;
  public product!: string;
  public owner!: string;
  public status!: string;
  public address!: string;
  public paymendMethod!: string;
  public conversationId!: string;

  constructor(model?: Partial<Order>) {
    super(model);
  }
}
