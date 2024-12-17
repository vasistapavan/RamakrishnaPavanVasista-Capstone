import { useState } from "react";
import form from "react";

function Input() {
  const [stockSymbol, setStockSymbol] = useState("");

  function handleEvent() {
    let symbol = document.getElementById("sym").value;
    console.log("stock symbol is " + symbol);
    document.getElementById("sym").value = "";
  }

  return (
    <div className="input-flex">
      <input type="text" placeholder="Stock Symbol" id="sym"></input>
      <input type="text" placeholder="Quantity"></input>
      <input type="text" placeholder="Purchase Price"></input>
      <button type="button" onClick={handleEvent}>
        Add Stock
      </button>
    </div>
  );
}

export default Input;
