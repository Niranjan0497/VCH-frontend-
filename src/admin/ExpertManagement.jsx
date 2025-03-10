import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ExpertManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [newlyRegistered, setNewlyRegistered] = useState([]);
  const [showNewlyRegistered, setShowNewlyRegistered] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [approvalModal, setApprovalModal] = useState(false);

  useEffect(() => {
    fetchCustomers();
    fetchNewlyRegistered();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/experts/");
      const modifiedData = response.data.map((customer) => ({
        ...customer,
        status: Math.random() > 0.5 ? "Active" : "Blocked",
        verification: Math.random() > 0.5 ? "Verified" : "Unverified",
        joined: getRandomDate(),
        visitedClients: customer.visitedClients || Math.floor(Math.random() * 50),
      }));
      setCustomers(modifiedData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchNewlyRegistered = async () => {
    try {
      // In a real application, this would be a separate endpoint
      // For demo purposes, generating mock data
      const mockNewExperts = Array(10).fill().map((_, index) => ({
        id: `new-${index + 1}`,
        name: `New Expert ${index + 1}`,
        email: `newexpert${index + 1}@example.com`,
        phone: `+1-555-${100 + index}`,
        specialization: ['corporate law', 'financial planning', 'cardiologist', 'dentist', 'IT consultancy'][index % 5],
        documents: ['resume.pdf', 'license.pdf', 'certificate.pdf'],
        category: ["legal", "finance", "technology", "wellness"][index % 4],
        registrationDate: new Date().toLocaleDateString()
      }));
      setNewlyRegistered(mockNewExperts);
    } catch (error) {
      console.error("Error fetching newly registered experts:", error);
    }
  };

  const getRandomDate = () => {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  const handleStatusToggle = (rowData) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === rowData.id
          ? { ...customer, status: customer.status === "Active" ? "Blocked" : "Active" }
          : customer
      )
    );
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
  const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleView = (user) => {
    setSelectedUser(user);
    setModalType("view");
  };

  const handleEdit = (user) => {
    setSelectedUser({ ...user });
    setModalType("edit");
  };

  const handleSaveChanges = () => {
    setCustomers(
      customers.map((customer) =>
        customer.id === selectedUser.id ? selectedUser : customer
      )
    );
    setSelectedUser(null);
    setModalType(null);
  };

  const handleApproveExpert = (expert) => {
    setSelectedExpert(expert);
    setApprovalModal(true);
  };

  const confirmApproval = () => {
    // In a real application, this would make an API call
    // Add the approved expert to the customers list
    const approvedExpert = {
      ...selectedExpert,
      id: selectedExpert.id.replace('new-', ''),
      status: "Active",
      verification: "Verified",
      joined: new Date().toLocaleDateString(),
      visitedClients: 0
    };
    
    setCustomers([...customers, approvedExpert]);
    
    // Remove from newly registered list
    setNewlyRegistered(newlyRegistered.filter(e => e.id !== selectedExpert.id));
    setSelectedExpert(null);
    setApprovalModal(false);
  };

  // Fixed the approve all functionality
  const handleApproveAllExperts = () => {
    if (newlyRegistered.length === 0) return;

    // Add all experts to the customers list
    const approvedExperts = newlyRegistered.map(expert => ({
      ...expert,
      id: expert.id.replace('new-', ''),
      status: "Active",
      verification: "Verified",
      joined: new Date().toLocaleDateString(),
      visitedClients: 0
    }));
    
    setCustomers([...customers, ...approvedExperts]);
    
    // Clear the newly registered list
    setNewlyRegistered([]);
    setShowNewlyRegistered(false);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-indigo-800 mb-4">Expert Management</h1>

      <div className="flex justify-between mb-4">
        <InputText
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by Name"
          className="w-2/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        
        <button 
          onClick={() => setShowNewlyRegistered(!showNewlyRegistered)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200"
        >
          <span className="mr-2">
            {showNewlyRegistered ? "Hide" : "Newly Registered Experts"}
          </span>
          {newlyRegistered.length > 0 && (
            <span className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
              {newlyRegistered.length}
            </span>
          )}
        </button>
      </div>

      {showNewlyRegistered && newlyRegistered.length > 0 && (
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold text-indigo-700">Newly Registered Experts</h2>
            <button 
              onClick={handleApproveAllExperts}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition-colors duration-200"
            >
              Approve All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Specialization</th>
                  <th className="p-3 border">Registration Date</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {newlyRegistered.map((expert) => (
                  <tr key={expert.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 border">{expert.name}</td>
                    <td className="p-3 border">{expert.email}</td>
                    <td className="p-3 border">{expert.specialization}</td>
                    <td className="p-3 border">{expert.registrationDate}</td>
                    <td className="p-3 border">
                      <button 
                        onClick={() => handleApproveExpert(expert)} 
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors duration-200"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Visited Clients</th>
              <th className="p-3 border">Joined At</th>
              <th className="p-3 border">Verification</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{customer.name}</td>
                <td className="p-3 border">{customer.visitedClients}</td>
                <td className="p-3 border">{customer.joined}</td>
                <td className="p-3 border">{customer.verification}</td>
                <td className="p-3 border">
                  <button
                    className={`px-3 py-1 text-white rounded-full transition-all ${
                      customer.status === "Active"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                    onClick={() => handleStatusToggle(customer)}
                  >
                    {customer.status}
                  </button>
                </td>
                <td className="p-3 border flex gap-2">
                  <button onClick={() => handleView(customer)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200">
                    View
                  </button>
                  <button onClick={() => handleEdit(customer)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition-colors duration-200">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePagination(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } transition-colors duration-200`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Improved View/Edit Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-w-md transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-indigo-700">
                {modalType === "view" ? "User Details" : "Edit User"}
              </h2>
              <button 
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">Name:</label>
                <InputText
                  value={selectedUser.name}
                  disabled={modalType === "view"}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">Visited Clients:</label>
                <InputText
                  value={selectedUser.visitedClients}
                  disabled={modalType === "view"}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, visitedClients: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">Verification Status:</label>
                <InputText
                  value={selectedUser.verification}
                  disabled={modalType === "view"}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, verification: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors duration-200"
              >
                Close
              </button>
              {modalType === "edit" && (
                <button
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors duration-200"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Improved Approval Modal */}
      {approvalModal && selectedExpert && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 max-w-2xl max-h-4/5 overflow-y-auto transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-indigo-700">Expert Approval</h2>
              <button 
                onClick={() => {
                  setSelectedExpert(null);
                  setApprovalModal(false);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-3">
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Name:</label>
                  <InputText 
                    value={selectedExpert.name} 
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50" 
                    readOnly 
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Email:</label>
                  <InputText 
                    value={selectedExpert.email} 
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50" 
                    readOnly 
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Phone Number:</label>
                  <InputText 
                    value={selectedExpert.phone} 
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50" 
                    readOnly 
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Specialization:</label>
                  <InputText 
                    value={selectedExpert.specialization} 
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50" 
                    readOnly 
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 font-medium">Documents:</label>
              <div className="space-y-2 border border-gray-200 rounded-md p-3 bg-gray-50">
                {selectedExpert.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded border border-gray-200 bg-white hover:bg-blue-50 transition-colors duration-200">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      {doc}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">View</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setSelectedExpert(null);
                  setApprovalModal(false);
                }}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmApproval}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertManagement;