import React from "react";
import "../DetailsPage/Details.css";
import "../../helper.css";
import FriendReaction1 from "./FriendReaction1";
import ReactionRight1 from "./ReactionRight1"

const ReactionDetail = () => {
  return (
    <>
      <div className="container" style={{"marginTop": "5rem"}}>
        <div className="details-outer-wrapper">
          <FriendReaction1 />
          <ReactionRight1 />
        </div>
      </div>
    </>
  );
};

export default ReactionDetail;
