import React from 'react';
import {render} from 'react-dom';
import {ControlLabel, FormControl, Panel} from 'react-bootstrap';
import {ListaDeElementos, UsoDoNome} from './listas'
import LabelGroup from './componentes/labelGroup'

export default class Nomes extends React.Component {    
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel header="Nome">            
            <LabelGroup controlId="Nome" className="col-sm-6" label="Nome">
                <FormControl componentClass="input" defaultValue={dados.Nome} required maxLength="30" />
            </LabelGroup>
            <LabelGroup controlId="Sobrenome" className="col-sm-6" label="Sobrenome">
                <FormControl componentClass="input" defaultValue={dados.Sobrenome} required maxLength="30" />
            </LabelGroup>
            <LabelGroup controlId="Titulo" className="col-sm-6" label="Título">
                <FormControl componentClass="input" defaultValue={dados.Titulo} required maxLength="15" />
            </LabelGroup>
            <LabelGroup controlId="Sufixo" className="col-sm-6" label="Sufixo">
                <FormControl componentClass="input" defaultValue={dados.Sufixo} required maxLength="15" />
            </LabelGroup>            
            <LabelGroup controlId="NomeCompleto" className="col-sm-6" label="Nome completo">
                <ControlLabel>-- preencha os campos --</ControlLabel>
            </LabelGroup>
            <LabelGroup controlId="UsoDoNome" className="col-sm-6" label="Uso">
                <FormControl componentClass="select" placeholder="select" defaultValue={dados.UsoDoNome}>
                    <ListaDeElementos lista={UsoDoNome} />
                </FormControl>
            </LabelGroup>
        </Panel>
    }
};