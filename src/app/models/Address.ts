import { Resource } from "./Resource";

export class Address extends Resource<Address> {
  public nome!: string;
  public cognome!: string;
  public via!: string;
  public citta!: string;
  public numeroCivico!: string;
  public cap!: string;

  constructor(model?: Partial<Address>) {
    super(model);
  }
}