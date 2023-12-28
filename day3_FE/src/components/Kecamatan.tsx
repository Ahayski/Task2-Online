// Import React dari pustaka React
import React from 'react';

// Import Form dari react-bootstrap untuk membuat formulir
import { Form } from 'react-bootstrap';

// Definisikan tipe props untuk komponen Kecamatan
interface KecamatanProps {
    selectedDistrict: string; // ID kecamatan yang dipilih
    onSelectDistrict: (districtId: string) => void; // Fungsi yang akan dipanggil ketika kecamatan dipilih
    districts: any[]; // Daftar kecamatan
}

// Deklarasi komponen Kecamatan sebagai functional component dengan tipe props KecamatanProps
const Kecamatan: React.FC<KecamatanProps> = ({ selectedDistrict, onSelectDistrict, districts }) => {
    return (
        <>
            {/* Judul komponen */}
            <h2 className="mb-3">Pilih Kecamatan</h2>

            {/* Form.Select dari react-bootstrap untuk membuat dropdown kecamatan */}
            <Form.Select className="mb-3" style={{ width: '500px' }} value={selectedDistrict} onChange={(e) => onSelectDistrict(e.target.value)}>
                {/* Opsi default untuk memilih kecamatan */}
                <option value="">Pilih Kecamatan</option>

                {/* Mapping melalui daftar kecamatan dan membuat opsi untuk setiap kecamatan */}
                {districts.map(district => (
                    <option key={district.id} value={district.id}>
                        {district.name}
                    </option>
                ))}
            </Form.Select>
        </>
    );
};

// Ekspor komponen Kecamatan agar dapat digunakan di tempat lain
export default Kecamatan;
