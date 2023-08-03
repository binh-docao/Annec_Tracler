import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Targets = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-black" style={{ height: '100vh' }}>
      <div className="btn-group-vertical text-center" role="group" aria-label="Vertical button group" style={{ height: '30vh', width: '30vh' }}>
        <Link to="/Davis" className="btn btn-danger btn-lg mb-2"> {/* Add the btn-lg class here */}
          Davis
        </Link>
        <hr className="text-white" style={{ margin: '0', width: '70%', backgroundColor: 'white' }} />
        <Link to="/Maow" className="btn btn-danger btn-lg mb-2"> {/* Add the btn-lg class here */}
          Maow
        </Link>
        <hr className="text-white" style={{ margin: '0', width: '70%', backgroundColor: 'white' }} />
        <Link to="/Nico" className="btn btn-danger btn-lg mb-2"> {/* Add the btn-lg class here */}
          Nico
        </Link>
        <hr className="text-white" style={{ margin: '0', width: '70%', backgroundColor: 'white' }} />
        <Link to="/Binh" className="btn btn-danger btn-lg"> {/* Add the btn-lg class here */}
          Binh
        </Link>
      </div>
    </div>
  );
};

export default Targets;
