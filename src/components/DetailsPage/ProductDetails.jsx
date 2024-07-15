import React, { useState } from "react";
import Style from "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { FaShareAlt } from "react-icons/fa";
import {
  addToCart,
  addToWishlist,
  removeFromWishList,
} from "../../redux/features/data";
import ReactionImage from "../reaction.png";
import ReactionTop from "../reactionTop.png";

const ProductDetails = (props) => {
  const wishlistData = useSelector((state) => state.appData.value.wishlist);
  const dispatch = useDispatch();
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
            {props.productName}
          </h2>
          <FaShareAlt
            style={{ marginRight: "800px", fontSize: "25px" }}
            onClick={handleClick}
          />
          {showImage && (
            <div
              className="share-container"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                opacity: 1,
                width: "20vw",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={ReactionTop}
                alt="Share Image"
                style={{
                  width: "20vw",
                  height: "30%",
                }}
              />
              <div
                className="checkbox-container"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "28px",
                  fontWeight: "500",
                  marginBottom: "8px"
                }}
              >
                <input type="checkbox" id="get-reaction" style={{"transform":"scale(2.5)", "marginRight":"12px"}} />
                <label htmlFor="get-reaction">
                Share the drip! Get your friends' hype!!
                </label>
              </div>
              <img
                src={ReactionImage}
                alt="Share Image"
                style={{
                  width: "20vw",
                  height: "30%",
                }}
              />
            </div>
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
          {props.productType}
        </p>
        <hr
          style={{
            width: "50%",
            transform: "translateX(-50%)",
            marginTop: "25px",
          }}
        />
        <p>{props.productDescription}</p>
        <h2 className="productPrice" style={{ "text-transform": "capitalize" }}>
          {props.productPrice}/-
        </h2>
        {
          // console.log(props.size)
          props.size.map((value) => {
            return <p className="size-varient">{value}</p>;
          })
        }
        <br />
        <br />
        <button
          className="details-btn btn-primary"
          onClick={() => {
            dispatch(addToCart(props.value));
          }}
        >
          Add to Cart
        </button>

        <button
          className="details-btn"
          onClick={() => {
            dispatch(addToWishlist(props.value));
          }}
        >
          Wishlist
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
