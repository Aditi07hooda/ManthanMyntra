import React from "react";
import "../DetailsPage/Details.css";
import Style from "../../helper.css";
import FriendReaction from "./FriendReaction";
import ReactionRight from "./ReactionRight"

const ReactionDetail = () => {
  return (
    <>
      <div className="container" style={{"marginTop": "5rem"}}>
        <div className="details-outer-wrapper">
          <FriendReaction />
          <ReactionRight />
        </div>
      </div>
    </>
  );
};

export default ReactionDetail;
