import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExpertList from "./ExpertList";
import Filtercomponent from "./Filtercomponent";

const ExpertFilter = () => {
  const { title } = useParams();
  const [experts, setExperts] = useState([]);
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/experts?specialization=${title}`)
       .then((res) => setExperts(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [title]);

  return (
    <div className="p-4">
      <Filtercomponent gender={gender} setGender={setGender} />
      <ExpertList experts={experts} gender={gender} />
    </div>
  );
};

export default ExpertFilter;
