import React, { useEffect } from "react";
import "./signin.css";
import "../../components/navbar/navbar.css";
import { Link } from "react-router-dom";
import { addProductToStore } from "../../redux/add";
import ClientProductCard from "../../components/clientCard/clintCard";

const Signin = () => {
  const { mapProducts, products } = addProductToStore();

  useEffect(() => {
    mapProducts();
  }, [mapProducts]);
  console.log(products, " - products");
  return (
    <div className="main-common-style center mb-20">
      <div className="container-common-style column-center gap-20 mb-20">
        <h1 className="logo-title mt-50">Cars on Sale 👜</h1>
        {products.length == 0 && (
          <p className="center mt-10 gap-20">
            No Products Found 😢
            <Link to="/create">Let's Create Some</Link>
          </p>
        )}
        <div className="center box-wrap gap-20 mt-20">
          {products.map((v, i) => (
            <ClientProductCard key={i} product={v} className="car-card" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signin;
