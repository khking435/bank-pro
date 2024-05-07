import React from 'react'; // Importing React library
import './SearchBar.css'; // Importing CSS file for styling

// Defining SearchBar component as a functional component
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  // Function to handle input change
  const handleInputChange = (event) => {
    // Update the searchTerm state with the new value entered by the user
    setSearchTerm(event.target.value);
  };

  // Rendering the SearchBar component
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
