import { MessaggioConversazione } from './MessaggioConversazione';
import { Resource } from './Resource';
import { User } from './User';

export class Conversazione extends Resource<Conversazione> {
  public messages!: MessaggioConversazione[];
  public altroUtente!: string;
  public prodottoCorrelato!: string;

  constructor(model?: Partial<Conversazione>) {
    super(model);
  }
}
