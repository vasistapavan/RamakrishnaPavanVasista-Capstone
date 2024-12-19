import { useState } from "react";
import "./App.css";
import Header from "./header.jsx";
import Input from "./Input.jsx";
import StockList from "./stocklist.jsx";
import StockCurrentPrice from "./StockCurrentPrice.jsx";

function App() {
  const [userStockList, setUserStockList] = useState([]);

  return (
    <div className="main">
      <Header />
      <Input
        userStockList={userStockList}
        setUserStockList={setUserStockList}
      />
      <StockList userStockList={userStockList} />
    </div>
  );
}

export default App;
