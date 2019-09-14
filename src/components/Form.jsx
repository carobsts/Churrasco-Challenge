import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker } from 'antd';


//Definición de los atributos del formulario
const CustomForm = (props) => {
    const {addReserve} = props;
    const { getFieldDecorator } = props.form;
    const  [date, setDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    

//Generador automático de valores únicos
    const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
      }

//Funcionalidad
    const handleSubmit = event => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
          if (!err) {
              const reserve = {...values, date, startTime, endTime, id:uuidv4()};
                console.log('Valores del formulario', reserve);
                addReserve(reserve);
                props.form.resetFields();
                //setDate(null);
                //setStartTime(null);
                //setEndTime(null);
          }
        });
      };

const onDateChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
};

const onStartTimeChange = (time, timeString) => {
    console.log(time, timeString)
    setStartTime(timeString);
};

const onEndTimeChange = (time, timeString) => {
    console.log(time, timeString)
    setEndTime(timeString);
};

const format = 'HH:mm';

    return (
        <Form layout="inline" onSubmit={handleSubmit}>
            
            <Form.Item>
                {getFieldDecorator('name', {
                rules: [{ required: true, message: '¡Por favor, ingrese su nombre!' }],
                })
                ( <Input placeholder='Nombre y Apellido' size='large'/> )}
            </Form.Item>

            <Form.Item>
                <DatePicker onChange={onDateChange} size='large' placeholder='Seleccione fecha'/>
            </Form.Item>
            
            <Form.Item>
                <TimePicker onChange={onStartTimeChange} format={format} size='large' placeholder='Desde'/>
            </Form.Item>

            <Form.Item>
                <TimePicker onChange={onEndTimeChange} format={format} size='large' placeholder='Hasta'/>
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" size='large'>
                    Guardar
                </Button>
            </Form.Item>
        
        </Form>
    );
};


export default Form.create({ name: 'reservation_form' })(CustomForm)