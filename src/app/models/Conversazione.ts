import { MessaggioConversazioneTipi } from "./MessaggioConversazione";

export interface Conversazione {
  messaggi: MessaggioConversazioneTipi[];
  altroUtente: string;
  prodottoCorrelato: string;
}
