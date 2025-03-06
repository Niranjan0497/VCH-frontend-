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
    axios.get(`http://localhost:4000/doctor?specialization=${title}`)
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctor data:", err));
  }, [title]);
  

  return (
    <div className="p-4">
    {/* Filters & Doctor List */}
    <Filtercomponent gender={gender} setGender={setGender} />
    <Doctorslist doctors={doctors} gender={gender} />
  </div>
  );
};

export default Doctorfilter;


