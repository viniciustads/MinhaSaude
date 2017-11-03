import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Checkbox, Radio, FormGroup} from 'react-bootstrap';
import TextBox from './componentes/textbox';
import LabelGroup from './componentes/labelGroup';
import IndicadorDeAcuracia from './indicadorDeAcuracia';

export default class DadosDemograficos extends React.Component{
    render(){
        return  (
        <div>
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
            <TextBox  controlId="DataDeNascimento" label="Data de nascimento" type="date" colunaInput="4"/>
            <IndicadorDeAcuracia></IndicadorDeAcuracia>
            <LabelGroup controlId="Seguimento" label="Seguimento">
                <Checkbox >Data precisa de seguimento</Checkbox> 
            </LabelGroup>
            <TextBox  controlId="Obito" label="Óbito" type="date" colunaInput="4"/>
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
            <LabelGroup controlId="RacaCor" label="Raça/Cor">
                <Checkbox>branca</Checkbox>
                <Checkbox>preta</Checkbox>
                <Checkbox>parda</Checkbox>
                <Checkbox>amarela</Checkbox>
                <Checkbox>indígena</Checkbox>
            </LabelGroup>
            <LabelGroup controlId="sexo" label="Sexo">
                <Radio name="sexo">masculina (M)</Radio>
                <Radio name="sexo">feminina (F)</Radio>
                <Radio name="sexo">intersexo ou indeterminado (I)</Radio>
                <Radio name="sexo">não declarado (U)</Radio>
            </LabelGroup>
        </div>
        )
    }
}
