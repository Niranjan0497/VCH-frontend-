import React from 'react';

const Faq = () => {
    // Data for the six questions and answers
    const faqData = [
        {
            question: "What is online doctor consultation?",
            answer: "Online doctor consultation is a method to connect patients and doctors virtually. It allows you to get medical advice using telemedicine apps or platforms.",
        },
        {
            question: "How does online consultation work?",
            answer: "You can book an appointment with a doctor through a telemedicine app, and the consultation happens via video call, phone call, or chat.",
        },
        {
            question: "Is online consultation safe?",
            answer: "Yes, online consultations are secure and confidential. Platforms use encryption to protect your data.",
        },
        {
            question: "Can I get a prescription online?",
            answer: "Yes, doctors can provide e-prescriptions after an online consultation, which you can use at pharmacies.",
        },
        {
            question: "What conditions can be treated online?",
            answer: "Common conditions like cold, fever, skin issues, and chronic disease management can be treated online. However, emergencies require in-person care.",
        },
        {
            question: "How much does an online consultation cost?",
            answer: "The cost varies depending on the platform and doctor, but it is generally more affordable than in-person visits.",
        },
    ];
    const healthQueriesData = [
        {
            question: "What are the symptoms of COVID-19?",
            views: 1234,
            answer: "Common symptoms include fever, cough, and difficulty breathing.",
        },
        {
            question: "How can I boost my immunity?",
            views: 987,
            answer: "Eat a balanced diet, exercise regularly, and get enough sleep.",
        },
        {
            question: "What is a healthy diet?",
            views: 567,
            answer: "A healthy diet includes fruits, vegetables, whole grains, and lean proteins.",
        }]

    return (
        <div>
            <div className="max-w-6xl overflow-hidden mx-auto p-4">
                <h2 className="text-3xl font-bold text-left mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                            <p className="text-gray-600">{item.answer}</p>
                        </div>
                    ))}
                </div>
                <h2 className="text-3xl font-bold text-left  my-12">
                    Health Queries
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {healthQueriesData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            {/* Question and Views Row */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">{item.question}</h3>
                                <div className="flex items-center text-gray-600">
                                    <span className="mr-2">{item.views}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                            </div>
                            {/* Answer */}
                            <p className="text-gray-600">{item.answer}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div>
                <div className="bg-[#1F2937] text-white py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        {/* Left and Right Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Left Side: Text */}
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <h2 className="text-3xl font-bold mb-4">
                                    Still delaying your health concerns?
                                </h2>
                                <p className="text-lg">
                                    Connect with India's top doctors online
                                </p>
                            </div>

                            {/* Right Side: Consult Now Button */}
                            <div>
                                <button className="bg-[#2196F3] text-white px-32 py-3 rounded-lg font-semibold hover:text-black hover:bg-gray-100 transition-colors">
                                    Consult Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
export default Faq;