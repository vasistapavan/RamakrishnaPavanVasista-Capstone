import { useCallback, useContext, useEffect } from "react";
import StockContext from "../contexts/StockContext";
import UpdateStockPrice from "./UpdateStockPrice";

function Input() {
  const { setStockList, stockList, setUpdatedStockList } =
    useContext(StockContext);

  const fetchAPIFunc = useCallback(async (symbol) => {
    let price = fetch(
      //"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
        symbol +
        "&apikey=EKD0K8D419Y6KJ6O"
    )
      .then((res) => res.json())
      .then((res_json) => {
        console.log(res_json["Information"]);
        return res_json["Global Quote"]["05. price"];
      })
      .catch((error) => {
        console.log("API ERROR: " + error);
        return undefined;
      });
    return price;
    //return 234.56;
  }, []);

  useEffect(() => {
    setUpdatedStockList(
      stockList.map((stock) => {
        fetchAPIFunc(stock["symbol"]).then((p) => {
          stock["currentPrice"] = p;
        });
        console.log("Displaying the stock after updating price:");
        console.log(stock);
        return { ...stock };
      })
    );
    console.log("Stock prices updated");
  }, [stockList]);

  const handleStockUpdate = async () => {
    let symbol = document.getElementById("symbol").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("purchasePrice").value;
    let currentPrice = 0;
    if (symbol !== "") {
      currentPrice = await fetchAPIFunc(symbol);
    }

    if (typeof currentPrice !== "undefined" && currentPrice != 0) {
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
