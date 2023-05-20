import { Resource } from './Resource';

export class User extends Resource<User> {
  public username!: string;
  public avatar!: string;
  public reputation!: number;
  public position!: string;
  public lastVisit!: string;
  public follower!: number;
  public seguiti!: number;
  public googleVerified!: boolean;
  public emailVerified!: boolean;
  public facebookVerified!: boolean;

  constructor(model?: Partial<User>) {
    super(model);
  }
}
