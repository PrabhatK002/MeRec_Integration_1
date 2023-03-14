import React from 'react';
import ReactDOM from 'react-dom/client';
import { data } from "./data";
import { Center } from './Center';
import { Table } from 'antd';

const Paccess = () => {
  return (
      <>
       <Center V H>
        <Table data={data} />
       </Center>
      
      </>
  );
};


export default Paccess;