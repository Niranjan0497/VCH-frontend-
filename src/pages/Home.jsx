import React from "react";
import Specialities from "../Components/homecomponents/TopConsultants/TopConsultant.jsx";

import Articles from "../Components/homecomponents/article/Articles.jsx";
import Bookappointmenthome from "../Components/homecomponents/HomeBookAppoinment/Bookappointmenthome.jsx";
import SearchBar from "../Components/homecomponents/HomeBookAppoinment/Searchbar.jsx";
import Carousel from "../Components/homecomponents/carousel/carousel.jsx";

import Aboutus from "../Components/homecomponents/Aboutus.jsx";
import Faq from "../Components/homecomponents/Faq.jsx";
import Howitswork from "../Components/homecomponents/Howitswork.jsx";
import BestReviews from "../Components/homecomponents/BestReviews.jsx";


const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Carousel />
        <SearchBar />
        <Specialities />
        {/* <hr className="w-4/5  border-t-2 border-gray-300 mx-auto" /> */}
        <Bookappointmenthome />
        <BestReviews />
        <Howitswork />
        <Faq />
        <Articles />
        <Aboutus />
        

      </div>
    </>
  );
};

export default Home;
