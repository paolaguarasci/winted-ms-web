import { Resource } from "./Resource";

export class AddressRequest extends Resource<AddressRequest> {
  public nome!: string;
  public cognome!: string;
  public via!: string;
  public citta!: string;
  public numeroCivico!: string;
  public cap!: string;

  constructor(model?: Partial<AddressRequest>) {
    super(model);
  }
}