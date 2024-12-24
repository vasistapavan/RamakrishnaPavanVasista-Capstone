import { useContext } from "react";
import StockContext from "../contexts/StockContext.js";

function Input() {
  const { stockList, setStockList } = useContext(StockContext);

  function handleEvent() {
    if (document.getElementById("symbol").value.trim() !== "") {
      //setNewStock({ symbol, purchasePrice, quantity });
      setStockList([
        ...stockList,
        {
          symbol: document.getElementById("symbol").value,
          purchasePrice: document.getElementById("buyPrice").value,
          quantity: document.getElementById("quantity").value,
        },
      ]);
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
