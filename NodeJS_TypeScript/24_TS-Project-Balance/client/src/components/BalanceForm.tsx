import { FormEvent, useEffect, useState } from "react";
import style from "./BalanceForm.module.css";
import { $api } from "../api";
// import { id } from "../config/index.js";

export default function BalanceForm() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const id = sessionStorage.getItem("user");

  useEffect(() => {
    $api
      .get(`/get-balance/${id}`)
      .then((res) => setBalance(res.data.currentBalance));
  }, []);

  const handleRemoveBalance = (e: FormEvent) => {
    e.preventDefault();
    $api.post(
      "/remove",
      {
        userId: id,
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleAddBalance = (e: FormEvent) => {
    e.preventDefault();
    $api.post(
      "/add",
      {
        userId: id,
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleOnTap = (e: FormEvent) => {
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

  const handleInputChange = (e: any) => setAmount(e.target?.value);

  return (
    <div className={style.balance}>
      <p>{balance}$</p>
      <form>
        <label>Balance</label>
        <input
          value={amount}
          onChange={handleInputChange}
          type="number"
          placeholder="$ 0.00"
          name="amount"
        />
        <button className="primary" onClick={handleAddBalance}>
          Add balance
        </button>
        <button className="secondary" onClick={handleRemoveBalance}>
          Remove balance
        </button>
      </form>
      <button onClick={handleOnTap} className={style.elephant}></button>
    </div>
  );
}
