import { Resource } from "./Resource";

export class Notifica extends Resource<Notifica> {
  public user!: string;
  public timestamp!: string;
  public content!: string;
  public timeAgo!: string;
  public prodottoCorrelato!: string;
  public read!: string;

  constructor(model?: Partial<Notifica>) {
    super(model);
  }
}
