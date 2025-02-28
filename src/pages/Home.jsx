import React from "react";
import Specialities from "../Components/homecomponents/TopConsultants/TopConsultant.jsx";
import HomePage from "../Components/homecomponents/article/HomePage.jsx";

const Home = () => {
  return (
    <>
      <hr className="w-4/5  border-t-2 border-gray-300 mx-auto" />

      <Specialities />

      <HomePage />
    </>
  );
};

export default Home;
