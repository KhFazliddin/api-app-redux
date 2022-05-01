import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
import {
  addToBasket,
  FetchAsyncProduct,
} from "../../redux/feature/productSlice";
import ChoosenProduct from "../../pages/ChoosenProduct";

function Product(props) {
  const { id, category, title, image, soni, rating, price, description } =
    props;
  const productData = useSelector((state) => state.products.productData);

  const [son, setSon] = useState(0);
  const [jamisoni, setJamisoni] = useState(son);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const seeProductbtn = (e) => {
  //   e.preventDefault();
  //   navigate(`${id}`);
  // };

  const addBtn = (e) => {
    e.preventDefault();
    setSon(son + 1);
  };
  const minusBtn = (e) => {
    e.preventDefault();
    setSon(son - 1);
  };
  const chooseBtn = (e) => {
    e.preventDefault();
    navigate(`productDetails/:id${id}`);
    dispatch(ChoosenProduct());
  };

  return (
    <div>
      <Link style={{ textAlign: "none" }} to={`productDetails/:id${id}`}>
        <div className="product">
          <img src={image} alt={title} />
          <p>{title}</p>

          <div className="count_btn">
            <button onClick={addBtn}>ADD</button>
            <p>{son}</p>
            <button onClick={minusBtn}>Minus</button>
          </div>
          <button onClick={chooseBtn}>Choose</button>
        </div>
      </Link>
    </div>
  );
}

export default Product;
