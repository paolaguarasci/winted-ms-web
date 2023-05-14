import { Resource } from './Resource';
import { User } from './User';

export class Product extends Resource<Product> {
  public img!: string;
  public price!: string;
  public prefered!: number;
  public size!: string;
  public brand!: string;
  public user!: User;

  constructor(model?: Partial<Product>) {
    super(model);
  }
}
