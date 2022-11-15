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
        <form
          className="searchForm d-flex bg-transparent"
          role="search"
          onSubmit={handleSearchSubmit}
        >
          <div>
            <input
              className="searchBar-input form-control me-2"
              type="search"
              name="search"
              placeholder=" 🔍 Search by event, venue, team or artist"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
