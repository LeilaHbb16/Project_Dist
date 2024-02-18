import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { fetchHouseEstimations } from './api.js';

const HousingTable = () => {
  const [loading,setLoading]=useState(true)
  const [houseEstimations, setHouseEstimations] = useState(null);

  useEffect(() => {
    fetchHouseEstimations()
      .then(estimations => {
        console.log(estimations); 
        setHouseEstimations(estimations);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des estimations:', error.message);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: 'Criminalité',
      dataIndex: 'crim',
      key: 'CRIM',
      sorter: (a, b) => a.target - b.target,
    },

    {
      title: 'Terrains résidentiels',
      dataIndex: 'zn',
      key: 'zn',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Entreprises non commerciale',
      dataIndex: 'indus',
      key: 'INDUS',
      width: 30,
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Proximité à la rivière Charles',
      dataIndex: 'chas',
      key: 'CHAS',
      render: (value) => value ? 'Oui' : 'Non',
    },
    {
      title: 'Concentration d’oxyde nitrique',
      dataIndex: 'nox',
      key: 'NOX',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Nombre moyen de pièces',
      dataIndex: 'rm',
      key: 'RM',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Maisons anciennes',
      dataIndex: 'age',
      key: 'AGE',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Distance aux centres d’emploi',
      dataIndex: 'dis',
      key: 'DIS',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Accessibilité aux autoroutes',
      dataIndex: 'rad',
      key: 'RAD',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Taux d’imposition foncière',
      dataIndex: 'tax',
      key: 'TAX',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Ratio élèves/professeur',
      dataIndex: 'ptratio',
      key: 'PTRATIO',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Personnes de couleur',
      dataIndex: 'b',
      key: 'B',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Population de classe inférieure',
      dataIndex: 'lstat',
      key: 'LSTAT',
      sorter: (a, b) => a.target - b.target,
    },
    {
      title: 'Prix',
      dataIndex: 'target',
      key: 'target',
      sorter: (a, b) => a.target - b.target,
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '20px', overflow: 'auto' }}>

      <h1>PrixImmo Boston </h1>

      <Table dataSource={houseEstimations} columns={columns} loading={loading} />
      </div>
    </div>
  );
};

export default HousingTable;
