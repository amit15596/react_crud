import React from 'react';
import { Table } from 'antd';

function Tablecomponet(props) {
  return (
    <div>
      <Table
        dataSource={props.dataSource}
        columns={props.columns}
        pagination={props.pagination}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Tablecomponet;
