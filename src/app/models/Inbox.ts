import { AnteprimaInbox } from './AnteprimaInbox';
import { Conversazione } from './Conversazione';
import { Resource } from './Resource';
import { User } from './User';

export class Inbox extends Resource<Inbox> {
  public anteprime!: AnteprimaInbox[];
  public conversazione!: Conversazione;

  constructor(model?: Partial<Inbox>) {
    super(model);
  }
}
