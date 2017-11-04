import React from 'react';
import { Col, FormGroup, ControlLabel, Checkbox} from 'react-bootstrap';

export default class CheckboxGroup extends React.Component{
    constructor(){
        super();
    }

    componentWillMount() {
        this.selectedCheckboxes = new Set();
    }

    createCheckbox(item){
        return <Checkbox key={item.value}>{item.label}</Checkbox>
    }

    createCheckboxes() 
    {
        return this.props.itens.map(this.createCheckbox);
    }       

    render(){
        return  (
           this.createCheckboxes()
        )
    }
}