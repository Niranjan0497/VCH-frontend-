import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import img from "../../assets/DoctorFaq.jpg";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // const [faqs, setfaqs] = useState([]);
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/faqs") // Replace with your API URL
  //     .then((response) => {
  //       setfaqs(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);
  // if (loading) {
  //   return <p>Loading faqs...</p>;
  // }

  const faqs = [
    {
      question: " What should I bring when visiting the hospital?",
      answer:
        " You should bring a valid ID, insurance details, medical records, a list of medications you take, and any necessary test reports., so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra.",
    },
    {
      question: " What should I do in case of a medical emergency?",
      answer:
        "Call the hospital’s emergency number or visit the nearest emergency department immediately. If necessary, dial 911 (or your local emergency number).",
    },
    {
      question: " How do I know if I need to see a specialist?",
      answer:
        " If your symptoms persist despite treatment from a general doctor or if your condition requires specialized care (e.g., heart issues, neurological problems), you may need a specialist.",
    },
    {
      question: " Does the hospital accept my insurance?",
      answer:
        " It’s best to check with the hospital’s billing department or your insurance provider to confirm coverage before treatment.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h6 className="text-indigo-700 font-semibold  text-xl">FAQ'S</h6>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              General <span className="text-indigo-600">Frequently</span> Asked
              Questions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={img}
              alt="Faq"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50  rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <div className="bg-indigo-600 text-white p-3 rounded-lg">
                  <FaQuestion size={16} />
                </div>
                <div className="flex items-center gap-4 ">
                  <div className="flex items-center gap-4 border-t-2 border-transparent hover:border-indigo-500"></div>

                  <span
                    className={` font-bold  text-black-600 transition-transform duration-300 ${openIndex === index ? " text-indigo-600" : ""}`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-6 h-6  transition-transform duration-300 ${
                    openIndex === index
                      ? "transform rotate-180 text-indigo-600"
                      : ""
                  }`}
                >
                  <FaChevronDown />{" "}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-indigo-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
