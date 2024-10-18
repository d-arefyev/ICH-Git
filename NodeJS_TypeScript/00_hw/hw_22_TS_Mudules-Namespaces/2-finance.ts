// Пространства имен для финансовых операций --------------------------------

export namespace Finance {
  export class LoanCalculator {
    private principal: number;
    private annualInterestRate: number;
    private years: number;

    constructor(principal: number, annualInterestRate: number, years: number) {
      this.principal = principal;
      this.annualInterestRate = annualInterestRate;
      this.years = years;
    }

    // Метод для расчета ежемесячного платежа
    calculateMonthlyPayment(): number {
      const monthlyInterestRate = this.annualInterestRate / 100 / 12;
      const numberOfPayments = this.years * 12;
      const monthlyPayment =
        (this.principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      return monthlyPayment;
    }
  }

  export class TaxCalculator {
    private income: number;
    private taxRate: number;

    constructor(income: number, taxRate: number) {
      this.income = income;
      this.taxRate = taxRate;
    }

    // Метод для расчета налога
    calculateTax(): number {
      return this.income * (this.taxRate / 100);
    }
  }
}
