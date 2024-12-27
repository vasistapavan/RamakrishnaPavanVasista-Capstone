import { useContext } from "react";
import StockContext from "../contexts/StockContext";

function Input() {
  const { setStockList } = useContext(StockContext);
  const fetchAPIFunc = async (symbol) => {
    try {
      let res = await fetch(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
        // "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
        //   symbol +
        //   "&apikey=EKD0K8D419Y6KJ6O"
      );
      let res_json = await res.json();
      console.log(res_json["Information"]);
      let price = res_json["Global Quote"]["05. price"];
      return price;
    } catch (err) {
      console.log("API ERROR. Returning a dummy price");
      console.log(err);
      return undefined;
      //return 234.56;
    }
  };

  const handleStockUpdate = async () => {
    let symbol = document.getElementById("symbol").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("purchasePrice").value;
    let currentPrice = await fetchAPIFunc(symbol);

    if (typeof currentPrice !== "undefined" && symbol != "") {
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
