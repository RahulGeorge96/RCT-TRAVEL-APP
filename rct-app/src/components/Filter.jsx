import React from 'react'

const Filter = ({
  countryFilter,
  setCountryFilter,
  budgetFilter,
  setBudgetFilter,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div>
      <select
        value={countryFilter}
        onChange={(e) => setCountryFilter(e.target.value)}
      >
        <option value="">All Countries</option>
        <option value="Australia">Australia</option>
        <option value="Brazil">Brazil</option>
        <option value="France">France</option>
        <option value="Italy">Italy</option>
        <option value="Japan">Japan</option>
        <option value="Turkey">Turkey</option>
        <option value="USA">USA</option>
      </select>
      <input
        type="range"
        min="0"
        max="4000"
        value={budgetFilter}
        onChange={(e) => setBudgetFilter(e.target.value)}
      />
      <span>{budgetFilter}</span>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Filter