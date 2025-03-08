import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import img from "../../assets/DoctorFaq.jpg";

const faqs = [
  {
    question: "What is a doctor?",
    answer:
      "A medical professional who diagnoses and treats illnesses, injuries, and diseases, providing medical care to patients based on their training and expertise. ",
  },
  {
    question: "What is a specialist doctor?",
    answer:
      "A doctor who focuses on a specific area of medicine, like cardiology (heart), oncology (cancer), or neurology (brain).",
  },
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      "Contact the doctor's office directly to schedule an appointment, either by phone or online. ",
  },
  {
    question: "How Can I Cancel My Request?",
    answer: "You can cancel your request from the dashboard.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqContainerRef = useRef(null);
  const [faqHeight, setFaqHeight] = useState("auto");

  useEffect(() => {
    if (faqContainerRef.current) {
      setFaqHeight(`${faqContainerRef.current.clientHeight}px`);
    }
  }, [openIndex]);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "24px" }}>
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          General <span style={{ color: "#2563eb" }}>Frequently</span> Asked
          Questions
        </h2>
        <p style={{ color: "gray", maxWidth: "600px", margin: "10px auto" }}>
          There are many variations of passages of Lorem Ipsum available...
        </p>
      </section>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: faqHeight,
          }}
        >
          <img
            src={img}
            alt="FAQ"
            className="rounded-xl"
            style={{ width: "100%", objectFit: "cover", pointerEvents: "none" }}
          />
        </div>

        <div
          ref={faqContainerRef}
          style={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                padding: "16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "10px",
                backgroundColor: openIndex === index ? "#dbeafe" : "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    color: openIndex === index ? "#2563eb" : "black",
                  }}
                >
                  {faq.question}
                </span>
                <FaChevronDown
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
              {openIndex === index && (
                <p style={{ marginTop: "10px", color: "gray" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
