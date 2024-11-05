import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Search() {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:8000/products?name=" + searchParams.toString().split("=")[1];
  const { data: items, loading, error } = useFetch(url);

  console.log(items);
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
        <span key={i} className="products-star">
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
            <li key={item.id} className="products-card">
              <img src={item.image} alt={item.name} className="products-image" />
              <h2>{item.name}</h2>
              <p className="products-brand">{item.brand}</p>
              <div className="products-ratings">
                {item.ratings ? renderStars(item.ratings.average) : null}
                {item.ratings && item.ratings.reviews > 0 && (
                  <span className="products-review-count">({item.ratings.reviews} avaliações)</span>
                )}
              </div>
              <p>{formattedPrice(item.price)}</p>
              <Link to={`/product/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
