import { SubmitOrder } from './use-cases/submit-order'
import { PostgresOrdersRepository } from './repositories/postgres/postgres-orders-repository'

const submitOrder = new SubmitOrder(
  new PostgresOrdersRepository()
)

submitOrder.execute({
  customerDocument: '143',
  total: 2000
})
