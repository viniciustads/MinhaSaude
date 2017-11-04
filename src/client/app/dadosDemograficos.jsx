import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Checkbox, Radio, FormGroup, FormControl, Panel, Form} from 'react-bootstrap';
import TextBox from './componentes/textbox';
import LabelGroup from './componentes/labelGroup';
import CheckboxGroup from './componentes/checkboxGroup';
import IndicadorDeAcuracia from './indicadorDeAcuracia';
import { ListaDeElementos, SituacaoFamiliar, ListaDeUFs, PluralidadeNascimentos, OrdemDeNascimento } from './listas'
import Municipios from './componentes/municipios';

export default class DadosDemograficos extends React.Component{

    render(){       
        
        return  (
               <div>
                <h3>Dados demográficos</h3>
                <Panel>    
                    
                    <Panel>                               
                        <TextBox  controlId="NomeDaMae" label="Nome da mãe"/>
                        <TextBox  controlId="NomeDoPai" label="Nome do pai"/>                        
                        <LabelGroup controlId="situacaoFamiliar" label="Situação familiar (convive com)">
                            <CheckboxGroup itens={SituacaoFamiliar}></CheckboxGroup>                
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
                        <Radio name="racaCor">branca</Radio>
                        <Radio name="racaCor">preta</Radio>
                        <Radio name="racaCor">parda</Radio>
                        <Radio name="racaCor">amarela</Radio>
                        <Radio name="racaCor">indígena</Radio>
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
                        <Municipios labelEstado='Estado de nascimento'></Municipios>
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
        )
    }
}
