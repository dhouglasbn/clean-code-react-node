export class Order {
  public createdAt: Date;
  public total: number;
  public customerDocument: string;

  constructor(total: number, customerDocument: string) {
    this.total = total;
    this.createdAt = new Date();
    this.customerDocument = customerDocument;
  }
}