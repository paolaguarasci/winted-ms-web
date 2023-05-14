import { Resource } from './Resource';
import { User } from './User';

export enum MessaggioConversazioneTipi {
  testo = 'TESTO',
  immagini = 'IMG',
  domanda = 'DOMANDA',
}

export class MessaggioConversazione extends Resource<MessaggioConversazione> {
  public corpo!: string;
  public mittente!: User;
  public destinatario!: User;
  public tipo!: MessaggioConversazioneTipi;
  public timestamp!: string;
  public timeAgo!: string;
  public visto!: boolean;

  constructor(model?: Partial<MessaggioConversazione>) {
    super(model);
  }
}
