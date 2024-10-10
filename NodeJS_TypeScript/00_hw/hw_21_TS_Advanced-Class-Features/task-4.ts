// Абстрактный класс Account ------------------------------------------------------------

abstract class Account {
  balance: number; // Текущий баланс на счете

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Абстрактные методы для внесения и снятия денег
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  // Метод для вывода текущего баланса
  getBalance(): number {
    return this.balance;
  }
}

// Класс SavingsAccount (Сберегательный счет)
class SavingsAccount extends Account {
  interestRate: number; // Процентная ставка

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  // Метод для внесения денег
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into SavingsAccount. New balance: ${this.balance}`);
  }

  // Метод для снятия денег
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from SavingsAccount. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds for withdrawal in SavingsAccount.");
    }
  }

  // Начисление процентов
  applyInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Applied interest: ${interest}. New balance: ${this.balance}`);
  }
}

// Класс CheckingAccount (Текущий счет)
class CheckingAccount extends Account {
  transactionFee: number; // Комиссия за транзакцию

  constructor(initialBalance: number, transactionFee: number) {
    super(initialBalance);
    this.transactionFee = transactionFee;
  }

  // Метод для внесения денег
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into CheckingAccount. New balance: ${this.balance}`);
  }

  // Метод для снятия денег с учетом комиссии
  withdraw(amount: number): void {
    const totalAmount = amount + this.transactionFee;
    if (totalAmount <= this.balance) {
      this.balance -= totalAmount;
      console.log(`Withdrew ${amount} + fee ${this.transactionFee} from CheckingAccount. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds for withdrawal in CheckingAccount.");
    }
  }
}

// Пример использования
const savingsAccount = new SavingsAccount(1000, 0.05); // Процентная ставка 5%
savingsAccount.deposit(500);
savingsAccount.applyInterest(); // Начисление процентов
savingsAccount.withdraw(300);
console.log(`Savings Account Balance: ${savingsAccount.getBalance()}`);

const checkingAccount = new CheckingAccount(500, 2); // Комиссия за снятие 2 единицы
checkingAccount.deposit(200);
checkingAccount.withdraw(100);
console.log(`Checking Account Balance: ${checkingAccount.getBalance()}`);
