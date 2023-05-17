import { Resource } from './Resource';
import { User } from './User';

export enum MessaggioConversazioneTipi {
  testo = 'TESTO',
  immagini = 'IMG',
  domanda = 'DOMANDA',
}

export class MessaggioConversazione extends Resource<MessaggioConversazione> {
  public from!: User;
  public to!: User;
  public content!: string;
  public answer!: string;
  public timestamp!: string;
  public tipo!: MessaggioConversazioneTipi;
  public timeAgo!: string;
  public visto!: boolean;

  constructor(model?: Partial<MessaggioConversazione>) {
    super(model);
  }
}
