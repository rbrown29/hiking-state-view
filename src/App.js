// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import {
  FaLeaf,
  FaMountain,
  FaHiking,
  FaStar,
  FaUncharted,
} from "react-icons/fa";

const App = () => {
  const [hikingData, setHikingData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch hiking data from the JSON file on component mount
  useEffect(() => {
    const fetchHikingData = async () => {
      try {
        const response = await fetch("/data/Wyoming.json"); 
        if (!response.ok) throw new Error("Failed to load data");

        const data = await response.json();
        console.log("Fetched Data:", data); 
        setHikingData(data); 
        setFilteredData(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchHikingData();
  }, []);

  // Handle search input changes
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = hikingData.filter((hike) =>
      hike.Trail_Name.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  // Function to get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 1:
        return "green-text";
      case 2:
        return "blue-text";
      case 3:
        return "red-text";
      default:
        return "red-text";
    }
  };

  // Function to get difficulty icon
  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case 1:
        return <FaLeaf className="green-text" />; // Easy
      case 2:
        return <FaMountain className="blue-text" />; // Moderate
      case 3:
        return <FaHiking className="red-text" />; // Hard
      default:
        return <FaUncharted className="red-text" />; // Uncharted
    }
  };

  return (
    <div className="container">
      <div className="h1-container">
        <img src="/image.png" alt="Hiking Icon" className="hiking-icon" />
        <h1 className="centered-h1">Wyoming Trails</h1>
        <a href="https://hikeexplorer.netlify.app/" target="_blank" rel="noopener noreferrer" className="link">View On Map</a>
      </div>
      <div className="header">
        <p className="p">
          "When everything feels like an uphill struggle, Just think of the view
          from the top." - Unknown
        </p>
      </div>
      <div className="search-box-container">
      <FaHiking className="search-icon" />
        <input
          type="text"
          className="search-box"
          placeholder="Search for a trail..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="divider"></div>
      {filteredData.length === 0 ? (
        <p className="center-align" id="h1">
          No hiking data available.
        </p>
      ) : (
        <div className="row">
          {filteredData.map((hike, index) => (
            <div
              className="col s12 m6 l4"
              key={hike.Unique_Id || index} 
            >
              <div className="card hoverable">
                {hike.Cover_Photo ? ( // Render the image only if Cover_Photo exists
                  <div className="card-image">
                    <img
                      src={hike.Cover_Photo}
                      alt={hike.Trail_Name || "Trail"}
                    />
                    <span className="card-title" id="cardTitle">
                      {hike.Trail_Name || "Unnamed Trail"}
                    </span>
                  </div>
                ) : (
                  <div className="card-image">
                    <img
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.exploremanitoulin.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fhikeplaceholder.jpg&f=1&nofb=1&ipt=c7fb4e02c325cab2eec783d4c979278a329a3881a0fd8729c9d3cbe3c9bb2f35&ipo=images"
                      alt="Placeholder"
                    />
                    <span className="card-title" id="cardTitle">
                      {hike.Trail_Name || "Unnamed Trail"}
                    </span>
                  </div>
                )}
                <div className="card-content">
                  <ul className="collection">
                    <li className="collection-item">
                      <strong>Trail Time:</strong> {hike.Est_Hike_Duration}{" "}
                      minutes
                    </li>
                    <li className="collection-item">
                      <strong>Distance:</strong> {hike.Distance || "N/A"} miles
                    </li>
                    <li
                      className={`collection-item ${getDifficultyColor(
                        hike.Difficulty
                      )}`}
                    >
                      <strong>Difficulty:</strong>{" "}
                      {getDifficultyIcon(hike.Difficulty)}
                    </li>
                    <li className="collection-item">
                      <strong>Rating:</strong> {hike.Rating || "N/A"}{" "}
                      <FaStar color="#FF9800" /> ({hike.Review_Count || 0}{" "}
                      reviews)
                    </li>
                  </ul>
                </div>
                <div className="card-action">
                  <a
                    href={hike.Url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-text"
                  >
                    View Trail Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="author">
        Created by:&nbsp;
        <a
          className="link"
          href="https://interactive-reality.netlify.app/"
          rel="nonopener noreferrer"
          target="_blank"
        >
          Richard Brown
        </a>
      </p>
    </div>
  );
};

export default App;
