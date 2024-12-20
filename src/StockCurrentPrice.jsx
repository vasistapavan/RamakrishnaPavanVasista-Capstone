import { useContext, useEffect, useState } from "react";

function UpdateStockPrices(prop) {
  // const { newStock, setStockList, stockList } = useContext(StockContext);

  const [stock, setStock] = useState(prop.stock);
  const [price, setPrice] = useState(0);
  const [pnl, setPNL] = useState(0);

  useEffect(() => {
    // fetch(
    //   "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    //     stock["symbol"] +
    //     "&apikey=EKD0K8D419Y6KJ6O"
    // )
    const handleFetch = async (symbol) => {
      return fetch(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
      ).then((res) => res.json());
    };

    //set Current Price for the stock from API
    handleFetch(stock["symbol"]).then((body) =>
      setPrice(body["Global Quote"]["05. price"])
    );

    //Calculate PNL based on current price
    handleFetch(stock["symbol"]).then((body) =>
      setPNL(
        (
          stock["quantity"] *
          (body["Global Quote"]["05. price"] - stock["purchasePrice"])
        ).toFixed(2)
      )
    );
  }, [stock]);

  return (
    <>
      <p>Current Price: {price}</p>
      {pnl >= 0 ? (
        <p style={{ color: "green" }}>Profit/Loss: {pnl}</p>
      ) : (
        <p style={{ color: "red" }}>Profit/Loss: {pnl}</p>
      )}
    </>
  );
}

export default UpdateStockPrices;
