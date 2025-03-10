import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ExpertManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  // Fetch Data from API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("https://localhost:4000/experts"); // Replace with your API URL
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Failed to load customer data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleView = (rowData) => {
    setSelectedCustomer(rowData);
    setIsViewing(true);
  };

  const handleEdit = (rowData) => {
    setSelectedCustomer(rowData);
    setIsEditing(true);
  };

  const handleSave = (updatedCustomer) => {
    setCustomers(customers.map((customer) =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    ));
    setIsEditing(false);
    setSelectedCustomer(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsViewing(false);
    setSelectedCustomer(null);
  };

  const handleStatusChange = async (rowData, newStatus) => {
    try {
      await axios.put(`https://api.example.com/customers/${rowData.id}`, {
        status: newStatus,
      });
      setCustomers(customers.map((customer) =>
        customer.id === rowData.id ? { ...customer, status: newStatus } : customer
      ));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-indigo-800 flex items-center">
          <i className="pi pi-users mr-2 text-xl"></i> User Management
        </h1>

        <div className="mb-6 relative">
          <span className="p-input-icon-left w-full">
            <InputText
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by Name"
              className="w-full p-3 rounded-lg bg-white border-2 border-gray-200"
            />
          </span>
        </div>

        <div className="card rounded-lg bg-white border-2 border-gray-300 shadow-xl overflow-hidden">
          <DataTable value={filteredCustomers} paginator rows={10} rowsPerPageOptions={[5, 10, 15, 20]}>
            <Column field="name" header="Name" sortable />
            <Column field="addedProducts" header="Added Products" sortable />
            <Column field="joined" header="Joined At" sortable />
            <Column field="status" header="Status" sortable />
            <Column body={(rowData) => (
              <div className="flex gap-2">
                <button
                  onClick={() => handleView(rowData)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:scale-105 transition-all"
                >
                  <i className="pi pi-eye mr-1"></i> View
                </button>
                <button
                  onClick={() => handleEdit(rowData)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:scale-105 transition-all"
                >
                  <i className="pi pi-pencil mr-1"></i> Edit
                </button>
              </div>
            )} header="Actions" />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default ExpertManagement;
