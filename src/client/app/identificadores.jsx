import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Col, ControlLabel, FormControl, FormGroup, Panel} from 'react-bootstrap';
import { ListaDeUFs } from './listas'

export class DadosGeraisDoIdentificador extends React.Component {
    render() {
        return <Panel>
            <FormGroup controlId="TipoDoIdentificador" className="col-sm-6">      
                <Col sm={12}>
                <label>Tipo do identificador</label>
                </Col>
                <Col sm={12}>
                <FormControl componentClass="select" placeholder="select">
                    <option value="01">Único dentro da organização</option>
                    <option value="02">Número do prontuário</option>
                    <option value="21">Radiologia</option>
                    <option value="22">Patologia</option>
                    <option value="23">Farmácia</option>
                </FormControl>
                </Col>
            </FormGroup>
            <FormGroup controlId="AreaGeografica" className="col-sm-6">
            <Col sm={12}>
                <ControlLabel>Área geográfica</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="select" placeholder="select">
                <option value="1">Local</option>
                <option value="2">Área/região/distrito</option>
                <option value="3">Estado/província/território</option>
                <option value="4">Nacional</option>
                </FormControl>
            </Col>
            </FormGroup>
            <FormGroup controlId="Designacao" className="col-sm-6">
            <Col sm={12}>
                <ControlLabel>Designação</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" maxLength="25" />
            </Col>
            </FormGroup>
            <FormGroup controlId="DataIdentificador" className="col-sm-6">
            <Col sm={12}>
                <ControlLabel>Data</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" type="date" />
            </Col>
            </FormGroup>
            <FormGroup controlId="Emissor" className="col-sm-6">
            <Col sm={12}>
                <ControlLabel>Emissor</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" maxLength="25" />
            </Col>
            </FormGroup>
        </Panel>
    }
};
  
export class Certidao extends React.Component {
    render() {
    return <Panel header="Certidão">    
        <FormGroup controlId="TipoDeCertidao" className="col-sm-12">      
            <Col sm={12}>
                <label>Tipo de certidão</label>
            </Col>
            <Col sm={12}>
            <FormControl componentClass="select" placeholder="select">
                <option value="nascimento">Nascimento</option>
                <option value="casamento">Casamento</option>
                <option value="divorcio">Divórcio</option>
            </FormControl>
            </Col>
        </FormGroup>
        <FormGroup controlId="NomeDoCartorio" className="col-sm-12">
            <Col sm={12}>
                <ControlLabel>Nome do Cartório</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" maxLength="25" />
            </Col>
        </FormGroup>
        <FormGroup controlId="LivroDoCartorio" className="col-sm-4">
            <Col sm={12}>
                <ControlLabel>Livro</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" type="number" />
            </Col>
        </FormGroup>
        <FormGroup controlId="FolhaDoCartorio" className="col-sm-4">
            <Col sm={12}>
                <ControlLabel>Folha</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" type="number" />
            </Col>
        </FormGroup>
        <FormGroup controlId="TermoDoCartorio" className="col-sm-4">
            <Col sm={12}>
                <ControlLabel>Termo</ControlLabel>      
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" type="number" />
            </Col>
        </FormGroup>
        </Panel>
    }
};

export class CTPS extends React.Component {
    render() {
    return <Panel header="Carteira de trabalho">        
        <FormGroup controlId="SerieCTPS" className="col-sm-6">      
            <Col sm={12}>
                <label>Série</label>
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" maxLength="25" />
            </Col>
        </FormGroup>
        <FormGroup controlId="EstadoCTPS" className="col-sm-6">      
            <Col sm={12}>
                <label>Estado</label>
            </Col>
            <Col sm={12}>
                <Select name="EstadoCTPS" id="EstadoCTPS" options={ListaDeUFs} />
            </Col>
        </FormGroup>
        </Panel>
    }
};

export class TituloDeEleitor extends React.Component {
    render() {
    return <Panel header="Título de Eleitor">        
            <Col sm={12}>
            </Col>
            <Col sm={12}>
                <FormControl componentClass="input" maxLength="25" />
            </Col>
        </FormGroup>
            <Col sm={12}>
            </Col>
            <Col sm={12}>
            </Col>
        </FormGroup>
        </Panel>
    }
};