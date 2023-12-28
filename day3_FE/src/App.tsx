// Import React dari pustaka React
import React from 'react';

// Import komponen WilayahList dari file './components/WilayahList'
import WilayahList from './components/WilayahList'; // Sesuaikan dengan path file komponen

// Import file CSS yang digunakan untuk styling (Bootstrap CSS)
import "./dist/css/main.css";

// Deklarasi komponen utama App
const App: React.FC = () => {
  // Fungsi komponen utama
  return (
    // Struktur tampilan menggunakan Bootstrap CSS
    <div className="d-grid justify-content-center" id="bg">
      <div className='custom-shadow ' id="utama" style={{ width: '500px' }}>
        <h1 className="text-center mt-5 mb-4">Wilayah Indonesia</h1>

        {/* Memanggil komponen WilayahList */}
        <WilayahList />
      </div>
    </div>
  );
};

// Ekspor komponen App agar dapat digunakan di tempat lain
export default App;
