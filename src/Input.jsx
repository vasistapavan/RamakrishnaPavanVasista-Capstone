function Input() {
  return (
    <div className="input-flex">
      <input type="text" placeholder="Stock Symbol"></input>
      <input type="text" placeholder="Quantity"></input>
      <input type="text" placeholder="Purchase Price"></input>
      <button type="button">Add Stock</button>
    </div>
  );
}

export default Input;
