import { Resource } from "./Resource";

export class PaymentMethod extends Resource<PaymentMethod> {
  public titolareCarta!: string;
  public numeroCarta!: string;
  public dataScadenza!: string;
  public ccv!: string;
  public save!: boolean;
  
  constructor(model?: Partial<PaymentMethod>) {
    super(model);
  }
}