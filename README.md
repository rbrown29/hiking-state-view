# State View: Hiking Trails

## Overview
The **Hiking state View** is a React-based web application designed to help users explore hiking trails. The app features a search functionality, allowing users to filter trails by name, and displays detailed information about each trail.

## Add on Pages Oregon Hiking project
- **Oregon Hiking**: https://github.com/rbrown29/Oregon-Hikes
- **Hike Explorer**: https://github.com/rbrown29/HikeExplorer
- **US Map**:https://github.com/rbrown29/usmap

---
## Live Demo
[Oregontrails](https://oregontrails.netlify.app/)

---

## Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Trail Search**: Search for trails by name using the built-in search box.
- **Trail Details**: View essential trail information, including difficulty, distance, duration, and ratings.
- **Dynamic Filtering**: Displays filtered results instantly as the user types in the search box.

---

## Tech Stack
- **Frontend**: React, CSS
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Data Source**: Local JSON file (`.json`)

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone repository-url
   cd hiking-state-view
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```
   The app will be accessible at [http://localhost:3000](http://localhost:3000).

4. **Add Data File**
   Ensure the `.json` file is located in the `public/data` directory.

---

## File Structure
```
.
├── public
│   ├── data
│   │   └── .json    # Trail data
│   ├── image.png          # Hiking icon used in the app
│   └── index.html         # HTML template
├── src
│   ├── App.js             # Main React component
│   ├── App.css            # Styling for the app
│   └── index.js           # Entry point for React
└── README.md              # Documentation
```

---

## JSON Data Structure
Each trail in the `.json` file follows this structure:
```json
{
    "Unique_Id": "",
    "Trail_Name": "",
    "Distance": ,
    "Elevation_Gain": ,
    "Highest_Point": ,
    "Difficulty": ,
    "Rating": ,
    "Review_Count": ,
    "Area": "",
    "Latitude": ,
    "Longitude": ,
    "Cover_Photo": "",
    "Parsed_Date": ""
}
```

---

## Screenshots

![Screenshot](/public/minnesota.png)
![Screenshot](/public/oregon.png)
![Screenshot](/public/montana.png)

