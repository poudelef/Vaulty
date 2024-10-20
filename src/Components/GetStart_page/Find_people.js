import React, { useState } from "react";
import userData from "./user.json";
import "./Find_people.css";

export function Find_people() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = userData.find(user => user.id === searchTerm);
    setSearchResult(result);
  };

  const handleConnect = () => {
    alert(`Connection request sent to ${searchResult.name}`);
  };

  return (
    <div className="find-people-container">
      <h1>Find People</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter user ID"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {searchResult && (
        <div className="user-card">
          <h2>{searchResult.name}</h2>
          <p>ID: {searchResult.id}</p>
          <p>Email: {searchResult.email}</p>
          <p>Occupation: {searchResult.occupation}</p>
          <button onClick={handleConnect} className="connect-button">Connect</button>
        </div>
      )}

      {searchTerm && !searchResult && (
        <p>No user found with the given ID.</p>
      )}
    </div>
  );
}

export default Find_people;