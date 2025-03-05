import React from "react";
// import Specialities from "../Components/homecomponents/TopConsultants/TopConsultant.jsx";

import Articles from "../Components/homecomponents/article/Articles.jsx";
import ConsultationCategories from "../Components/homecomponents/Home/ConsultationCategories.jsx";

const Home = () => {
  return (
    <>
      
      
      {/* <Specialities /> */}
      <hr className="w-4/5  border-t-2 border-gray-300 mx-auto" />
      <ConsultationCategories/>
      <Articles />
      
    </>
  );
};

export default Home;
