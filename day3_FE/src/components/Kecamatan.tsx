import React from 'react';
import { Form } from 'react-bootstrap';

interface KecamatanProps {
    selectedDistrict: string;
    onSelectDistrict: (districtId: string) => void;
    districts: any[];
}

const Kecamatan: React.FC<KecamatanProps> = ({ selectedDistrict, onSelectDistrict, districts }) => {
    return (
        <>
            <h2 className="mb-3">Pilih Kecamatan</h2>
            <Form.Select className="mb-3" style={{ width: '500px' }} value={selectedDistrict} onChange={(e) => onSelectDistrict(e.target.value)}>
                <option value="">Pilih Kecamatan</option>
                {districts.map(district => (
                    <option key={district.id} value={district.id}>
                        {district.name}
                    </option>
                ))}
            </Form.Select>
        </>
    );
};

export default Kecamatan;
