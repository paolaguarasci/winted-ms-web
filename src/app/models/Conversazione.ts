import { MessaggioConversazioneTipi } from "./MessaggioConversazione";
import { Resource } from "./Resource";

export class Conversazione extends Resource<Conversazione> {
  public messaggi!: MessaggioConversazioneTipi[];
  public altroUtente!: string;
  public prodottoCorrelato!: string;

  constructor(model?: Partial<Conversazione>) {
    super(model);
  }
}
