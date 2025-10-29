// SOLID

// - SRP
// - OCP
// - LSP
// - ISP
// - DIP

// billet, credit, debit

interface Card {
  number: number;
  cvv: number;
  expiration: number;
}

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.1;
  };
}

class Credit implements PaymentMethod, Card {
  private installments: number;
  number: number;
  cvv: number;
  expiration: number;

  constructor(installments: number, cardData: Card) {
    this.installments = installments
    this.number = cardData.number;
    this.cvv = cardData.cvv;
    this.expiration = cardData.expiration;
  }

  getDiscountAmount(amount: number) {
    if (this.installments === 1) {
      return amount * 0.05;
    }
    if (this.installments <= 6) {
      return amount * 0.02
    }
    return 0;
  };
}

class Debit implements PaymentMethod, Card {
  number: number;
  cvv: number;
  expiration: number;

  constructor(cardData: Card) {
    this.number = cardData.number;
    this.cvv = cardData.cvv;
    this.expiration = cardData.expiration;
  }
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  };
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.2;
  };
}

// We call Dependency Inversion coz who calls is who says what will be the dependency PaymentMethod
class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod= paymentMethod
  }

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Pix())

calculateOrderDiscount.execute(
  2000
)

// This way, our class just became open to extension & closed to modification

















class SubmitOrderInvoice {
  public execute() {
    // invoice emit
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}