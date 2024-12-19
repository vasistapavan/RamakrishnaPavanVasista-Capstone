import { useState } from "react";
import form from "react";

function Input(props) {
  function handleEvent() {
    console.log("Inside input");
    if (document.getElementById("symbol").value.trim() !== "") {
      props.setUserStockList([
        ...props.userStockList,
        [
          document.getElementById("symbol").value,
          document.getElementById("quantity").value,
          document.getElementById("buyPrice").value,
        ],
      ]);
    }
    //console.log(stockList);
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
