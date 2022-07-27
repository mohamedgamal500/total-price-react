import "./App.css";
import { useState, useEffect } from "react";

const unitPrice = {
  sugar: 22,
  butter: 12,
  eggs: 2,
  vanilla: 43,
};

function App() {
  const [sugarQuantity, setSugarQuantity] = useState(0);
  const [sugarPrice, setSugarPrice] = useState(0);
  const [butterQuantity, setButterQuantity] = useState(0);
  const [butterPrice, setButterPrice] = useState(0);
  const [eggsQuantity, setEggsQuantity] = useState(0);
  const [eggsPrice, setEggsPrice] = useState(0);
  const [vanillaQuantity, setVanillaQuantity] = useState(0);
  const [vanillaPrice, setVanillaPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(sugarPrice + butterPrice + eggsPrice + vanillaPrice);
  }, [sugarPrice, butterPrice, eggsPrice, vanillaPrice]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 row-heading">Item</div>
        <div className="col-3 row-heading">Quantity</div>
        <div className="col-2 row-heading">Price</div>
      </div>
      <div className="row">
        <div className="col-6">1. Powdered white sugar (cups)</div>
        <div className="col-3">
          <input
            type="number"
            min="0"
            value={sugarQuantity}
            onChange={(event) => {
              setSugarQuantity(Number(event.target.value));
              setSugarPrice(Number(event.target.value) * unitPrice.sugar);
            }}
          />
        </div>
        <div className="col-2">
          <input type="number" readonly value={sugarPrice} />
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6">2. Butter salted (grams)</div>
        <div className="col-3">
          <input
            type="number"
            min="0"
            value={butterQuantity}
            onChange={(event) => {
              setButterQuantity(Number(event.target.value));
              setButterPrice(Number(event.target.value) * unitPrice.butter);
            }}
          />
        </div>
        <div className="col-2">
          <input type="number" readonly value={butterPrice} />
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6">3. Eggs (count)</div>
        <div className="col-3">
          <input
            type="number"
            min="0"
            value={eggsQuantity}
            onChange={(event) => {
              setEggsQuantity(Number(event.target.value));
              setEggsPrice(Number(event.target.value) * unitPrice.eggs);
            }}
          />
        </div>
        <div className="col-2">
          <input type="number" readonly value={eggsPrice} />
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6">4. Vanilla extract (ml)</div>
        <div className="col-3">
          <input
            type="number"
            min="0"
            value={vanillaQuantity}
            onChange={(event) => {
              setVanillaQuantity(Number(event.target.value));
              setVanillaPrice(Number(event.target.value) * unitPrice.vanilla);
            }}
          />
        </div>
        <div className="col-2">
          <input type="number" readonly value={vanillaPrice} />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-9 text-right total">Total</div>

        <div className="col-2 total-val">
          <span>{totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
