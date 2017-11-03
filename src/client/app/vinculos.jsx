import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Checkbox, Radio, FormGroup, FormControl, Panel, Form} from 'react-bootstrap';
import TextBox from './componentes/textbox';
import LabelGroup from './componentes/labelGroup';
import IndicadorDeAcuracia from './indicadorDeAcuracia';
import { Relacionamento, ListaDeElementos } from './listas'

export default class Vinculos extends React.Component{
    render(){
        return  (
            <Form horizontal> 
                <div>
                    <Panel header="Vinculos">
                        <TextBox  controlId="Identificador" label="Identificador" col={12}/>
                        <LabelGroup label="Ordem de nascimento" col={12}>
                            <FormControl componentClass="select" required>
                                <ListaDeElementos lista={ Relacionamento } />
                            </FormControl>                            
                        </LabelGroup>
                        <TextBox  controlId="DataInicio" label="Data inicial" type="date" col={12}/>
                        <TextBox  controlId="DataFim" label="Data final" type="date" col={12}/>
                    </Panel>
               
                </div>
            </Form>
        )
    }
}
