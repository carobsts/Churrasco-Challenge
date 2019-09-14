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
    setData([...data, reserve]);
    message.success('Su reservación fue realizada con éxito.');
};

//Eliminación de reservas
const deleteReserve = (itemDelete) => {
    console.log('delete', itemDelete) 
    setData([...data.splice(data.findIndex(item => item.id === itemDelete.id), 0)]);
    message.info('Su reservación ha sido cancelada.')
};
    
    return (

		<section className='page-complete'>
			
			<div className='reserves'>
				<Row>
					<Col span={20} offset={2}>
						<h1>RESERVAR</h1>
						<div id='formulary'>
							<Form addReserve={addReserve}/>
						</div>
					</Col>
				</Row>
			</div>

          	<div id='timeline'>
				<Row>
					<Col span={20} offset={2}>
						<Timeline data={data}/>
					</Col>
				</Row>
			</div>

			<div id='table'>
				<Row>
					<Col span={20} offset={2}>
						<Table data={data} deleteReserve={deleteReserve}/>
					</Col>
				</Row>
			</div>
		
		</section>
    );
};

export default Page;