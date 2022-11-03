import React from 'react';
import { createPortal } from 'react-dom';

const Portal = () => {
    return createPortal(
        <div>
            <h1>Hola mundo desde mi portal</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error delectus soluta voluptates labore reiciendis accusantium dolorem aperiam qui sed! Quas?</p>
        </div>
        , 
        document.getElementById('portal') 
    )
}
export default Portal;
