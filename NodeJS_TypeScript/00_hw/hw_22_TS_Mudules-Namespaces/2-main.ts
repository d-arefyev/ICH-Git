// Пространства имен для финансовых операций --------------------------------

// <reference path="2-finance.ts" />

import { Finance } from './2-finance';

// Примерные данные для расчета
const loanPrincipal = 20000; // Сумма кредита
const annualInterestRate = 5; // Процентная ставка
const loanYears = 5; // Срок кредита

const income = 50000; // Годовой доход
const taxRate = 20; // Налоговая ставка

// Использование классов из пространства имен Finance
const loanCalculator = new Finance.LoanCalculator(loanPrincipal, annualInterestRate, loanYears);
const monthlyPayment = loanCalculator.calculateMonthlyPayment();
console.log(`Ежемесячный платеж по кредиту: $${monthlyPayment.toFixed(2)}`);

const taxCalculator = new Finance.TaxCalculator(income, taxRate);
const tax = taxCalculator.calculateTax();
console.log(`Налог на доход: $${tax.toFixed(2)}`);
