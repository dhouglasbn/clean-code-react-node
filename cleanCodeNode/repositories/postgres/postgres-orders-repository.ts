import type { Order } from "../../domain/purchases/order";
import type { OrdersRepository } from "../orders-repository";

export class PostgresOrdersRepository implements OrdersRepository {
  async create(order: Order): Promise<void> {
    // save order in database
  }
}