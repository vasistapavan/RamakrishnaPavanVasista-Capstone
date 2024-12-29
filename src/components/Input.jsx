import { useCallback, useContext, useEffect } from "react";
import StockContext from "../contexts/StockContext";

function Input() {
  const { setStockList, stockList, setUpdatedStockList, setIsUpdated } =
    useContext(StockContext);

  const fetchAPIFunc = useCallback((symbol) => {
    setIsUpdated(false);
    let price = fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
      // "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
      //   symbol +
      //   "&apikey=EKD0K8D419Y6KJ6O"
    )
      .then((res) => res.json())
      .then((res_json) => {
        console.log(res_json["Information"]);
        return res_json["Global Quote"]["05. price"];
      })
      .catch((error) => {
        console.log("API ERROR: " + error);
        alert("Invalid Symbol or API limit breached. Returning a dummy price");
        return undefined;
      });
    setIsUpdated(true);
    return price;
    //return 234.56;
  }, []);

  useEffect(() => {
    let newSL = stockList.map((stock) => {
      fetchAPIFunc(stock["symbol"]).then((p) => {
        stock["currentPrice"] = p;
        console.log(stock);
      });
      console.log("Displaying the stock after updating price:");
      console.log(stock);
      return { ...stock };
    });

    setUpdatedStockList(newSL);

    console.log("Stock prices updated");
  }, [stockList]);

  const handleStockUpdate = async () => {
    setIsUpdated(false);
    let symbol = document.getElementById("symbol").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("purchasePrice").value;
    let currentPrice = undefined;
    // if (symbol !== "") {
    //   currentPrice = await fetchAPIFunc(symbol);
    // }

    if (symbol !== "") {
      console.log("Adding stock: " + symbol + " to stockList");
      setStockList((prevState) => [
        ...prevState,
        {
          symbol: symbol,
          quantity: quantity,
          purchasePrice: price,
          currentPrice: currentPrice,
        },
      ]);
    }

    document.getElementById("symbol").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("purchasePrice").value = "";
  };

  return (
    <>
      <form className="input-flex">
        <input type="text" placeholder="Stock Symbol" id="symbol" />
        <input type="number" placeholder="Quantity" id="quantity" />
        <input type="number" placeholder="Purchase Price" id="purchasePrice" />
        <button type="button" onClick={handleStockUpdate}>
          Add Stock
        </button>
      </form>
    </>
  );
}

export default Input;
