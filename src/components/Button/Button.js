import React from 'react';
import './Button.css';

const Button = function (props) {
    return(
        <div className="wrapper">
            <button disabled={props.addOnClickDisabled()} onClick={props.onClickAdd} className="wrapper__button" type="button">Add</button>
        </div>
    )

};

export default Button;