// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Doctorslist from "./Doctorslist";
// import Filtercomponent from "./Filtercomponent";

// const Doctorfilter = () => {
//   const { title } = useParams(); // Get dynamic route parameter
//   const [doctors, setDoctors] = useState([]);
//   const [gender, setGender] = useState("");

//   useEffect(() => {
//     axios.get(`http://localhost:4000/doctor?specialization=${title}`)
//       .then((res) => setDoctors(res.data))
//       .catch((err) => console.error("Error fetching doctor data:", err));
//   }, [title]);
  

//   return (
//     <div className="p-4">
//     {/* TOP BAR */}
//     <div className="flex items-center justify-between bg-gray-100 p-4 mb-3 rounded shadow-sm">
//       <label className="flex items-center">
//         <input type="radio" name="location" defaultChecked className="mr-2" />
//         <span className="text-gray-700">Hyderabad</span>
//       </label>
//       <input
//         type="text"
//         placeholder="Search doctors, clinic, hospitals, etc."
//         className="border border-gray-300 rounded px-3 py-2 w-96"
//       />
//       <span className="text-sm text-gray-600">
//         Look for clinics with{" "}
//         <span className="text-purple-600 font-medium">Prime?</span>
//       </span>
//     </div>
//     {/* Filters & Doctor List */}
//     <Filtercomponent gender={gender} setGender={setGender} />
//     <Doctorslist doctors={doctors} gender={gender} />
//   </div>
//   );
// };

// export default Doctorfilter;



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Doctorslist from "./Doctorslist";
import Filtercomponent from "./Filtercomponent";

const Doctorfilter = () => {
  const { title } = useParams(); // Get dynamic route parameter
  const [doctors, setDoctors] = useState([]);
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/doctor?specialization=${title}`)
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctor data:", err));
  }, [title]);

  return (
    <div className="p-4">
      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 p-4 mb-3 rounded shadow-sm">
        <label className="flex items-center mb-4 sm:mb-0">
          <input type="radio" name="location" defaultChecked className="mr-2" />
          <span className="text-gray-700">Hyderabad</span>
        </label>
        <input
          type="text"
          placeholder="Search doctors, clinic, hospitals, etc."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-96"
        />
        <span className="text-sm text-gray-600 mt-2 sm:mt-0">
          Look for clinics with{" "}
          <span className="text-purple-600 font-medium">Prime?</span>
        </span>
      </div>

      {/* Filters & Doctor List */}
      <div className="lg:flex lg:space-x-4">
        <div className="lg:w-1/4 mb-4 lg:mb-0">
          {/* Filter Component */}
          <Filtercomponent gender={gender} setGender={setGender} />
        </div>
        <div className="lg:w-3/4">
          {/* Doctors List */}
          <Doctorslist doctors={doctors} gender={gender} />
        </div>
      </div>
    </div>
  );
};

export default Doctorfilter;