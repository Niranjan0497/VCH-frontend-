import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../../assets/ArticleImages/chickenpox.jpg";
import img1 from "../../../assets/ArticleImages/Badbreath.jpg";
import img2 from "../../../assets/ArticleImages/microneedling.avif";
import img3 from "../../../assets/ArticleImages/Dental.jpg";
import img4 from "../../../assets/ArticleImages/Anger.jpg";
import img5 from "../../../assets/ArticleImages/Child.jpg";

export default function BlogCards() {
  const navigate = useNavigate();

  const posts = [
    { id: 1, title: "Dentistry Is Not Costly, Negligence Is!", author: "Dr. Sanjog Chandak, Dentist", description: "Most people complain that dental treatment costs too much...", tags: ["Oral Hygiene", "Dental Care", "Tooth Decay"], image: img3, likes: 1 },
    { id: 2, title: "Is your rage consuming you? Try these techniques to diffuse your anger", author: "HelpGuide.org", description: "Flying off the handle over trifles can be easy...", tags: [], image: img4, likes: 152 },
    { id: 3, title: "Train your child for a developing athlete from a young age", author: "Dr. Vishwas Virmani(PT), Physiotherapist", description: "Developmental Windows or Sensitive Periods...", tags: ["Child Mental Development", "Everyday Fitness"], image: img5, likes: 7 },
    { id: 4, title: "4 Tips for Speedy Recovery from Chicken Pox", author: "Dr. Vandan H Kumar, Pediatrician", description: "It's important to relieve/decrease the symptoms associated with chickenpox...", tags: ["Infection", "Flu"], image: img, likes: 74 },
    { id: 5, title: "How to Cure Bad Breath at Home", author: "Dr. Ushma K Kakkad, Dentist", description: "Having bad breath can adversely affect your social life...", tags: ["Oral Hygiene", "Bad Breath", "Tooth Decay", "The Cure"], image: img1, likes: 3 },
    { id: 6, title: "Wish to turn back time on your scars? Microneedling is the answer you need", author: "Women's Health", description: "As scary as needles can be, a few pokes can actually help you look more beautiful...", tags: [], image: img2, likes: 115 },
  ];

  return (
    <div className="w-full px-4 md:px-6 py-10 bg-gray-100 mt-7">
      <h2 className="text-3xl font-bold text-center">Top Health Articles</h2>
      <p className="text-center text-gray-600 mb-8">Trending tips from doctors and health experts</p>
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-2xl shadow-md overflow-hidden w-full cursor-pointer"
            onClick={() => navigate(`/viewblogcard/${post.id}`)}
          >
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{post.author}</p>
              <p className="text-gray-700 text-sm mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>&hearts; {post.likes}</span>
                <span>&#x1F517;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}