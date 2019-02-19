import React, {Component} from 'react';
import './Watch.css';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

export default class Watch extends Component {


    render() {
        return (
            <div className="content">
                <Input/>
                <Button/>
            </div>

        );
    }
}