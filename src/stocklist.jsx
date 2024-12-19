import { useEffect, useState } from "react";
import StockCurrentPrice from "./StockCurrentPrice.jsx";

function StockList(props) {
  let no_of_stocks = props.userStockList.length;
  console.log("Inside StockList: " + props.userStockList);

  return (
    <>
      <h2>Stock List</h2>
      {no_of_stocks ? (
        <ul className="stock-list">
          {props.userStockList.map((stockData) => {
            return stockData.length > 0 ? (
              <>
                <li className="stock">
                  <p>Symbol: {stockData[0]}</p>
                  <p>Quantity: {stockData[1]}</p>
                  <p>Purchase Price: {stockData[2]}</p>
                  <p>Current Price: {stockData[3]}</p>
                  <p id="pnl">Profit/Loss: {stockData[4]}</p>
                </li>
              </>
            ) : (
              <></>
            );
          })}
        </ul>
      ) : (
        <p>No stocks added yet.</p>
      )}
    </>
  );
}

export default StockList;
