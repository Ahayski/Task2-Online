// Import React dari pustaka React
import React from 'react';

// Import Form dari react-bootstrap untuk membuat formulir
import { Form } from 'react-bootstrap';

// Definisikan tipe props untuk komponen Provinsi
interface ProvinsiProps {
    selectedProvince: string; // ID provinsi yang dipilih
    onSelectProvince: (provinceId: string) => void; // Fungsi yang akan dipanggil ketika provinsi dipilih
    provinces: any[]; // Daftar provinsi
}

// Deklarasi komponen Provinsi sebagai functional component dengan tipe props ProvinsiProps
const Provinsi: React.FC<ProvinsiProps> = ({ selectedProvince, onSelectProvince, provinces }) => {
    return (
        // Struktur tampilan komponen Provinsi
        <div>
            {/* Judul komponen */}
            <h2 className="mb-3">Pilih Provinsi</h2>

            {/* Form.Select dari react-bootstrap untuk membuat dropdown provinsi */}
            <Form.Select className="mb-3" style={{ width: '500px' }} value={selectedProvince} onChange={(e) => onSelectProvince(e.target.value)}>
                {/* Opsi default untuk memilih provinsi */}
                <option value="">Pilih Provinsi</option>

                {/* Mapping melalui daftar provinsi dan membuat opsi untuk setiap provinsi */}
                {provinces.map(province => (
                    <option key={province.id} value={province.id}>
                        {province.name}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

// Ekspor komponen Provinsi agar dapat digunakan di tempat lain
export default Provinsi;
