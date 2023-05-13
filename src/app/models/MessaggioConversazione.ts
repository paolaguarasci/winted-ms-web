export interface MessaggioConversazione {
  corpo: string;
  mittente: string;
  destinatario: string;
  tipo: MessaggioConversazioneTipi;
  timestamp: string;
  timeAgo: string;
  visto: boolean;
}

export enum MessaggioConversazioneTipi {
  testo = 'TESTO',
  immagini = 'IMG',
  domanda = 'DOMANDA',
}
