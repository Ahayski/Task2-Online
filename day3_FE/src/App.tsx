import React from 'react';
import WilayahList from './components/WilayahList'; // Sesuaikan dengan path file komponen
import "./dist/css/main.css";

const App: React.FC = () => {
  return (
    <div className="d-grid justify-content-center" id="bg">
      <div className='custom-shadow ' id="utama" style={{ width: '500px' }}>
        <h1 className="text-center mt-5 mb-4">Wilayah Indonesia</h1>
        <WilayahList />
      </div>
    </div>
  );
};

export default App;
