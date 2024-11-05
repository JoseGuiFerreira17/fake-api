import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const url = "http://localhost:8000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  // Formata o preço em BRL
  const formattedPrice = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  // Função para renderizar estrelas de avaliação
  const renderStars = (average) => {
    const fullStars = Math.floor(average);
    const halfStar = average % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star full">
          ★
        </span>
      );
    }
    if (halfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <span key={i + 1} className="star empty">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {product && (
        <div className="product-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="product-price">{formattedPrice(product.price)}</p>
            <p>{product.description}</p>
            <p>
              <strong>Marca:</strong> {product.brand}
            </p>
            <p>
              <strong>Categoria:</strong> {product.category}
            </p>
            <div className="product-ratings">
              <div className="stars">{renderStars(product.ratings.average)}</div>
              <p>({product.ratings.reviews} avaliações)</p>
            </div>
            <div className="product-dimensions">
              {product.dimensions && (
                <p>
                  <strong>Dimensões:</strong> {product.dimensions.width} x{" "}
                  {product.dimensions.height} x {product.dimensions.depth}
                </p>
              )}
              {product.length && (
                <p>
                  <strong>Comprimento:</strong> {product.length}
                </p>
              )}
              {product.weight && (
                <p>
                  <strong>Peso:</strong> {product.weight}
                </p>
              )}
              {product.material && (
                <p>
                  <strong>Material:</strong> {product.material}
                </p>
              )}
              {product.ink_color && (
                <p>
                  <strong>Cor da Tinta:</strong> {product.ink_color}
                </p>
              )}
              {product.tip_size && (
                <p>
                  <strong>Tamanho da Ponta:</strong> {product.tip_size}
                </p>
              )}
            </div>
            <p>
              <strong>Estoque disponível:</strong> {product.stock}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
