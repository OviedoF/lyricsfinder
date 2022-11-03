import React from 'react';
import './Message.scss';

const Message = (props) => {
    return (
        <div className="audun_warn">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <p>Ha ocurrido un error!</p>
            <p>Código del error: {props.codigo}</p>
        </div>
    )
};

export default Message;