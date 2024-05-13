import React from 'react';
import './SearchBar.css'; 

const SearchBar = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = (event) => {
  
    setSearchTerm(event.target.value);
  };


  return (
    <div className="search-bar">
      
      <input
        type="text" 
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search transactions..." 
      />
    </div>
  );
};

export default SearchBar; 
