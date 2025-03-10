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

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Blocked', value: 'Blocked' }
  ];

  const verificationOptions = [
    { label: 'Verified', value: 'Verified' },
    { label: 'Unverified', value: 'Unverified' }
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-indigo-800 mb-4">User Management</h1>

      <div className="mb-4">
        <InputText
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>

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
                  <button onClick={() => handleView(customer)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1">
                    <i className="pi pi-eye"></i> View
                  </button>
                  <button onClick={() => handleEdit(customer)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center gap-1">
                    <i className="pi pi-pencil"></i> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls would go here */}

      {selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 opacity-100">
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <h2 className="text-xl font-bold text-indigo-700">{modalType === "view" ? "User Details" : "Edit User"}</h2>
              <button 
                onClick={() => {
                  setSelectedUser(null);
                  setEditedUser(null);
                  setModalType(null);
                }} 
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <i className="pi pi-times text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              {modalType === "view" ? (
                <>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-gray-500">Name</div>
                      <div className="font-medium">{selectedUser.name}</div>
                      
                      <div className="text-gray-500">Visited Clients</div>
                      <div className="font-medium">{selectedUser.visitedClients}</div>
                      
                      <div className="text-gray-500">Verification</div>
                      <div className="font-medium">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          selectedUser.verification === "Verified" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {selectedUser.verification}
                        </span>
                      </div>
                      
                      <div className="text-gray-500">Status</div>
                      <div className="font-medium">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          selectedUser.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {selectedUser.status}
                        </span>
                      </div>
                      
                      <div className="text-gray-500">Joined At</div>
                      <div className="font-medium">{selectedUser.joined}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Verification</label>
                      <Dropdown
                        value={editedUser?.verification}
                        options={verificationOptions}
                        onChange={(e) => setEditedUser({...editedUser, verification: e.value})}
                        className="w-full"
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
                </>
              )}
            </div>
            
            <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
              <button 
                onClick={() => {
                  setSelectedUser(null);
                  setEditedUser(null);
                  setModalType(null);
                }} 
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 flex items-center gap-1"
              >
                <i className="pi pi-times"></i> Cancel
              </button>
              
              {modalType === "edit" && (
                <button 
                  onClick={handleSaveChanges} 
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 flex items-center gap-1"
                >
                  <i className="pi pi-check"></i> Save Changes
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