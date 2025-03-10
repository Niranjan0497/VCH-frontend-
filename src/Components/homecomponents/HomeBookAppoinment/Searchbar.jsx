import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const categories = {
  Finance: ["Financial Planning", "Tax Experts", "Wealth Management", "Retirement Planning"],
  Legal: ["Corporate Law", "Estate Planning", "Intellectual Property", "Litigation"],
  Technology: ["Cybersecurity", "Cloud Services", "IT Consulting"],
  Wellness: ["Mental Health", "Fitness Coaching", "Nutrition Coaching", "Lifestyle Medicine"],
};

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Technology");
  const [subcategory, setSubcategory] = useState("");
  const [experts, setExperts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/experts")
      .then((response) => {
        const filteredExperts = response.data.filter((expert) =>
          expert.name.toLowerCase().includes(search.toLowerCase())
        );

        setExperts(filteredExperts);
      })
      .catch((error) => {
        console.error("Error fetching experts:", error);
        setExperts([]);
      });
  }, [search]);

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <span className="text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))}
      </span>
    );
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      {/* Search filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <input
          type="text"
          placeholder="Search experts..."
          className="border border-gray-300 p-2 rounded-lg w-full xs:w-auto flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 p-2 rounded-lg min-w-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory("");
          }}
        >
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          className="border border-gray-300 p-2 rounded-lg min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">All Subcategories</option>
          {categories[category].map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
      </div>

      {/* Expert cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {experts.slice(0, visibleCount).map((expert, index) => (
          <div key={expert.id || index} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <div className="h-24 bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-500">
              Profile Image
            </div>
            <h2 className="text-lg font-semibold">{expert.name}</h2>
            <p className="text-sm text-gray-600">{expert.specialization || "Specialization"}</p>
            <p className="text-sm text-gray-500">{expert.experience ? `${expert.experience} years experience` : "Experience"}</p>

            {/* Rating Display */}
            <div className="mt-2">{renderStars(expert.rating || 0)}</div>

            {/* View Profile Button - Small & Aligned Right */}
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => navigate(`/oneexpert/${expert.id || index}`)}
                className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state message */}
      {experts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No experts found matching your search criteria.
        </div>
      )}

      {/* View more button */}
      {visibleCount < experts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate('/expertdetails')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
