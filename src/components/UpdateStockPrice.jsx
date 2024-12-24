import { useContext, useEffect, useState } from "react";

function UpdateStockPrice(prop) {
  // const { newStock, setStockList, stockList } = useContext(StockContext);

  const [stock, setStock] = useState(prop.stock);
  const [price, setPrice] = useState(0);
  const [pnl, setPNL] = useState(0);
  const [load, setLoad] = useState("false");

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
    console.log("first: " + load);
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

    setLoad(2);
    console.log("second: " + load);
  }, [stock]);

  return load ? (
    <>
      <li className="stock">
        <p>Symbol: {stock["symbol"]}</p>
        <p>Quantity: {stock["quantity"]}</p>
        <p>Purchase Price: {stock["purchasePrice"]}</p>
        <p>Current Price: {price}</p>
        {pnl >= 0 ? (
          <p style={{ color: "green" }}>Profit/Loss: {pnl}</p>
        ) : (
          <p style={{ color: "red" }}>Profit/Loss: {pnl}</p>
        )}
      </li>
    </>
  ) : (
    <>This is loading</>
  );
}

export default UpdateStockPrice;
