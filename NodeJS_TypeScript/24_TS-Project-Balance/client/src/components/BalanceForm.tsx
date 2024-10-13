import { useEffect, useState } from "react";
import style from "./BalanceForm.module.css";
import { $api } from "../api";
import { id } from "../config/index.ts";

export default function BalanceForm() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    $api
      .get(`/get-balance/${id}`)
      .then((res) => setBalance(res.data.currentBalance));
  }, []);

  const handleRemoveBalance = (e) => {};
  const handleAddBalance = (e) => {
    e.preventDefault();
    $api.post(
      "/add",
      {
        userId: id,
        amount: 5,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className={style.balance}>
      <p>{balance}$</p>
      <form>
        <label>Balance</label>
        <input type="text" placeholder="$ 0.00" />
        <button className={style.primary} onClick={(e) => handleAddBalance(e)}>
          Add balance
        </button>
        <button
          className={style.secondary}
          onClick={(e) => handleRemoveBalance(e)}
        >
          Remove balance
        </button>
      </form>
      <button className={style.elephant}></button>
    </div>
  );
}
