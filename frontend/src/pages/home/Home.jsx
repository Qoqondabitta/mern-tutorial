import React, { useEffect } from "react";
import "./home.css";
import "../../components/navbar/navbar.css";
import { Link } from "react-router-dom";
import { addProductToStore } from "../../redux/add";
import ProductCard from "../../components/card/ProductCard";

const Home = () => {
  const { mapProducts, products } = addProductToStore();

  useEffect(() => {
    mapProducts();
  }, [mapProducts]);
  console.log(products, " - products");
  return (
    <div className="main-common-style center">
      <div className="container-common-style column-center gap-20">
        <h1 className="logo-title mt-50">Current Products 👜</h1>
        {products.length == 0 && (
          <p className="center mt-10 gap-20">
            No Products Found 😢
            <Link to="/create">Let's Create Some</Link>
          </p>
        )}
        <div className="center box-wrap gap-20 mt-50">
          {products.map((v, i) => (
            <ProductCard key={i} product={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
