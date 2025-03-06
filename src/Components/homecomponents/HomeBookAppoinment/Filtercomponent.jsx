// import React, { useState } from "react";

// const Dropdown = ({ label, options, selected, setSelected, isOpen, setOpen }) => (
//   <div className="relative">
//     <div className="bg-indigo-700 rounded px-4 py-2 text-white cursor-pointer" onClick={() => setOpen(isOpen ? null : label)}>
//       <span>{selected || label}</span>
//     </div>
//     {isOpen && (
//       <div className="absolute z-10 mt-1 bg-white rounded shadow-lg w-40">
//         {options.map((option) => (
//           <div key={option} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800" onClick={() => { setSelected(option); setOpen(null); }}>
//             {option}
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );

// const RadioGroup = ({ label, options, selected, setSelected }) => (
//   <div className="flex flex-col gap-2">
//     <h3 className="font-medium mb-2">{label}</h3>
//     {options.map((option) => (
//       <div key={option} className="flex items-center gap-2">
//         <input type="radio" id={option} name={label} className="h-4 w-4" checked={selected === option} onChange={() => setSelected(option)} />
//         <label htmlFor={option} className="cursor-pointer">{option}</label>
//       </div>
//     ))}
//   </div>
// );

// const FilterComponent = ({ gender, setGender }) => {
//   const [filters, setFilters] = useState({ stories: "", experience: "", sortBy: "Relevance", fees: "", availability: "Available Today", consultType: "" });
//   const [filtersOpen, setFiltersOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const resetFilters = () => {
//     setGender("");
//     setFilters({ stories: "", experience: "", sortBy: "Relevance", fees: "", availability: "Available Today", consultType: "" });
//   };

//   return (
//     <div className="w-full bg-indigo-800 p-4 rounded-md">
//       <div className="flex flex-wrap items-center gap-2 justify-between">
//         <div className="flex flex-wrap gap-2">
//           {["Gender", "Patient Stories", "Experience"].map((label) => (
//             <Dropdown
//               key={label}
//               label={label}
//               options={
//                 label === "Gender" ? ["Male", "Female"] :
//                 label === "Patient Stories" ? ["With stories", "Most stories", "Recent stories"] :
//                 ["0-5 years", "5-10 years", "10+ years"]
//               }
//               selected={label === "Gender" ? gender : filters[label.toLowerCase()]}
//               setSelected={(value) => label === "Gender" ? setGender(value) : setFilters((prev) => ({ ...prev, [label.toLowerCase()]: value }))}
//               isOpen={openDropdown === label}
//               setOpen={setOpenDropdown}
//             />
//           ))}
//           <button className="bg-indigo-700 rounded px-4 py-2 text-white" onClick={() => setFiltersOpen(!filtersOpen)}>All Filters</button>
//           <button className="text-cyan-300 px-4 py-2 hover:underline" onClick={resetFilters}>Reset Filters</button>
//         </div>
//         <Dropdown
//           label="Sort By"
//           options={["Relevance", "Price: Low to High", "Price: High to Low", "Experience", "Availability"]}
//           selected={filters.sortBy}
//           setSelected={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
//           isOpen={openDropdown === "Sort By"}
//           setOpen={setOpenDropdown}
//         />
//       </div>
//       {filtersOpen && (
//         <div className="mt-6 flex flex-wrap gap-8 text-white">
//           {["Fees", "Availability", "Consult Type"].map((label) => (
//             <RadioGroup
//               key={label}
//               label={label}
//               options={
//                 label === "Fees" ? ["₹0-₹500", "Above ₹500", "Above ₹1000", "Above ₹2000"] :
//                 label === "Availability" ? ["Available in next 4 hours", "Available Today", "Available Tomorrow", "Available in next 7 days"] :
//                 ["Video consult"]
//               }
//               selected={filters[label.toLowerCase().replace(" ", "")]}
//               setSelected={(value) => setFilters((prev) => ({ ...prev, [label.toLowerCase().replace(" ", "")]: value }))}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterComponent;



import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // Importing Icons

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
  const [filters, setFilters] = useState({ stories: "", experience: "", sortBy: "Relevance", fees: "", availability: "Available Today", consultType: "" });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  const resetFilters = () => {
    setGender("");
    setFilters({ stories: "", experience: "", sortBy: "Relevance", fees: "", availability: "Available Today", consultType: "" });
  };

  return (
    <div className="w-full p-4">
      {/* Mobile Toggle Button */}
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-gray-800 text-lg font-semibold">Filters</h2>
        <button className="text-gray-800 p-2 rounded flex items-center" onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}>
          {mobileFiltersVisible ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Filters - Inline on Desktop, Stacked on Mobile */}
      <div className={`flex flex-wrap items-start gap-2 md:items-center ${mobileFiltersVisible ? "flex flex-col" : "hidden"} md:flex md:flex-row md:bg-blue-500 md:p-3 md:rounded-lg`}>
        {/* Gender, Patient Stories, Experience */}
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

        {/* Relevance - Positioned same as Gender, Patient Stories, Experience */}
        <Dropdown
          label="Relevance"
          options={["Relevance"]}
          selected={filters.sortBy}
          setSelected={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
          isOpen={openDropdown === "Relevance"}
          setOpen={setOpenDropdown}
        />

        {/* All Filters Button with Dropdown Arrow */}
        <button
          className="border border-gray-500 rounded px-4 py-2 text-gray-800 md:bg-blue-600 md:text-white flex items-center justify-between w-full md:w-auto"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <span>All Filters</span>
          <FaChevronDown className="ml-2 text-gray-600 md:text-white" />
        </button>

        {/* Reset Filters Button */}
        <button className="border border-gray-500 rounded px-4 py-2 text-gray-800 md:bg-blue-600 md:text-white" onClick={resetFilters}>
          Reset
        </button>
      </div>

      {/* All Filters Section */}
      {filtersOpen && (
        <div className="mt-6 flex flex-wrap gap-8 text-gray-800">
          {["Fees", "Availability", "Consult Type"].map((label) => (
            <div key={label} className="flex flex-col gap-2">
              <h3 className="font-medium mb-2">{label}</h3>
              {(
                label === "Fees" ? ["₹0-₹500", "Above ₹500", "Above ₹1000", "Above ₹2000"] :
                label === "Availability" ? ["Available in next 4 hours", "Available Today", "Available Tomorrow", "Available in next 7 days"] :
                ["Video consult"]
              ).map((option) => (
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
