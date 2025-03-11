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
        {[
          { label: "Gender", options: ["Male", "Female"], value: gender, setValue: setGender },
          { label: "Patient Stories", options: ["With stories", "Most stories", "Recent stories"], value: filters.stories, setValue: (val) => setFilters(prev => ({ ...prev, stories: val })) },
          { label: "Experience", options: ["0-5 years", "5-10 years", "10+ years"], value: filters.experience, setValue: (val) => setFilters(prev => ({ ...prev, experience: val })) }
        ].map(({ label, options, value, setValue }) => (
          <Dropdown
            key={label}
            label={label}
            options={options}
            selected={value}
            setSelected={setValue}
            isOpen={openDropdown === label}

            setOpen={setOpenDropdown}
          />
        ))}


       
        <Dropdown
          label="Relevance"
          options={["Relevance"]}
          selected={filters.sortBy}
          setSelected={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
          isOpen={openDropdown === "Relevance"}
          setOpen={setOpenDropdown}
        />

      

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
          {[
            { label: "Fees", options: ["₹0-₹500", "Above ₹500", "Above ₹1000", "Above ₹2000"] },
            { label: "Availability", options: ["Available in next 4 hours", "Available Today", "Available Tomorrow", "Available in next 7 days"] },
            { label: "Consult Type", options: ["Video consult"] }
          ].map(({ label, options }) => (
            <div key={label} className="flex flex-col gap-2">
              <h3 className="font-medium mb-2">{label}</h3>
              {options.map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <input type="radio" id={option} name={label} className="h-4 w-4" />

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