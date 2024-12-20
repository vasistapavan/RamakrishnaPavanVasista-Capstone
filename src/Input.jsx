import { useContext, useEffect, useState } from "react";
import form from "react";
import StockList from "./stocklist.jsx";
import StockContext from "./contexts/StockContext.js";

function Input() {
  const { newStock, setNewStock, stockList, setStockList } =
    useContext(StockContext);

  function handleEvent() {
    let symbol = document.getElementById("symbol").value;
    let purchasePrice = document.getElementById("buyPrice").value;
    let quantity = document.getElementById("quantity").value;
    if (document.getElementById("symbol").value.trim() !== "") {
      //setNewStock({ symbol, purchasePrice, quantity });
      setStockList([...stockList, { symbol, purchasePrice, quantity }]);
      setNewStock({ symbol, purchasePrice, quantity });
    }

    document.getElementById("symbol").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("buyPrice").value = "";
  }

  return (
    <>
      <form className="input-flex">
        <input type="text" placeholder="Stock Symbol" id="symbol"></input>
        <input type="number" placeholder="Quantity" id="quantity"></input>
        <input type="number" placeholder="Purchase Price" id="buyPrice"></input>
        <button type="button" onClick={handleEvent}>
          Add Stock
        </button>
      </form>
    </>
  );
}

export default Input;
