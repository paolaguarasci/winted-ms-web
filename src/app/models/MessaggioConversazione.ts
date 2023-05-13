import { Resource } from './Resource';

export enum MessaggioConversazioneTipi {
  testo = 'TESTO',
  immagini = 'IMG',
  domanda = 'DOMANDA',
}

export class MessaggioConversazione extends Resource<MessaggioConversazione> {
  public corpo!: string;
  public mittente!: string;
  public destinatario!: string;
  public tipo!: MessaggioConversazioneTipi;
  public timestamp!: string;
  public timeAgo!: string;
  public visto!: boolean;

  constructor(model?: Partial<MessaggioConversazione>) {
    super(model);
  }
}
