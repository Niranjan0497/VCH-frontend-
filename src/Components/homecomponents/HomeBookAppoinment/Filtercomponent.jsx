import React, { useState } from "react";

const Dropdown = ({ label, options, selected, setSelected, isOpen, setOpen }) => (
  <div className="relative">
    <div className="bg-indigo-700 rounded px-4 py-2 text-white cursor-pointer" onClick={() => setOpen(isOpen ? null : label)}>
      <span>{selected || label}</span>
    </div>
    {isOpen && (
      <div className="absolute z-10 mt-1 bg-white rounded shadow-lg w-40">
        {options.map((option) => (
          <div key={option} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800" onClick={() => { setSelected(option); setOpen(null); }}>
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
);

const RadioGroup = ({ label, options, selected, setSelected }) => (
  <div className="flex flex-col gap-2">
    <h3 className="font-medium mb-2">{label}</h3>
    {options.map((option) => (
      <div key={option} className="flex items-center gap-2">
        <input type="radio" id={option} name={label} className="h-4 w-4" checked={selected === option} onChange={() => setSelected(option)} />
        <label htmlFor={option} className="cursor-pointer">{option}</label>
      </div>
    ))}
  </div>
);

const FilterComponent = ({ gender, setGender }) => {
  const [filters, setFilters] = useState({ stories: "", experience: "", sortBy: "Relevance", fees: "", availability: "Available Today", consultType: "" });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const resetFilters = () => {
    setGender("");
    setFilters({ stories: "", experience: "", sortBy: "Relevance", fees: "", availability: "Available Today", consultType: "" });
  };

  return (
    <div className="w-full bg-indigo-800 p-4">
      <div className="flex flex-wrap items-center gap-2 justify-between">
        <div className="flex flex-wrap gap-2">
          {["Gender", "Patient Stories", "Experience"].map((label) => (
            <Dropdown
              key={label}
              label={label}
              options={
                label === "Gender" ? ["Male", "Female"] :
                label === "Patient Stories" ? ["With stories", "Most stories", "Recent stories"] :
                ["0-5 years", "5-10 years", "10+ years"]
              }
              selected={label === "Gender" ? gender : filters[label.toLowerCase()]}
              setSelected={(value) => label === "Gender" ? setGender(value) : setFilters((prev) => ({ ...prev, [label.toLowerCase()]: value }))}
              isOpen={openDropdown === label}
              setOpen={setOpenDropdown}
            />
          ))}
          <button className="bg-indigo-700 rounded px-4 py-2 text-white" onClick={() => setFiltersOpen(!filtersOpen)}>All Filters</button>
          <button className="text-cyan-300 px-4 py-2 hover:underline" onClick={resetFilters}>Reset Filters</button>
        </div>
        <Dropdown
          label="Sort By"
          options={["Relevance", "Price: Low to High", "Price: High to Low", "Experience", "Availability"]}
          selected={filters.sortBy}
          setSelected={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
          isOpen={openDropdown === "Sort By"}
          setOpen={setOpenDropdown}
        />
      </div>
      {filtersOpen && (
        <div className="mt-6 flex flex-wrap gap-8 text-white">
          {["Fees", "Availability", "Consult Type"].map((label) => (
            <RadioGroup
              key={label}
              label={label}
              options={
                label === "Fees" ? ["₹0-₹500", "Above ₹500", "Above ₹1000", "Above ₹2000"] :
                label === "Availability" ? ["Available in next 4 hours", "Available Today", "Available Tomorrow", "Available in next 7 days"] :
                ["Video consult"]
              }
              selected={filters[label.toLowerCase().replace(" ", "")]}
              setSelected={(value) => setFilters((prev) => ({ ...prev, [label.toLowerCase().replace(" ", "")]: value }))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;