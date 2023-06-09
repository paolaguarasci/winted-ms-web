import { Resource } from './Resource';
import { User } from './User';

export enum MessaggioConversazioneTipi {
  testo = 'TESTO',
  immagini = 'IMG',
  domanda = 'DOMANDA',
  offert_request = 'OFFERT_REQUEST',
  offert_response = 'OFFERT_RESPONSE',
  system = 'SYSTEM',
  system_request = 'SYSTEM_REQUEST'
}

export class MessaggioConversazione extends Resource<MessaggioConversazione> {
  public from!: string;
  public to!: string;
  public content!: string;
  public answer!: string;
  public timestamp!: string;
  public tipo!: MessaggioConversazioneTipi;
  public timeAgo!: string;
  public visto!: boolean;
  public messageType!: MessaggioConversazioneTipi;
  public needAnswer!: boolean;
  public isAnswerTo!: string;
  public offerta!: string;

  constructor(model?: Partial<MessaggioConversazione>) {
    super(model);
  }
}
