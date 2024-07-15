import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details";
import HomePage from "./components/Product/HomePage";
import ReactionDetail from "./components/Reactions/ReactionDetail.jsx";
import ReactionDetail1 from "./components/Reactions/ReactionDetail1.jsx";
import ReactionDetail2 from "./components/Reactions/ReactionDetail2.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:detailslug" element={<Details/>} />
          <Route path="/friend-reaction" element={<ReactionDetail />} />
          <Route path="/friend-reaction1" element={<ReactionDetail1 />} />
          <Route path="/friend-reaction2" element={<ReactionDetail2 />} />
      </Routes>

    </>
  );
};

export default App;
