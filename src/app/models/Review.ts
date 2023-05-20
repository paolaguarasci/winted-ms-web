import { Resource } from "./Resource";

export class Review extends Resource<Review> {
  public userid!: String;
  public star!: number;
  public textMessage!: string;
  public timesAgo!: string; 

  constructor(model?: Partial<Review>) {
    super(model);
  }
}
