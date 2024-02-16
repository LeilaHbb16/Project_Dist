import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { fetchHouseEstimations } from './api';

const HousingTable = () => {
  const [houseEstimations, setHouseEstimations] = useState(null);

  useEffect(() => {
    
    fetchHouseEstimations()
      .then(estimations => {
        setHouseEstimations(estimations);
      });
  }, []);

  // Définir les colonnes du tableau
  const columns = [
    {
      title: 'indus',
      dataIndex: 'indus',
      key: 'indus',
    },
    // Ajoutez d'autres colonnes selon vos besoins
    {
      title: 'zn',
      dataIndex: 'zn',
      key: 'zn',
    },
    {
      title: 'target',
      dataIndex: 'target',
      key: 'target',
    },
  ];

  return (
    <Table dataSource={houseEstimations} columns={columns} />
  );
};

export default HousingTable;
