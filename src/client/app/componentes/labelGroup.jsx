import React from 'react';
import { Col, FormGroup, ControlLabel} from 'react-bootstrap';

export class LabelGroup extends React.Component{
    render(){
        return  (
            <FormGroup controlId={this.props.controlId} className={this.props.className || "col-sm-12"}>
                <Col sm={12}>
                    <ControlLabel>{this.props.label}</ControlLabel>      
                </Col>
                <Col sm={12}>
                    {this.props.children}
                </Col>
            </FormGroup>
        )
    }
}