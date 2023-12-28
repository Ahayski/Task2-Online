// Import React dari pustaka React
import React from 'react';

// Import Form dari react-bootstrap untuk membuat formulir
import { Form } from 'react-bootstrap';

// Definisikan tipe props untuk komponen Kabupaten
interface KabupatenProps {
    selectedRegency: string; // ID kabupaten/kota yang dipilih
    onSelectRegency: (regencyId: string) => void; // Fungsi yang akan dipanggil ketika kabupaten/kota dipilih
    regencies: any[]; // Daftar kabupaten/kota
}

// Deklarasi komponen Kabupaten sebagai functional component dengan tipe props KabupatenProps
const Kabupaten: React.FC<KabupatenProps> = ({ selectedRegency, onSelectRegency, regencies }) => {
    return (
        <>
            {/* Judul komponen */}
            <h2 className="mb-3">Pilih Kab/Kota</h2>

            {/* Form.Select dari react-bootstrap untuk membuat dropdown kabupaten/kota */}
            <Form.Select className="mb-3" style={{ width: '500px' }} value={selectedRegency} onChange={(e) => onSelectRegency(e.target.value)}>
                {/* Opsi default untuk memilih kabupaten/kota */}
                <option value="">Pilih Kab/Kota</option>

                {/* Mapping melalui daftar kabupaten/kota dan membuat opsi untuk setiap kabupaten/kota */}
                {regencies.map(regency => (
                    <option key={regency.id} value={regency.id}>
                        {regency.name}
                    </option>
                ))}
            </Form.Select>
        </>
    );
};

// Ekspor komponen Kabupaten agar dapat digunakan di tempat lain
export default Kabupaten;
