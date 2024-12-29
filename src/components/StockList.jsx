import { useContext } from "react";
import StockContext from "../contexts/StockContext.js";

function StockList() {
  const { updatedStockList, isUpdated } = useContext(StockContext);
  console.log("Checking for stock List...");
  console.log(updatedStockList);

  let no_of_stocks = updatedStockList.length;
  if (no_of_stocks === 0) {
    return (
      <>
        <h2>Stock List</h2>
        <p>No stocks added yet.</p>
      </>
    );
  }

  return (
    <>
      <h2>Stock List</h2>
      <ul>
        {console.log(updatedStockList)}
        {console.log("Listing Stocks with PNL information")}
        {isUpdated === true &&
          updatedStockList.map((stock, index) => {
            let pnl = (
              (stock["currentPrice"] - stock["purchasePrice"]) *
              stock["quantity"]
            ).toFixed(2);
            return (
              <li className="stock" key={index}>
                <p>Stock Symbol: {stock["symbol"]}</p>
                <p>Stock Quantity: {stock["quantity"]}</p>
                <p>Purchase Price: {stock["purchasePrice"]}</p>
                <p>Current Price: {stock["currentPrice"]}</p>
                {pnl >= 0 ? (
                  <p style={{ color: "green" }}>Profit/Loss: {pnl}</p>
                ) : (
                  <p style={{ color: "red" }}>Profit/Loss: {pnl}</p>
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default StockList;
