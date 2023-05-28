import { Resource } from "./Resource";

export class Notifica extends Resource<Notifica> {
  public userid!: string;
  public productid!: string;
  public textMessage!: string;
  public timesAgo!: string; 
  public read!: boolean;

  constructor(model?: Partial<Notifica>) {
    super(model);
  }
}
