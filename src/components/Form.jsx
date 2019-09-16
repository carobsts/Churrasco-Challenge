import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker } from 'antd';


//Definición de los atributos del formulario
const CustomForm = (props) => {
    const {addReserve} = props;
    const { getFieldDecorator } = props.form;
    const  [date, setDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    

//Generador automático de valores únicos (id) para posibilitar borrado
    const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
      }

//Funcionalidad
    const handleSubmit = event => {
    //Eventos: reservas
    event.preventDefault();
    //Atributos válidos
    props.form.validateFields((err, values) => {
          if (!err) {
              //Valores contemplados
              const reserve = {...values, date, startTime, endTime, id:uuidv4()};
                console.log('Valores del formulario', reserve);
                addReserve(reserve);
                //Campos blancos
                props.form.resetFields();
                props.setDate.resetFields();
          }
        });
      };

//Constante: 'fecha'      
const onDateChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
};

//Constante: 'desde'
const onStartTimeChange = (time, timeString) => {
    console.log(time, timeString)
    setStartTime(timeString);
};

//Contante: 'hasta'
const onEndTimeChange = (time, timeString) => {
    console.log(time, timeString)
    setEndTime(timeString);
};

//Formato de fecha
const format = 'HH:mm';

//Funcionalidad
    return (
        <Form layout="inline" onSubmit={handleSubmit}>
    
            <Form.Item>
                {getFieldDecorator('name', {
                rules: [{ required: true, message: '*Requerido' }],
                })
                ( <Input placeholder='Nombre y Apellido' size='large' className='nombre-apellido'/> )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('calendary', {
                rules: [{ required: true, message: '*Requerido' }],
                })
                (<DatePicker className='fecha-style' onChange={onDateChange} size='large' placeholder='Seleccione el día'/>)}
            </Form.Item>
            
            <Form.Item>
                {getFieldDecorator('start-time', {
                rules: [{ required: true, message: '*Requerido' }],
                })
                (<TimePicker className='desde-style' onChange={onStartTimeChange} format={format} size='large' placeholder='Desde'/>)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('end-time', {
                rules: [{ required: true, message: '*Requerido' }],
                })
                (<TimePicker className='hasta-style' onChange={onEndTimeChange} format={format} size='large' placeholder='Hasta'/>)}
                
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" size='large' className='btn-guardar'>
                    Guardar
                </Button>
            </Form.Item>
        
        </Form>
    );
};


export default Form.create({ name: 'reservation_form' })(CustomForm)