import { MessaggioConversazione } from './MessaggioConversazione';
import { Resource } from './Resource';

export class Conversazione extends Resource<Conversazione> {
  public messaggi!: MessaggioConversazione[];
  public altroUtente!: string;
  public ratingAltroUtente!: number;
  public prodottoCorrelato!: string;

  constructor(model?: Partial<Conversazione>) {
    super(model);
  }
}
