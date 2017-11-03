import React from 'react';
import { Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import LabelGroup from './labelGroup';


export default class TextBox extends React.Component{
    render(){
        return  (
           <LabelGroup controlId={this.props.controlId} className={this.props.className | "col-sm-12"} label={this.props.label} col={this.props.col}>
             <FormControl componentClass={"input"} maxLength={this.props.maxLength | ""} type={this.props.type || "text"} required={this.props.required | "false"}/>
           </LabelGroup>           
        )
    }
}