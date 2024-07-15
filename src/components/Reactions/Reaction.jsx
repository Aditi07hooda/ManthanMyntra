import React, { useState } from "react";
import "../Reactions/Notifications.css";
import "../Product/Modal.css";
import "../Product/Cards.css";
import { useNavigate } from "react-router-dom";

const Reaction = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(false);
    navigate("/friend-reaction");
  };
  const handleClick1 = () => {
    setIsOpen(false);
    navigate("/friend-reaction1");
  };
  const handleClick2 = () => {
    setIsOpen(false);
    navigate("/friend-reaction2");
  };

  return (
    <>
      {isOpen && (
        <div className="modal-wrapper">
          <div className="inner-head">
            <div className="flexed flex-end">Notifications</div>
            <div className="right-content">
              <div class="notifications">
                <div class="notification" onClick={handleClick}>
                  <div
                    className="flexed notification-content"
                    style={{ width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6849350/2019/2/4/9d4ff7c7-549f-4b8f-9bea-f254c3c631861549278244885-Roadster-Men-Blue-Regular-Fit-Checked-Casual-Shirt-378154927-2.jpg"
                      alt="John Doe"
                      className="notification-image"
                    />
                    <div className="notification-text">
                      <h3>John Doe sent you a message</h3>
                      <p>10 minutes ago</p>
                    </div>
                    <button>Mark as read</button>
                  </div>
                </div>
                <div class="notification" onClick={handleClick1}>
                  <div
                    className="flexed notification-content"
                    style={{ width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12947450/2021/1/27/3a52d6b9-04c1-4188-9ddb-473484a365081611724552932-Roadster-Men-Shirts-4521611724551117-1.jpg"
                      alt="Order Shipped"
                      className="notification-image"
                    />
                    <div className="notification-text">
                      <h3>Your order has been shipped</h3>
                      <p>1 hour ago</p>
                    </div>
                    <button>Mark as read</button>
                  </div>
                </div>
                <div class="notification" onClick={handleClick2}>
                  <div
                    className="flexed notification-content"
                    style={{ width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11526630/2020/3/12/824ee25a-b4ad-4dd4-bc0b-99338ca190101584008987463-Roadster-Women-Green--Mustard-Regular-Fit-Printed-Casual-Shi-1.jpg"
                      alt="New Follower"
                      className="notification-image"
                    />
                    <div className="notification-text">
                      <h3>You have a new follower</h3>
                      <p>2 hours ago</p>
                    </div>
                    <button>Mark as read</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reaction;
