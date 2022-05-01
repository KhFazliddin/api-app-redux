import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const navigateBtn = (e) => {
    e.preventDefault();
    navigate("/productDetails/:id");
  };

  return (
    <div>
      Header
      <i onClick={navigateBtn} className="fa fa-shopping-cart fa-10x"></i>
      
    </div>
  );
}

export default Header;
