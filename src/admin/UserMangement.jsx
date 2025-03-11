import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const UserManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    fetchCustomers();
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
    setSelectedUser(user);
    setEditedUser({...user});
    setModalType("edit");
  };

  const handleSaveChanges = () => {
    setCustomers(
      customers.map((customer) =>
        customer.id === editedUser.id ? editedUser : customer
      )
    );
    setSelectedUser(null);
    setEditedUser(null);
    setModalType(null);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Blocked', value: 'Blocked' }
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-indigo-800 mb-4">User Management</h1>

      <div className="flex justify-between mb-4">
        <InputText
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by Name"
          className="w-2/3 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="overflow-x-auto">
        {/* Header row */}
        <div className="grid grid-cols-5 bg-gray-100 text-gray-700 text-left rounded-t-lg shadow-md">
          <div className="p-3 font-medium">Name</div>
          <div className="p-3 font-medium">Visited Clients</div>
          <div className="p-3 font-medium">Joined At</div>
          <div className="p-3 font-medium">Status</div>
          <div className="p-3 font-medium">Actions</div>
        </div>
        
        {/* Data rows */}
        {paginatedCustomers.map((customer, index) => (
          <div key={customer.id} className={`grid grid-cols-5 hover:bg-gray-50 shadow-sm ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="p-3">{customer.name}</div>
            <div className="p-3">{customer.visitedClients}</div>
            <div className="p-3">{customer.joined}</div>
            <div className="p-3">
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
            </div>
            <div className="p-3 flex gap-2">
              <button onClick={() => handleView(customer)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200">
                View
              </button>
              <button onClick={() => handleEdit(customer)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition-colors duration-200">
                Edit
              </button>
            </div>
          </div>
        ))}
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
                onClick={() => {
                  setSelectedUser(null);
                  setEditedUser(null);
                  setModalType(null);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {modalType === "view" ? (
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Name:</label>
                  <InputText
                    value={selectedUser.name}
                    disabled
                    className="w-full p-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Visited Clients:</label>
                  <InputText
                    value={selectedUser.visitedClients}
                    disabled
                    className="w-full p-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Status:</label>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedUser.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {selectedUser.status}
                  </span>
                </div>

                <div>
                  <label className="block mb-1 text-gray-700 font-medium">Joined At:</label>
                  <InputText
                    value={selectedUser.joined}
                    disabled
                    className="w-full p-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <InputText 
                    value={editedUser?.name || ''} 
                    onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Visited Clients</label>
                  <InputText 
                    type="number"
                    value={editedUser?.visitedClients || 0} 
                    onChange={(e) => setEditedUser({...editedUser, visitedClients: parseInt(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <Dropdown
                    value={editedUser?.status}
                    options={statusOptions}
                    onChange={(e) => setEditedUser({...editedUser, status: e.value})}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setSelectedUser(null);
                  setEditedUser(null);
                  setModalType(null);
                }}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors duration-200"
              >
                {modalType === "view" ? "Close" : "Cancel"}
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
    </div>
  );
};

export default UserManagement;