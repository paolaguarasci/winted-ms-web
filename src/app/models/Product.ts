import { Resource } from './Resource';
import { User } from './User';

export class Product extends Resource<Product> {
  public price!: string;
  public prefered!: number;
  public size!: string;
  public brand!: string;
  public owner!: User;
  public featured!: string;
  public description!: string;
  public resources!: string[];
  public name!: string;

  constructor(model?: Partial<Product>) {
    super(model);
    if (!model?.prefered) {
      this.prefered = 0;
    }
  }
}
