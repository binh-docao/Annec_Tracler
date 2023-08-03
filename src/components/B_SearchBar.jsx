import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleMaps from '../components/GoogleMaps';

const locations = [
  { name: 'Error: Location Not Found', latitude: 43.04067646269212, longitude: -141.93194894638103 },
];

const B_SearchBar = () => {
  const [progress, setProgress] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [targetLocation, setTargetLocation] = useState({ name: '', latitude: 0, longitude: 0 });

  useEffect(() => {
    // Randomly select a location from the locations array
    const randomIndex = Math.floor(Math.random() * locations.length);
    setTargetLocation(locations[randomIndex]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10; // Adjust the increment as desired
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 500); // Adjust the interval (in milliseconds) to control the speed of progress

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Progress has completed, show the desired component
      setShowComponent(true);
    }
  }, [progress]);

  return (
    <div className="bg-black">
      <div className="d-flex justify-content-center align-items-center bg-danger text-black text-bold" style={{ height: '7vh' }}>
        <h1>Target: Binh Do-Cao</h1>
      </div>
      <div className="progress" style={{ height: '5vh' }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progress}%`, height: '5vh' }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress === 100 ? "Completed" : "Locating..."} {/* Display "Completed" when progress is 100, otherwise show "Locating..." */}
        </div>
      </div>
      {showComponent ? (
        <center>
        <h3 className="text-center mt-4 d-inline-block" style={{ backgroundColor: '#dc3545', padding: '10px' }}>
          Location: {targetLocation.name}
        </h3>
        </center>
      ) : null}
      {showComponent ? (
        <center>
          <img src={require('./binh.jpg')} alt="Location Image" style={{ marginLeft: '10px', width: '300px', height: '400px' }} />
        </center>
      ) : null}
      {showComponent ? (
        <GoogleMaps className="bg-secondary" latitude={targetLocation.latitude} longitude={targetLocation.longitude} />
      ) : null}
    </div>
  );
};

export default B_SearchBar;
