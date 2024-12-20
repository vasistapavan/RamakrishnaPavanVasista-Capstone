import { useContext } from "react";
import StockContext from "./contexts/StockContext.js";
import UpdateStockPrices from "./StockCurrentPrice.jsx";

function StockList() {
  const { stockList } = useContext(StockContext);
  let no_of_stocks = stockList.length;
  console.log(no_of_stocks);
  // console.log(
  //   "Inside StockList: " + props.stockList + " " + props.stockList.length
  // );

  return (
    <>
      <h2>Stock List</h2>
      {no_of_stocks ? (
        <ul className="stock-list">
          {stockList.map((stockData) => {
            console.log(Object.keys(stockData).length);
            return Object.keys(stockData).length > 0 ? (
              <>
                <li className="stock">
                  <p>Symbol: {stockData["symbol"]}</p>
                  <p>Quantity: {stockData["quantity"]}</p>
                  <p>Purchase Price: {stockData["purchasePrice"]}</p>
                  <UpdateStockPrices stock={stockData} />
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
