import React, { useContext } from "react";
import "./SearchBar.css";
import EventsContext from "../../contexts/EventsContext";

function SearchBar() {
  const { searchValue, handleSearchChange, handleSearchSubmit } =
    useContext(EventsContext);

  return (
    <div className="searchBar">
      <div className="searchTitle">
        <h3>Search</h3>
      </div>
      <div>
        <form className="searchForm" onSubmit={handleSearchSubmit}>
          <div>
            <input
              className="searchBar-input"
              type="search"
              name="search"
              placeholder="Search by event, venue, team or artist"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div>
            <button type="submit" className="searchBarButton">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
