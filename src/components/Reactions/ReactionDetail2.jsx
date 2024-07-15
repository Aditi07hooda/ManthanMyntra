import React from "react";
import "../DetailsPage/Details.css";
import "../../helper.css";
import FriendReaction2 from "./FriendReaction2";
import ReactionRight2 from "./ReactionRight2"

const ReactionDetail = () => {
  return (
    <>
      <div className="container" style={{"marginTop": "5rem"}}>
        <div className="details-outer-wrapper">
          <FriendReaction2 />
          <ReactionRight2 />
        </div>
      </div>
    </>
  );
};

export default ReactionDetail;
