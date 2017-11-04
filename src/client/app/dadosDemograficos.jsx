import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Checkbox, Radio, FormGroup, FormControl, Panel, Form} from 'react-bootstrap';
import TextBox from './componentes/textbox';
import LabelGroup from './componentes/labelGroup';
import IndicadorDeAcuracia from './indicadorDeAcuracia';
import { ListaDeElementos, SituacaoFamiliar, ListaDeUFs, PluralidadeNascimentos, OrdemDeNascimento } from './listas'
import jsonFile from '../resources/municipios.json'

export default class DadosDemograficos extends React.Component{

    constructor(){
        super();
        this.changeEstado = this.changeEstado.bind(this);
    }

    obtenhaMunicipios(data, uf){
        return data.filter(function(el){ return el.uf == uf;})
    }

    parseMunicipios(municipios){
        return municipios.map(function(el){ return {value: el.codigo, label: el.municipio}});
    }

    componentWillMount() {       

        var municipios = this.obtenhaMunicipios(jsonFile,"AC");       

        var listaMunicipios = this.parseMunicipios(municipios);

        this.setState({ 
            data: jsonFile,
            estadoAtual: municipios[0].estado,
            municipiosAtuais: listaMunicipios
         });
    }

    changeEstado(e){        
        
        var municipios = this.obtenhaMunicipios(this.state.data, e.target.value);

        var listaDeMunicipios = this.parseMunicipios(municipios);

        this.setState({ 
            estadoAtual: municipios[0].estado,
            municipiosAtuais: listaDeMunicipios            
         });
    }

    render(){       
        
        return  (
            <Form horizontal> 
                <div>
                <h3>Dados demográficos</h3>
                <Panel>    
                    
                    <Panel>                               
                        <TextBox  controlId="NomeDaMae" label="Nome da mãe"/>
                        <TextBox  controlId="NomeDoPai" label="Nome do pai"/>
                        <LabelGroup controlId="situacaoFamiliar" label="Situação familiar (convive com)">
                            <Checkbox >companheiro(a) e filho(s)</Checkbox>
                            <Checkbox >companheiro(a) com laços conjugais e sem filhos</Checkbox>
                            <Checkbox >companheiro(a), com filho(s) e/ou outro(s) familiar(es)</Checkbox>
                            <Checkbox >familiar(es) sem companheiro(a)</Checkbox>
                            <Checkbox >outra(s) pessoa(s) sem laços consaguíneos e/ou laços conjugais</Checkbox>
                            <Checkbox >vive só</Checkbox>                
                        </LabelGroup>
                    </Panel>                
                    <Panel>
                        <TextBox  controlId="DataDeNascimento" label="Data de nascimento" type="date" col={6}/>
                        <IndicadorDeAcuracia></IndicadorDeAcuracia>
                        <LabelGroup controlId="Seguimento" label="Seguimento">
                            <Checkbox >Data precisa de seguimento</Checkbox> 
                        </LabelGroup>
                    </Panel>
                    <Panel>
                        <TextBox  controlId="Obito" label="Óbito" type="date" col={6}/>
                        <IndicadorDeAcuracia></IndicadorDeAcuracia>
                        <LabelGroup controlId="fonteDeNotificacao" label="Fonte de notificação">
                            <Radio name="fonteNotificacao" inline>
                                Cartório
                            </Radio>
                            <Radio name="fonteNotificacao" inline>
                                Prestador de assistência à saúde
                            </Radio>
                            <Radio name="fonteNotificacao" inline>
                                Parente
                            </Radio>
                            <Radio name="fonteNotificacao" inline>
                                Outro
                            </Radio>
                            <Radio name="fonteNotificacao" inline>
                                Desconhecido
                            </Radio>
                        </LabelGroup>
                    </Panel>
                    <LabelGroup controlId="RacaCor" label="Raça/Cor">
                        <Checkbox>branca</Checkbox>
                        <Checkbox>preta</Checkbox>
                        <Checkbox>parda</Checkbox>
                        <Checkbox>amarela</Checkbox>
                        <Checkbox>indígena</Checkbox>
                    </LabelGroup>
                </Panel>
                <Panel>
                    <LabelGroup controlId="sexo" label="Sexo">
                        <Radio name="sexo">masculina (M)</Radio>
                        <Radio name="sexo">feminina (F)</Radio>
                        <Radio name="sexo">intersexo ou indeterminado (I)</Radio>
                        <Radio name="sexo">não declarado (U)</Radio>
                    </LabelGroup>
                </Panel>
                <Panel>
                    <LabelGroup label="Situação familiar (convive com)" col={6}>
                        <FormControl componentClass="select" required>
                                <ListaDeElementos lista={ SituacaoFamiliar } />
                            </FormControl>
                    </LabelGroup>
                </Panel>
                <Panel>
                    <LabelGroup label="Nacionalidade">
                        <Radio name="nacionalidade" inline>Brasileiro</Radio>
                        <Radio name="nacionalidade" inline>Estrangeiro</Radio>
                    </LabelGroup>
                    <Panel>
                        <LabelGroup label="Estado de nascimento" col={3} >
                            <FormControl componentClass="select" required onChange={this.changeEstado}>
                                <ListaDeElementos lista={ ListaDeUFs } />
                            </FormControl>                            
                        </LabelGroup>
                        <LabelGroup label={this.state.estadoAtual} col={3} >
                            <FormControl componentClass="select" required>
                                <ListaDeElementos lista={ this.state.municipiosAtuais } />
                            </FormControl>                            
                        </LabelGroup>
                    </Panel>
                </Panel>
                <Panel>
                        <LabelGroup label="Pluralidade de nascimentos" col={3}>
                            <FormControl componentClass="select" required >
                                <ListaDeElementos lista={ PluralidadeNascimentos } />
                            </FormControl>                            
                        </LabelGroup>
                    </Panel>
                    <Panel>
                        <LabelGroup label="Ordem de nascimento" col={3}>
                            <FormControl componentClass="select" required>
                                <ListaDeElementos lista={ OrdemDeNascimento } />
                            </FormControl>                            
                        </LabelGroup>
                    </Panel>
                    <Panel>
                        <LabelGroup label="Comentário de identificação">
                            <FormControl componentClass="textarea" placeholder="exemplo: dois pacientes com o mesmo nome. Não é o mesmo que 123456"/>                          
                        </LabelGroup>
                    </Panel>
            </div>
        </Form>
        )
    }
}
