"use client";
import { useEffect, useState } from "react";

const HelloNext = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // запрос со стороны клиента
      .then((data) => {
        data.json();
      })
      .then((res) => {
        setState(res);
      });
  }, []);
  return <div>Hello Next Component</div>;
};

export default HelloNext;
