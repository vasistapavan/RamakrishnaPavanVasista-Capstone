import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import StockContext from "./contexts/StockContext.js";
import StockList from "./components/StockList.jsx";

function App() {
  const [stockList, setStockList] = useState([]);
  const [updatedStockList, setUpdatedStockList] = useState([]);

  return (
    <div className="main">
      <StockContext.Provider
        value={{
          stockList,
          setStockList,
          updatedStockList,
          setUpdatedStockList,
        }}
      >
        <Header />
        <Input />
        <StockList />
      </StockContext.Provider>
    </div>
  );
}

export default App;
