import React from 'react';
import Timeline from 'react-visjs-timeline';
import moment from 'moment';

//Opciones timeline
const options = {
    orientation: {
      axis: "top",
      item: "top"
    },
    zoomMax: 87600900, 
    zoomMin: 10000000
    };

//Contenido    
const CustomTimeline = (props) => {
    const {data} = props;
    
    return (
    <>
        <Timeline options={options} items={data.map((item) => { //Atributos del timeline
            return {
                content: item.name,
                start: moment(item.date + ' ' + item.startTime, 'YYYY-MM-DD HH:mm'),
                end: moment(item.date + ' ' + item.endTime, 'YYYY-MM-DD HH:mm')
            }
        })}/>
    
    </>
    )
};


export default CustomTimeline;