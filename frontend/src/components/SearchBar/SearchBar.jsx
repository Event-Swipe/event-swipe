/* eslint-disable react/jsx-boolean-value */
import React, { useContext } from "react";
import "./SearchBar.css";
import EventsContext from "../../contexts/EventsContext";
// import EventList from "../EventList/EventList";

function SearchBar() {
  const { searchValue, handleSearchChange, handleSearchSubmit } =
    useContext(EventsContext);
  /* const { searchString } = useParams(); */
  /* add state to veify search boolean */

  return (
    <div className="searchBar">
      {/* <div className="searchTitle">
        <h3>Search</h3>
      </div> */}
      <div>
        <form className="searchForm" /* onSubmit={handleSearchSubmit} */>
          <div>
            <input
              className="searchBar-input"
              type="search"
              name="search"
              placeholder=" 🔍 Search by event, venue, team or artist"
              value={searchValue}
              onChange={handleSearchChange}
              onSubmit={handleSearchSubmit}
            />
          </div>
        </form>
      </div>
      {/* isSearched &&  */}
    </div>
  );
}

export default SearchBar;
