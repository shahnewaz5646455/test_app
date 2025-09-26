"use client";

import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Table() {
  const [expandedSections, setExpandedSections] = useState({
    test: false,
    homework: false,
    quizzes: false,
    projects: false,
    participation: false,
  });

  const [testEntries, setTestEntries] = useState([
    {
      id: 1,
      name: "Test 1: Wed. 04.03.25",
      values: ["21", "21", "12", "29", "32"],
    },
    {
      id: 2,
      name: "Test 2: Mon. 17.03.25",
      values: ["30", "22", "45", "44", "26"],
    },
  ]);

  const [homeworkEntries, setHomeworkEntries] = useState([
    {
      id: 1,
      name: "Homework 1: Wed. 04.03.25",
      values: ["21", "25", "12", "29", "32"],
    },
    {
      id: 2,
      name: "Homework 2: Mon. 17.03.25",
      values: ["30", "22", "45", "44", "26"],
    },
  ]);

  const [quizzesEntries, setQuizzesEntries] = useState([
    {
      id: 1,
      name: "Quiz 1: Fri. 06.03.25",
      values: ["18", "19", "15", "22", "20"],
    },
    {
      id: 2,
      name: "Quiz 2: Tue. 11.03.25",
      values: ["25", "23", "28", "26", "24"],
    },
  ]);

  const [projectsEntries, setProjectsEntries] = useState([
    {
      id: 1,
      name: "Project 1: Mon. 24.03.25",
      values: ["45", "42", "48", "46", "44"],
    },
    {
      id: 2,
      name: "Project 2: Wed. 02.04.25",
      values: ["38", "40", "42", "39", "41"],
    },
  ]);

  const [participationEntries, setParticipationEntries] = useState([
    {
      id: 1,
      name: "Participation: Week 1",
      values: ["9", "8", "10", "9", "8"],
    },
    {
      id: 2,
      name: "Participation: Week 2",
      values: ["10", "9", "10", "8", "9"],
    },
  ]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateEntryValue = (section, entryId, valueIdx, newValue) => {
    const setters = {
      test: setTestEntries,
      homework: setHomeworkEntries,
      quizzes: setQuizzesEntries,
      projects: setProjectsEntries,
      participation: setParticipationEntries,
    };

    if (setters[section]) {
      setters[section]((prev) =>
        prev.map((entry) =>
          entry.id === entryId
            ? {
                ...entry,
                values: entry.values.map((val, idx) =>
                  idx === valueIdx ? newValue : val
                ),
              }
            : entry
        )
      );
    }
  };

  const addNewEntry = (section) => {
    const newEntry = {
      id: Date.now(),
      name: `New ${section.charAt(0).toUpperCase() + section.slice(1)}`,
      values: ["", "", "", "", ""],
    };

    const setters = {
      test: setTestEntries,
      homework: setHomeworkEntries,
      quizzes: setQuizzesEntries,
      projects: setProjectsEntries,
      participation: setParticipationEntries,
    };

    if (setters[section]) {
      setters[section]((prev) => [...prev, newEntry]);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 sm:p-4 md:p-6">
     <div className="relative w-full rounded-3xl shadow-xl overflow-hidden">
  <div className="overflow-y-auto max-h-screen">
    <table className="w-full text-xs sm:text-sm md:text-base table-fixed">
            <thead className="sticky top-0 z-30 bg-gray-50">
              <tr className="bg-gray-50 text-gray-700 text-left">
                <th className="sticky left-0 z-40 bg-gray-50 py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  Categories
                </th>
                <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200 w-[100px] text-center">
                  Philippe
                </th>
                <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200 w-[100px] text-center">
                  Darlene
                </th>
                <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200 w-[100px] text-center">
                  Kyle
                </th>
                <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-r border-gray-200 w-[100px] text-center">
                  Arlene
                </th>
                <th className="py-3 px-2 sm:px-4 md:px-6 font-semibold border-b border-gray-200 w-[100px] text-center">
                  Eduardo
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Writing Row */}
              <tr className="bg-violet-50 text-violet-700 font-semibold">
                <td className="sticky left-0 z-20 bg-violet-50 py-3 px-2 sm:px-4 md:px-6 border-b-2 border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  Writing
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-violet-600 cursor-pointer border-b-2 border-gray-200 w-[100px] text-center">
                  2.3
                </td>
              </tr>

              {/* Test Section */}
              <tr>
                <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b border-r font-medium border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  <button
                    onClick={() => toggleSection("test")}
                    className="flex text-sm md:text-base items-center space-x-2 focus:outline-none w-full text-left"
                  >
                    <TiArrowSortedDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedSections.test ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                    <span>Test</span>
                  </button>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px] text-center">
                  2.3
                </td>
              </tr>

              {expandedSections.test &&
                testEntries.map((entry) => (
                  <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                    <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:pl-8 md:pr-6 whitespace-nowrap text-black text-sm md:text-base font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                      {entry.name}
                    </td>
                    {entry.values.map((value, index) => (
                      <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateEntryValue("test", entry.id, index, e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base text-center"
                          placeholder="-"
                        />
                      </td>
                    ))}
                  </tr>
                ))}

              {expandedSections.test && (
                <tr className="transition-all duration-300 ease-in-out">
                  <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                    <button
                      onClick={() => addNewEntry("test")}
                      className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none w-full text-left"
                    >
                      <span className="text-xl">+</span>
                      <span>Add New Entry</span>
                    </button>
                  </td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px]"></td>
                </tr>
              )}

              {/* Homework Section */}
              <tr>
                <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 font-medium border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  <button
                    onClick={() => toggleSection("homework")}
                    className="flex text-sm md:text-base items-center space-x-2 focus:outline-none w-full text-left"
                  >
                    <TiArrowSortedDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedSections.homework ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                    <span>Homework</span>
                  </button>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  2.3
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px] text-center">
                  2.3
                </td>
              </tr>

              {expandedSections.homework &&
                homeworkEntries.map((entry) => (
                  <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                    <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:pl-8 md:pr-6 font-semibold text-black border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] whitespace-nowrap w-[180px]">
                      {entry.name}
                    </td>
                    {entry.values.map((value, index) => (
                      <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateEntryValue("homework", entry.id, index, e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base text-center"
                          placeholder="-"
                        />
                      </td>
                    ))}
                  </tr>
                ))}

              {expandedSections.homework && (
                <tr className="transition-all duration-300 ease-in-out">
                  <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                    <button
                      onClick={() => addNewEntry("homework")}
                      className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none w-full text-left"
                    >
                      <span className="text-xl">+</span>
                      <span>Add New Entry</span>
                    </button>
                  </td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px]"></td>
                </tr>
              )}

              {/* Quizzes Section */}
              <tr>
                <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b border-r font-medium border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  <button
                    onClick={() => toggleSection("quizzes")}
                    className="flex text-sm md:text-base items-center space-x-2 focus:outline-none w-full text-left"
                  >
                    <TiArrowSortedDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedSections.quizzes ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                    <span>Quizzes</span>
                  </button>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.8
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.8
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.8
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.8
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px] text-center">
                  1.8
                </td>
              </tr>

              {expandedSections.quizzes &&
                quizzesEntries.map((entry) => (
                  <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                    <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:pl-8 md:pr-6 whitespace-nowrap text-black text-sm md:text-base font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                      {entry.name}
                    </td>
                    {entry.values.map((value, index) => (
                      <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateEntryValue("quizzes", entry.id, index, e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base text-center"
                          placeholder="-"
                        />
                      </td>
                    ))}
                  </tr>
                ))}

              {expandedSections.quizzes && (
                <tr className="transition-all duration-300 ease-in-out">
                  <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                    <button
                      onClick={() => addNewEntry("quizzes")}
                      className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none w-full text-left"
                    >
                      <span className="text-xl">+</span>
                      <span>Add New Entry</span>
                    </button>
                  </td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px]"></td>
                </tr>
              )}

              {/* Projects Section */}
              <tr>
                <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b border-r font-medium border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  <button
                    onClick={() => toggleSection("projects")}
                    className="flex text-sm md:text-base items-center space-x-2 focus:outline-none w-full text-left"
                  >
                    <TiArrowSortedDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedSections.projects ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                    <span>Projects</span>
                  </button>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  3.5
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  3.5
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  3.5
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  3.5
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px] text-center">
                  3.5
                </td>
              </tr>

              {expandedSections.projects &&
                projectsEntries.map((entry) => (
                  <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                    <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:pl-8 md:pr-6 whitespace-nowrap text-black text-sm md:text-base font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                      {entry.name}
                    </td>
                    {entry.values.map((value, index) => (
                      <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateEntryValue("projects", entry.id, index, e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base text-center"
                          placeholder="-"
                        />
                      </td>
                    ))}
                  </tr>
                ))}

              {expandedSections.projects && (
                <tr className="transition-all duration-300 ease-in-out">
                  <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                    <button
                      onClick={() => addNewEntry("projects")}
                      className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none w-full text-left"
                    >
                      <span className="text-xl">+</span>
                      <span>Add New Entry</span>
                    </button>
                  </td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px]"></td>
                </tr>
              )}

              {/* Participation Section */}
              <tr>
                <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b border-r font-medium border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                  <button
                    onClick={() => toggleSection("participation")}
                    className="flex text-sm md:text-base items-center space-x-2 focus:outline-none w-full text-left"
                  >
                    <TiArrowSortedDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedSections.participation ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                    <span>Participation</span>
                  </button>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.2
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.2
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.2
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px] text-center">
                  1.2
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px] text-center">
                  1.2
                </td>
              </tr>

              {expandedSections.participation &&
                participationEntries.map((entry) => (
                  <tr key={entry.id} className="transition-all duration-300 ease-in-out">
                    <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:pl-8 md:pr-6 whitespace-nowrap text-black text-sm md:text-base font-semibold border-b border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                      {entry.name}
                    </td>
                    {entry.values.map((value, index) => (
                      <td key={index} className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateEntryValue("participation", entry.id, index, e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base text-center"
                          placeholder="-"
                        />
                      </td>
                    ))}
                  </tr>
                ))}

              {expandedSections.participation && (
                <tr className="transition-all duration-300 ease-in-out">
                  <td className="sticky left-0 z-20 bg-white py-3 px-2 sm:px-4 md:px-6 border-b text-blue-600 font-semibold border-r border-gray-200 shadow-[8px_0_12px_-3px_rgba(0,0,0,0.08)] w-[180px]">
                    <button
                      onClick={() => addNewEntry("participation")}
                      className="flex items-center space-x-2 hover:text-blue-700 focus:outline-none w-full text-left"
                    >
                      <span className="text-xl">+</span>
                      <span>Add New Entry</span>
                    </button>
                  </td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-r border-gray-200 w-[100px]"></td>
                  <td className="py-3 px-2 sm:px-4 md:px-6 border-b border-gray-200 w-[100px]"></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}