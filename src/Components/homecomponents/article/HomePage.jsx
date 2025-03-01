import { Link } from "react-router-dom";

import health from "../../../assets/ArticleImages/Coronavirus.jpg";
import health1 from "../../../assets/ArticleImages/Vitamins.jpg";
const articles = [
  {
    id: 7,
    title: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
    category: "CORONAVIRUS",
    author: "Dr. Diana Borgio",
    image: health,
    content: "Here is some content about Coronavirus myths and facts...",
  },
  {
    id: 8,
    title: "Eating Right to Build Immunity Against Cold and Viral Infections",
    category: "VITAMINS AND SUPPLEMENTS",
    author: "Dr. Diana Borgio",
    image: health1,
    content: "This article explains how proper nutrition boosts immunity...",
  },
];


const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Read top articles from health experts
        </h2>
        <p className="text-gray-600 mt-4">
          Stay informed with expert health articles and achieve your wellness goals.
        </p>
        <Link to="/blogcards">
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            See all articles
          </button>
        </Link>
      </div>

      {/* Right Section - Blog Cards */}
      <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link to={`/viewblogcard/${article.id}`} key={article.id} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-green-600 font-semibold">{article.category}</p>
                <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-2">By {article.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default HomePage;

