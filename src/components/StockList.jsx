import { useContext } from "react";
import StockContext from "../contexts/StockContext.js";

function StockList() {
  const { updatedStockList } = useContext(StockContext);

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
        {console.log("stock list")}
        {updatedStockList.map((stock, index) => {
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
