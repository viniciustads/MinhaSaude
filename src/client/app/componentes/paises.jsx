import React from 'react';
import { Col, FormControl, FormGroup, ControlLabel, Radio, Panel } from 'react-bootstrap';
import LabelGroup from './labelGroup';
import jsonFile from '../../resources/paises.json'
import { ListaDeElementos, SituacaoFamiliar, ListaDeUFs, PluralidadeNascimentos, OrdemDeNascimento } from '../listas'

export default class Paises extends React.Component {

    constructor() {
        super();
        this.ChangerPais = this.ChangerPais.bind(this);
    }

    parsePais(paises) {
        return paises.map(function (el) { return { value: el.cod, label: el.pais } });
    }

    componentWillMount() {
       
        var listapaises = this.parsePais(jsonFile);

        this.setState({
            data: jsonFile,
            paisesAtuais: listapaises
        });
    }

    ChangerPais(e) {

        var listaDepaises = this.parsePais(this.state.data);

        this.setState({
            paisesAtuais: listaDepaises
        });
    }

    render() {
        return (
            <div>
                <LabelGroup label={this.props.labelPais} col={6} >
                    <FormControl componentClass="select" required onChange={this.ChangerPais}>
                        <ListaDeElementos lista={this.state.paisesAtuais} />
                    </FormControl>
                </LabelGroup>
            </div>
        )
    }
}