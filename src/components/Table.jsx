import React from 'react';
import { Table, Icon, Popconfirm } from 'antd';

const CustomTable = (props) => {
    const {data, deleteReserve} = props;

    const columns = [
      {
        title: 'Nombre',
        dataIndex: 'name',
      },
      {
        title: 'Desde',
        dataIndex: 'startTime',
      },
      {
        title: 'Hasta',
        dataIndex: 'endTime',
      },
      {
        title: 'Borrar',
        render: (item) => (
          <Popconfirm
            title="¿Está seguro de eliminar su reserva?"
            onConfirm={() => deleteReserve(item)}
            okText="Sí"
            cancelText="No">
              <Icon type='delete' />
          </Popconfirm>
        )
      }
    ];
    return (
      <Table columns={columns} dataSource={data}/>
    );
};

export default CustomTable;
