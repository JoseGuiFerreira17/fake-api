/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Add.css";

function Add() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    brand: "",
    stock: "",
    ratings: { average: 0, reviews: 0 },
    dimensions: { width: "", height: "", depth: "" },
    length: "",
    weight: "",
    material: "",
    ink_color: "",
    tip_size: "",
  });

  const url = "http://localhost:8000/products";
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      ratings: { ...prevData.ratings, [name]: Number(value) },
    }));
  };

  const handleDimensionsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dimensions: { ...prevData.dimensions, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = { ...formData };
      await httpConfig(product, "POST");
      navigate("/");
    } catch {
      alert("Erro ao adicionar produto.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="add-product-container">
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Preço:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>

        <label>
          Descrição:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>

        <label>
          URL da Imagem:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>

        <label>
          Marca:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </label>

        <label>
          Estoque:
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </label>

        <label>
          Avaliação Média:
          <input
            type="number"
            name="average"
            value={formData.ratings.average}
            onChange={handleRatingsChange}
            min="0"
            max="5"
            step="0.1"
          />
        </label>

        <label>
          Número de Avaliações:
          <input
            type="number"
            name="reviews"
            value={formData.ratings.reviews}
            onChange={handleRatingsChange}
          />
        </label>

        <h3>Dimensões</h3>
        <label>
          Largura:
          <input
            type="text"
            name="width"
            value={formData.dimensions.width}
            onChange={handleDimensionsChange}
          />
        </label>

        <label>
          Altura:
          <input
            type="text"
            name="height"
            value={formData.dimensions.height}
            onChange={handleDimensionsChange}
          />
        </label>

        <label>
          Profundidade:
          <input
            type="text"
            name="depth"
            value={formData.dimensions.depth}
            onChange={handleDimensionsChange}
          />
        </label>

        <label>
          Comprimento:
          <input type="text" name="length" value={formData.length} onChange={handleChange} />
        </label>

        <label>
          Peso:
          <input type="text" name="weight" value={formData.weight} onChange={handleChange} />
        </label>

        <label>
          Material:
          <input type="text" name="material" value={formData.material} onChange={handleChange} />
        </label>

        <label>
          Cor da Tinta:
          <input type="text" name="ink_color" value={formData.ink_color} onChange={handleChange} />
        </label>

        <label>
          Tamanho da Ponta:
          <input type="text" name="tip_size" value={formData.tip_size} onChange={handleChange} />
        </label>

        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}

export default Add;
