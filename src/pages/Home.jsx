import "./Home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:8000/products";
  const { data: items, loading, error } = useFetch(url);

  const formattedPrice = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const renderStars = (average) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i < Math.round(average) ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container-prod">
      {error && <p>{error}</p>}
      <ul className="products">
        {loading && <p>Carregando...</p>}
        {items &&
          items.map((item) => (
            <li key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h2>{item.name}</h2>
              <p className="brand">{item.brand}</p>
              <div className="ratings">
                {item.ratings ? renderStars(item.ratings.average) : null}
                {item.ratings && item.ratings.reviews > 0 && (
                  <span className="review-count">({item.ratings.reviews} avaliações)</span>
                )}
              </div>
              <p>{formattedPrice(item.price)}</p>
              <Link to={`/product/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
