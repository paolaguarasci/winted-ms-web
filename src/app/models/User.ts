import { Resource } from './Resource';

export class User extends Resource<User> {
  public username!: string;
  public avatar!: string;
  public reputation!: number;

  constructor(model?: Partial<User>) {
    super(model);
  }
}
