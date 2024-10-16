import BalanceForm from "./BalanceForm";
import style from "./Display.module.css";
import Header from "./Header";
import TransactionHistory from "./TransactionsHistory";

export default function Display() {
  return (
    <div className={style.wrapper}>
      <Header />
      <BalanceForm />
      <TransactionHistory />
    </div>
  );
}
