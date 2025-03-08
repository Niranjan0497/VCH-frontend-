import React from "react";
import img from "../../assets/Aboutus.jpeg";

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white w-full max-w-7xl mx-auto">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={img} // Replace with actual image URL
          alt="Rental Service"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 px-6">
        <h5 className="text-blue-600 font-bold uppercase">About Us</h5>
        <h2 className="text-3xl font-bold mb-4">
          We Provide Quality <span className="text-blue-600">Rental</span>{" "}
          Services
        </h2>
        <p className="text-gray-600 mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> At vero eos et
            accusamus et iusto odio
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Established fact
            that a reader will be distracted
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Sed ut perspiciatis
            unde omnis iste natus sit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutus;
