import React from 'react';

const OnlineConsult = () => {
    return (
        <div>
            <div className="w-full bg-gray-800 text-white py-8">
                <div className="container overflow-hidden mx-auto px-4">
                    <div className="flex flex-wrap justify-between text-center">
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <h2 className="text-3xl font-bold">2,00,000+</h2>
                            <p className="text-lg">Happy Users</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <h2 className="text-3xl font-bold">20,000+</h2>
                            <p className="text-lg">Verified Doctors</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <h2 className="text-3xl font-bold">25+</h2>
                            <p className="text-lg">Specialities</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h2 className="text-3xl font-bold">4.5 / 5</h2>
                            <p className="text-lg">App Rating</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-4 bg-gray-50">
                {/* Stats Bar */}
                {/* Benefits Section */}
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Benefits of Online Consultation</h1>

                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Benefit 1 */}
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="ml-2 text-xl font-semibold text-gray-700">Consult Top Doctors 24x7</h3>
                                </div>
                                <p className="text-gray-600">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="ml-2 text-xl font-semibold text-gray-700">Convenient and Easy</h3>
                                </div>
                                <p className="text-gray-600">Start an instant consultation within 2 minutes or do video consultation at the scheduled time.</p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="ml-2 text-xl font-semibold text-gray-700">100% Safe Consultations</h3>
                                </div>
                                <p className="text-gray-600">Be assured that your online consultation will be fully private and secured.</p>
                            </div>

                            {/* Benefit 4 */}
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="ml-2 text-xl font-semibold text-gray-700">Similar Clinic Experience</h3>
                                </div>
                                <p className="text-gray-600">Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Practo app.</p>
                            </div>

                            {/* Benefit 5 */}
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="ml-2 text-xl font-semibold text-gray-700">Free Follow-up</h3>
                                </div>
                                <p className="text-gray-600">Get a valid digital prescription and a 7-day, free follow-up for further clarifications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OnlineConsult;