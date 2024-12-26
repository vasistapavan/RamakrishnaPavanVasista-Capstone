import { useContext, useEffect } from "react";
import StockContext from "../contexts/StockContext";

function UpdateStockPrice() {
  const { stockList, setIsUpdated } = useContext(StockContext);

  const fetchApiPrice = async (symbol) => {
    try {
      let res = await fetch(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
          symbol +
          "&apikey=EKD0K8D419Y6KJ6O"
      );
      let res_json = await res.json();
      let price = res_json["Global Quote"]["05. price"];
      return price;
    } catch (error) {
      return 234.56; //send a dummy price if API limit is reached.
    }
  };

  useEffect(() => {
    const updatestocks = async () => {
      for (let stock of stockList) {
        let price = await fetchApiPrice(stock["symbol"]);
        stock["currentPrice"] = price;
      }
    };
    setIsUpdated(false);
    updatestocks();
    setIsUpdated(true);
  }, [stockList]);

  return <></>;
}

export default UpdateStockPrice;
