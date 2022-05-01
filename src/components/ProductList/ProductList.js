import React from "react";
import Product from "../Product/Product";

function ProductList(props) {
  const { id, category, title, image, soni, rating, price, description } =
    props;
  return (
    <div className="productlist">
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
    </div>
  );
}

export default ProductList;
