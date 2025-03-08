import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function ExpertDetails() {
  const [experts, setExperts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load experts data
    axios
      .get("http://localhost:4000/experts")
      .then((response) => {
        setExperts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching experts:", error);
        setExperts([]);
      });

    // Load favorites from localStorage if available
    const savedFavorites = localStorage.getItem("expertFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expertFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (expertId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(expertId)) {
        // Remove from favorites
        return prevFavorites.filter((id) => id !== expertId);
      } else {
        // Add to favorites
        return [...prevFavorites, expertId];
      }
    });
  };

  const isFavorite = (expertId) => {
    return favorites.includes(expertId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Meet Our Experts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert, index) => (
          <div 
            key={expert.id || index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 bg-gray-200">
              {expert.image ? (
                <img 
                  src={expert.image} 
                  alt={`${expert.name}'s profile`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100">
                  <span className="text-gray-400 text-lg">Profile Image</span>
                </div>
              )}
              <div className="absolute top-3 right-3 bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-gray-700">
                {expert.category}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{expert.name}</h2>
              <p className="text-indigo-600 font-medium mb-2">{expert.specialization}</p>
              
              <div className="flex items-center mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mr-2">
                  {expert.experience} years experience
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">{expert.description}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-gray-500">
                  <button 
                    onClick={() => toggleFavorite(expert.id)}
                    className="focus:outline-none mr-1 flex items-center"
                    aria-label={isFavorite(expert.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    {isFavorite(expert.id) ? (
                      <AiFillHeart className="text-red-500 text-xl" />
                    ) : (
                      <AiOutlineHeart className="text-gray-400 hover:text-red-500 text-xl" />
                    )}
                  </button>
                  <span>{expert.likes}</span>
                </div>
                
                <button
                  onClick={() => navigate(`/oneexpert/${expert.id}`)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {experts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No experts found. Please check back later.</p>
        </div>
      )}
    </div>
  );
}