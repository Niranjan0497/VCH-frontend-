// import { Link } from "react-router-dom";

// import health from "../../../assets/ArticleImages/Coronavirus.jpg";
// import health1 from "../../../assets/ArticleImages/Vitamins.jpg";
// const Articles = () => {
//   return (
//     <>
//       <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center  px-4 py-12 w-[100%]">
//         <div className="md:w-1/3">
//           <h2 className="text-3xl font-bold text-gray-800 ">
//             Read top articles from health experts
//           </h2>
//           <p className="text-gray-600 mt-4">
//             Health articles that keep you informed about good health practices
//             and achieve your goals.
//           </p>
//           <Link to="/blogcards">
//             <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
//               See all articles
//             </button>
//           </Link>
//         </div>

//         <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img
//               src={health}
//               alt="Coronavirus Myth"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <p className="text-sm text-green-600 font-semibold">
//                 CORONAVIRUS
//               </p>
//               <h3 className="text-lg font-bold text-gray-800">
//                 12 Coronavirus Myths and Facts That You Should Be Aware Of
//               </h3>
//               <p className="text-sm text-gray-500 mt-2">Dr. Diana Borgio</p>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img
//               src={health1}
//               alt="Healthy Eating"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <p className="text-sm text-green-600 font-semibold">
//                 VITAMINS AND SUPPLEMENTS
//               </p>
//               <h3 className="text-lg font-bold text-gray-800">
//                 Eating Right to Build Immunity Against Cold and Viral Infections
//               </h3>
//               <p className="text-sm text-gray-500 mt-2">Dr. Diana Borgio</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </>
    
//   );
// };

// export default Articles;


import { Link } from "react-router-dom";

import health from "../../../assets/ArticleImages/Coronavirus.jpg";
import health1 from "../../../assets/ArticleImages/Vitamins.jpg";
const Articles = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center  px-4 py-12 w-[100%]">
        <div className="md:w-1/3">
          <h2 className="uppercase text-3xl font-bold text-gray-800 ">
            Read top articles from health experts
          </h2>
          <p className="text-gray-600 mt-4">
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </p>
          <Link to="/blogcards">
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              See all articles
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={health}
              alt="Coronavirus Myth"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-green-600 font-semibold">
                CORONAVIRUS
              </p>
              <h3 className="text-lg font-bold text-gray-800">
                12 Coronavirus Myths and Facts That You Should Be Aware Of
              </h3>
              <p className="text-sm text-gray-500 mt-2">Dr. Diana Borgio</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={health1}
              alt="Healthy Eating"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-green-600 font-semibold">
                VITAMINS AND SUPPLEMENTS
              </p>
              <h3 className="text-lg font-bold text-gray-800">
                Eating Right to Build Immunity Against Cold and Viral Infections
              </h3>
              <p className="text-sm text-gray-500 mt-2">Dr. Diana Borgio</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default Articles;

