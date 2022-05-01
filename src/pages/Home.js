import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { FetchAsyncProduct } from "../redux/feature/productSlice";
import "./Home.css";

function Home() {
  const productData = useSelector((state) => state.products.productData);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(FetchAsyncProduct());
  }, [dispatch]);

  return (
    <div>
      <div className="product_list">
        {productData.length > 0 ? (
          productData.map((item, key) => (
            <ProductList
              key={key}
              id={item.id}
              rating={item.rating}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              category={item.category}
              soni={item.count}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
