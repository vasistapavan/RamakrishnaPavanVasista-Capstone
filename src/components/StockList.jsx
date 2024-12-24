import { useContext, useEffect } from "react";
import StockContext from "../contexts/StockContext.js";
import UpdateStockPrice from "./UpdateStockPrice.jsx";

function StockList() {
  const { stockList } = useContext(StockContext);
  let no_of_stocks = stockList.length;

  return (
    <>
      <h2>Stock List</h2>
      {no_of_stocks ? (
        <ul className="stock-list">
          {stockList.map((stockData) => {
            console.log(Object.keys(stockData).length);
            return Object.keys(stockData).length > 0 ? (
              <>
                <UpdateStockPrice stock={stockData} />
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
