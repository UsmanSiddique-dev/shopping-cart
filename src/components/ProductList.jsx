import React from "react";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "keyboard",
    price: 70,
  },
  {
    id: 2,
    name: "mouse",
    price: 50,
  },
  {
    id: 3,
    name: "monitor",
    price: 200,
  },
  {
    id: 4,
    name: "cpu",
    price: 400,
  },
];
export default function ProductList() {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
