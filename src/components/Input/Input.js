import React from 'react';
import "./Input.css";

const Input = function (props) {
    return(
        <div className="block">
            <input className="block__input" placeholder="Input a movie" type="text"/>
        </div>
    )

};

export default Input;