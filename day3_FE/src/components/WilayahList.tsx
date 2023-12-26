import React, { useEffect, useState } from 'react';
import Provinsi from './Provinsi';
import Kabupaten from './Kabupaten';
import Kecamatan from './Kecamatan';

interface WilayahListProps { }

const WilayahList: React.FC<WilayahListProps> = () => {
    const [provinces, setProvinces] = useState<any[]>([]);
    const [regencies, setRegencies] = useState<any[]>([]);
    const [districts, setDistricts] = useState<any[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedRegency, setSelectedRegency] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');
    const [selectedData, setSelectedData] = useState<any | null>(null);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
            .then(response => response.json())
            .then(data => setProvinces(data));
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    useEffect(() => {
        // Fetch regencies data when selectedProvince changes
        if (selectedProvince) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
                .then(response => response.json())
                .then(data => setRegencies(data));
        } else {
            // Reset regencies when no province is selected
            setRegencies([]);
        }
    }, [selectedProvince]);

    useEffect(() => {
        // Fetch districts data when selectedRegency changes
        if (selectedRegency) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency}.json`)
                .then(response => response.json())
                .then(data => setDistricts(data));
        } else {
            // Reset districts when no regency is selected
            setDistricts([]);
        }
    }, [selectedRegency]);

    const handleProvinceChange = (selectedProvince: string) => {
        setSelectedProvince(selectedProvince);
        setSelectedRegency('');
        setSelectedDistrict('');
        setSelectedData(null); // Reset selected data when province changes
    };

    const handleRegencyChange = (selectedRegency: string) => {
        setSelectedRegency(selectedRegency);
        setSelectedDistrict('');
        setSelectedData(null); // Reset selected data when regency changes
    };

    const handleDistrictChange = (selectedDistrict: string) => {
        setSelectedDistrict(selectedDistrict);
        setSelectedData(null); // Reset selected data when district changes
    };

    useEffect(() => {
        // Set selected data when all regions are selected
        if (selectedProvince && selectedRegency && selectedDistrict) {
            const selectedProvinceData = provinces.find((p: any) => p.id === selectedProvince);
            const selectedRegencyData = regencies.find((r: any) => r.id === selectedRegency);
            const selectedDistrictData = districts.find((d: any) => d.id === selectedDistrict);

            setSelectedData({
                province: selectedProvinceData,
                regency: selectedRegencyData,
                district: selectedDistrictData,
            });
        }
    }, [selectedProvince, selectedRegency, selectedDistrict, provinces, regencies, districts]);

    return (
        <div>
            <Provinsi selectedProvince={selectedProvince} onSelectProvince={handleProvinceChange} provinces={provinces} />

            {selectedProvince && <Kabupaten selectedRegency={selectedRegency} onSelectRegency={handleRegencyChange} regencies={regencies} />}

            {selectedRegency && <Kecamatan selectedDistrict={selectedDistrict} onSelectDistrict={handleDistrictChange} districts={districts} />}

            {selectedData && (
                <div>
                    <h2>Selected Data</h2>
                    <pre>{JSON.stringify(selectedData, null, 2)}</pre>
                    <h3>Kesimpulan</h3>
                    <p>
                        Data yang dipilih: <br />
                        {selectedData.province.name}, <br />
                        {selectedData.regency.name},<br /> {selectedData.district.name}
                    </p>
                </div>
            )}
        </div>
    );
};

export default WilayahList;
