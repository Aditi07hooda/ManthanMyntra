import React, { useState } from "react";
import "../DetailsPage/ProductDetails.css";
import { FaShareAlt } from "react-icons/fa";
import ReactionImage from "../reaction.png";
import ReactionNum from "../ReactionNum.png";

const ReactionRight2 = () => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
    }, 200000);
  };
  return (
    <>
      <div className="right-details-content">
        <div
          className="product-details-content"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2
            className="productName"
            style={{
              "text-transform": "uppercase",
              letterSpacing: "2px",
              margin: "5px 0",
            }}
          >
            WROGN
          </h2>
          <FaShareAlt
            style={{ marginRight: "800px", fontSize: "25px" }}
            onClick={handleClick}
          />
          {showImage && (
            <img
              src={ReactionImage}
              alt="Share"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                opacity: 1,
                width: "40vw",
                height: "50%",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            />
          )}
        </div>
        <p
          className="productType"
          style={{
            "text-transform": "capitalize",
            opacity: "0.4",
            fontSize: "24px",
          }}
        >
          Checked Casual Shirt
        </p>
        <hr
          style={{
            width: "50%",
            transform: "translateX(-50%)",
            marginTop: "25px",
          }}
        />
        <p>
          Amazing clothing you would love the asthectic look and feel of the
          fabric and will enjoy the time you have it on !
        </p>
        <h2 className="productPrice" style={{ "text-transform": "capitalize" }}>
          Rs. 1374/-
        </h2>
        <div className="" style={{ display: "flex" }}>
          <p className="size-varient">34</p>
          <p className="size-varient">36</p>
          <p className="size-varient">42</p>
        </div>
        <br />
        <br />
        <img
          src={ReactionNum}
          alt="Share"
          style={{
            borderRadius: "10px",
          }}
        />
        <div className="" style={{ display: "flex" }}>
          <button className="details-btn btn-primary">Add to Cart</button>

          <button className="details-btn">Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default ReactionRight2;
