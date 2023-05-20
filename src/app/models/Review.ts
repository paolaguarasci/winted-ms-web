import { Resource } from "./Resource";

export class Review extends Resource<Review> {
  public userid!: string;
  public star!: number;
  public textMessage!: string;
  public timesAgo!: string; 

  constructor(model?: Partial<Review>) {
    super(model);
  }
}
