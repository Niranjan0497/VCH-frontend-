import React from "react";
import img from "../../assets/Aboutus.jpeg";

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white w-full max-w-7xl mx-auto">
      {/* Left Side - Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
        <img
          src={img}
          alt="About us"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 px-6">
        <h5 className="text-blue-600 font-bold uppercase">About Us</h5>
        <h2 className="text-3xl font-bold mb-4">
          We Provide Quality <span className="text-blue-600">Doctors</span>{" "}
          Services
        </h2>
        <p className="text-gray-600 mb-4">
          we are a dedicated team of experienced physicians committed to
          providing compassionate, comprehensive healthcare to our patients.
          With a focus on preventative care and personalized treatment plans, we
          strive to be your trusted partner in achieving optimal health and
          well-being. Our team is passionate about staying at the forefront of
          medical advancements to deliver the highest quality care in a
          supportive and caring environment."
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
