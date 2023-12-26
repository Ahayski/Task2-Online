import React from 'react';
import { Form } from 'react-bootstrap';

interface KabupatenProps {
    selectedRegency: string;
    onSelectRegency: (regencyId: string) => void;
    regencies: any[];
}

const Kabupaten: React.FC<KabupatenProps> = ({ selectedRegency, onSelectRegency, regencies }) => {
    return (
        <>
            <h2 className="mb-3">Pilih Kab/Kota</h2>
            <Form.Select className="mb-3" style={{ width: '500px' }} value={selectedRegency} onChange={(e) => onSelectRegency(e.target.value)}>
                <option value="">Pilih Kab/Kota</option>
                {regencies.map(regency => (
                    <option key={regency.id} value={regency.id}>
                        {regency.name}
                    </option>
                ))}
            </Form.Select>
        </>
    );
};

export default Kabupaten;
