import React from 'react';
import { Form } from 'react-bootstrap';

interface ProvinsiProps {
    selectedProvince: string;
    onSelectProvince: (provinceId: string) => void;
    provinces: any[];
}

const Provinsi: React.FC<ProvinsiProps> = ({ selectedProvince, onSelectProvince, provinces }) => {
    return (
        <div>
            <h2 className="mb-3">Pilih Provinsi</h2>
            <Form.Select className="mb-3" style={{ width: '500px' }} value={selectedProvince} onChange={(e) => onSelectProvince(e.target.value)}>
                <option value="">Pilih Provinsi</option>
                {provinces.map(province => (
                    <option key={province.id} value={province.id}>
                        {province.name}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default Provinsi;
