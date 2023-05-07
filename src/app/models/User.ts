import { Resource } from './Resource';

export class User extends Resource<User> {
  public name!: string;
  public image!: string;

  constructor(model?: Partial<User>) {
    super(model);
  }
}
