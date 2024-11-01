import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3333/products";
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const { data: items, httpConfig } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price };
    httpConfig(product, "POST");
    setName("");
    setPrice(0);
  };

  const formattedPrice = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  return (
    <div className="container">
      <div className="App">
        <h1>Lista de produtos</h1>
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{formattedPrice(product.price)}</p>
              </li>
            ))}
        </ul>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} method="post">
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Adicionar" />
        </form>
      </div>
    </div>
  );
}

export default App;