import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Dropdown = ({ label, options, selected, setSelected, isOpen, setOpen }) => (
  <div className="relative w-full md:w-auto">
    <div
      className="flex items-center justify-between px-4 py-2 cursor-pointer md:bg-blue-600 md:text-white rounded border border-gray-300 md:border-0"
      onClick={() => setOpen(isOpen ? null : label)}
    >
      <span>{selected || label}</span>
      <FaChevronDown className="text-gray-600 md:text-white ml-2" />
    </div>
    {isOpen && (
      <div className="absolute z-10 mt-1 bg-white rounded shadow-lg w-40">
        {options.map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
            onClick={() => { setSelected(option); setOpen(null); }}
          >
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
);

const FilterComponent = ({ gender, setGender }) => {
  const defaultFilters = {
    stories: "",
    experience: "",
    sortBy: "Relevance",
    fees: "",
    availability: "Available Today",
    consultType: ""
  };
  const [filters, setFilters] = useState(defaultFilters);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  const resetFilters = () => {
    setGender("");
    setFilters(defaultFilters);
    setFiltersOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-gray-800 text-lg font-semibold">Filters</h2>
        <button className="text-gray-800 p-2 rounded flex items-center" onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}>
          {mobileFiltersVisible ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      <div className={`flex flex-wrap items-start gap-2 md:items-center ${mobileFiltersVisible ? "flex flex-col" : "hidden"} md:flex md:flex-row md:bg-blue-500 md:p-3 md:rounded-lg`}>
        {["Gender", "Patient Stories", "Experience", "Relevance"].map((filter) => (
          <Dropdown
            key={filter}
            label={filter}
            options={{
              "Gender": ["Male", "Female"],
              "Patient Stories": ["With stories", "Most stories", "Recent stories"],
              "Experience": ["0-5 years", "5-10 years", "10+ years"],
              "Relevance": ["Relevance"]
            }[filter]}
            selected={filters[filter.toLowerCase().replace(/ /g, "")] || (filter === "Gender" ? gender : "")}
            setSelected={(value) => filter === "Gender" ? setGender(value) : setFilters(prev => ({ ...prev, [filter.toLowerCase().replace(/ /g, "")]: value }))}
            isOpen={openDropdown === filter}
            setOpen={setOpenDropdown}
          />
        ))}

        <button
          className="border border-gray-500 rounded px-4 py-2 text-gray-800 md:bg-blue-600 md:text-white flex items-center justify-between w-full md:w-auto"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <span>All Filters</span>
          <FaChevronDown className="ml-2 text-gray-600 md:text-white" />
        </button>

        <button className="border border-gray-500 rounded px-4 py-2 text-gray-800 md:bg-blue-600 md:text-white" onClick={resetFilters}>
          Reset
        </button>
      </div>

      {filtersOpen && (
        <div className="mt-6 flex flex-wrap gap-8 text-gray-800">
          {["Fees", "Availability", "Consult Type"].map((filter) => (
            <div key={filter} className="flex flex-col gap-2">
              <h3 className="font-medium mb-2">{filter}</h3>
              {["Fees", "Availability", "Consult Type"].reduce((acc, key) => {
                acc[key] = {
                  "Fees": ["₹0-₹500", "Above ₹500", "Above ₹1000", "Above ₹2000"],
                  "Availability": ["Available in next 4 hours", "Available Today", "Available Tomorrow", "Available in next 7 days"],
                  "Consult Type": ["Video consult"]
                }[key];
                return acc;
              }, {})[filter].map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={option}
                    name={filter}
                    className="h-4 w-4"
                    checked={filters[filter.toLowerCase().replace(/ /g, "")] === option}
                    onChange={() => setFilters(prev => ({ ...prev, [filter.toLowerCase().replace(/ /g, "")]: option }))}
                  />
                  <label htmlFor={option} className="cursor-pointer">{option}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
