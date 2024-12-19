import { useEffect, useState } from "react";
function StockCurrentPrice(prop) {
  console.log("inside stockcurrentprice" + prop.stock);
  useEffect(() => {
    //   for (let stock of prop.stockList) {
    prop.setCurrentPrice(234.56);
    // fetch(
    //   "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    //     stock[0] +
    //     "&apikey=E1GDBDDBNW58806S"
    // )
    //   .then((res) => res.json())
    //   .then((body) => console.log(body["Global Quote"]["05. price"]));
    //  }
  }, []);
}

export default StockCurrentPrice;
