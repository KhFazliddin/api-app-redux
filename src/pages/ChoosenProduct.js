import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product/Product";
import { FetchProductDetail } from "../redux/feature/productSlice";

function ChoosenProduct(props) {
  const { id, category, title, image, soni, rating, price, description } =
    props;
  const choosenProductDetail = useSelector(
    (state) => state.products.choosenProductDetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProductDetail());
  }, [dispatch]);

  return (
    <div>
      <h1>This is choosenProduct</h1>
      <div>
        {choosenProductDetail.length > 0 ? (
          choosenProductDetail.map((item) => (
            <Product
              id={id}
              category={category}
              title={title}
              image={image}
              soni={soni}
              rating={rating}
              price={price}
              description={description}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ChoosenProduct;
