import React from 'react';
import { Table, Icon, Popconfirm } from 'antd';

//Delimitación de la BD
const CustomTable = (props) => {
    const {data, deleteReserve} = props;

    //Columnas:
    const columns = [
      {
      //Columna 'nombre y apellido'
        title: 'Nombre y Apellido',
        dataIndex: 'name',
      },
      {
      //Columna 'desde'
        title: 'Desde',
        dataIndex: 'startTime',
      },
      {
      //Columna 'hasta'
        title: 'Hasta',
        dataIndex: 'endTime',
      },
      {
      //Columna 'acción'
        title: 'Acción',
        //Botón 'borrar'
        render: (item) => (
          <Popconfirm
            title="¿Está seguro de eliminar su reserva?"
            onConfirm={() => deleteReserve(item)}
            okText="Sí"
            cancelText="No">
              <Icon type='delete'/>
          </Popconfirm>
        )
      }
    ];
    return (
      //Componente: 'tabla'
      <Table columns={columns} dataSource={data}/>
    );
};

export default CustomTable;