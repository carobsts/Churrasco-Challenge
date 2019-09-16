import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import Timeline from './Timeline';
import { message } from 'antd';
import { Row, Col } from 'antd';
import '../styles/page.css';


//Delimitación funcionalidades
const Page = () => {
    const [data, setData] = useState([]);
   
//Realización de reservas	
const addReserve = (reserve) => {
	//add:
	setData([...data, reserve]);
	//Alerta
    message.success('Su reservación fue realizada con éxito.');
};

//Eliminación de reservas
const deleteReserve = (itemDelete) => {
	console.log('delete', itemDelete)
	//Búsqueda de id único 
	data.splice(data.findIndex(item => item.id === itemDelete.id), 1)
	setData([...data]);
	//Alerta
    message.info('Su reservación ha sido cancelada.')
};
    
    return (

		<section className='page-complete'>
			
			<div className='reserves'>
				<Row>
					<Col span={20} offset={2}>
						<h1 id='reserve-font'>RESERVAR</h1>
						<div id='formulary'>
							<Form className='formulary-add' addReserve={addReserve}/>
						</div>
					</Col>
				</Row>
			</div>

          	<div>
				<Row>
					<Col span={20} offset={2}>
						<h2 id='agenda-reservas'>Agenda de reservas</h2>
						<div className='timeline'>
							<Timeline className='timeline-style' data={data}/>
						</div>
					</Col>
				</Row>
			</div>

			<div className='table'>
				<Row>
					<Col span={20} offset={2}>
						<Table className='table-style' data={data} deleteReserve={deleteReserve}/>
					</Col>
				</Row>
			</div>
		
		</section>
    );
};

export default Page;