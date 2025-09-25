"use client";

import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Table() {
  // Add this state for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    test: false,
    homework: false,
  });

  // Dummy data for entries
  const testEntries = [
    { id: 1, name: "Test 1: Wed. 04.03.25", values: ["21", "21", "12", "29", "32"] },
    { id: 2, name: "Test 2: Mon. 17.03.25", values: ["30", "22", "45", "44", "26"] },
  ];
  const homeworkEntries = [
    { id: 1, name: "Test 1: Wed. 04.03.25", values: ["21", "25", "12", "29", "32"] },
    { id: 2, name: "Test 2: Mon. 17.03.25", values: ["30", "22", "45", "44", "26"] },
  ];

  // Toggle function
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Dummy update function
  const updateEntryValue = (section, entryId, valueIdx, newValue) => {
    // Implement your logic here
  };

  // Dummy add function
  const addNewEntry = (section) => {
    // Implement your logic here
  };

  return (
    <div className="w-full overflow-x-auto p-2 sm:p-4 md:p-6">
      <table className="min-w-full bg-white rounded-3xl shadow-xl overflow-hidden  text-xs sm:text-sm md:text-base">
        <thead>
          <tr className="bg-gray-50 text-gray-700 text-left">
            <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
              Categories
            </th>
            <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200">
              Philippe
            </th>
            <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200">
              Darlene
            </th>
            <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200">
              Kyle
            </th>
            <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200">
              Arlene
            </th>
            <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-gray-200">
              Eduardo
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-violet-50 text-violet-700 font-semibold">
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b-2 border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
              Writing
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200">
              2.3
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200">
              2.3
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200">
              2.3
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200">
              2.3
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-gray-200">
              2.3
            </td>
          </tr>

          {/* Test Section */}
          <tr>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r font-medium border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
              <button
                onClick={() => toggleSection("test")}
                className="flex text-sm md:text-base items-center space-x-2 focus:outline-none"
              >
                <TiArrowSortedDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    expandedSections.test ? "rotate-0" : "-rotate-180"
                  }`}
                />
                <span>Test</span>
              </button>
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200">2.3</td>
          </tr>

          {/* Test Entries */}
          {expandedSections.test &&
            testEntries.map((entry) => (
              <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                <td className="py-3 px-2 sm:px-4 md:pl-14 md:pr-14 whitespace-nowrap text-black text-sm md:text-base font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
                  {entry.name}
                </td>
                {entry.values.map((value, index) => (
                  <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        updateEntryValue("test", entry.id, index, e.target.value)
                      }
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base"
                      placeholder="Enter value"
                    />
                  </td>
                ))}
              </tr>
            ))}

          {/* Add New Test Entry */}
          {expandedSections.test && (
            <tr className="transition-all duration-300 ease-in-out">
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
                <button
                  onClick={() => addNewEntry("test")}
                  className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none"
                >
                  <span className="text-xl">+</span>
                  <span>Add New Entry</span>
                </button>
              </td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200"></td>
            </tr>
          )}

          {/* Homework Section */}
          <tr>
            <td className="py-3 px-2 sm:px-4 md:px-6 font-medium border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
              <button
                onClick={() => toggleSection("homework")}
                className="flex text-sm md:text-base items-center space-x-2 focus:outline-none"
              >
                <TiArrowSortedDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    expandedSections.homework ? "rotate-0" : "-rotate-180"
                  }`}
                />
                <span>Homework</span>
              </button>
            </td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">2.3</td>
            <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200">2.3</td>
          </tr>

          {/* Homework Entries */}
          {expandedSections.homework &&
            homeworkEntries.map((entry) => (
              <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                <td className="py-3 px-2 sm:px-4 md:pl-14 md:pr-14  font-semibold text-black border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] whitespace-nowrap">
                  {entry.name}
                </td>
                {entry.values.map((value, index) => (
                  <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        updateEntryValue("homework", entry.id, index, e.target.value)
                      }
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base"
                      placeholder="Enter value"
                    />
                  </td>
                ))}
              </tr>
            ))}

          {/* Add New Homework Entry */}
          {expandedSections.homework && (
            <tr className="transition-all duration-300 ease-in-out">
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)]">
                <button
                  onClick={() => addNewEntry("homework")}
                  className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none"
                >
                  <span className="text-xl">+</span>
                  <span>Add New Entry</span>
                </button>
              </td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200"></td>
              <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}