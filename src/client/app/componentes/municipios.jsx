import React from 'react';
import { Col, FormControl, FormGroup, ControlLabel, Radio, Panel } from 'react-bootstrap';
import LabelGroup from './labelGroup';
import jsonFile from '../../resources/municipios.json'
import { ListaDeElementos, SituacaoFamiliar, ListaDeUFs, PluralidadeNascimentos, OrdemDeNascimento } from '../listas'

export default class Municipios extends React.Component {

    constructor() {
        super();
        this.changeEstado = this.changeEstado.bind(this);
    }

    obtenhaMunicipios(data, uf) {
        return data.filter(function (el) { return el.uf == uf; })
    }

    parseMunicipios(municipios) {
        return municipios.map(function (el) { return { value: el.codigo, label: el.municipio } });
    }

    componentWillMount() {

        var municipios = this.obtenhaMunicipios(jsonFile, "AC");

        var listaMunicipios = this.parseMunicipios(municipios);

        this.setState({
            data: jsonFile,
            estadoAtual: municipios[0].estado,
            municipiosAtuais: listaMunicipios
        });
    }

    changeEstado(e) {

        var municipios = this.obtenhaMunicipios(this.state.data, e.target.value);

        var listaDeMunicipios = this.parseMunicipios(municipios);

        this.setState({
            estadoAtual: municipios[0].estado,
            municipiosAtuais: listaDeMunicipios
        });
    }


    render() {
        return (
            <div>
                <LabelGroup label={this.props.labelEstado} col={3} >
                    <FormControl componentClass="select" required onChange={this.changeEstado}>
                        <ListaDeElementos lista={ListaDeUFs} />
                    </FormControl>
                </LabelGroup>
                <LabelGroup label={this.state.estadoAtual} col={3} >
                    <FormControl componentClass="select" required>
                        <ListaDeElementos lista={this.state.municipiosAtuais} />
                    </FormControl>
                </LabelGroup>
            </div>
        )
    }
}