import React from "react";
import { Table } from "antd";
import Titlebar from "../layouts/Titlebar";
const Categeory = () =>{
    const dataSource = [
        {
          id: '1',
          name: 'Food',
          status: 'Active',
        },
        {
          id: '2',
          name: 'Cloth',
          status: 'Active',
        },
        {
            id: '3',
            name: 'Electronic',
            status: 'Active',
        },
    ];
      
    const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    ];
      
    return (
        <div>
            <Titlebar title="Category"></Titlebar>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default Categeory;
