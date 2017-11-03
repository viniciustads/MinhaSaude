import React from 'react';
import {render} from 'react-dom';
import {Col, ControlLabel, FormControl, FormGroup, Panel} from 'react-bootstrap';
import {ListaDeElementos, TiposDeIdentificador, AreaGeografica, Certidoes, ListaDeUFs} from './listas'
import { LabelGroup } from './componentes/labelGroup'

class DadosGeraisDoIdentificador extends React.Component {    
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel>
            <LabelGroup controlId="TipoDoIdentificador" className="col-sm-6" label="Tipo do identificador">
                <FormControl componentClass="select" required defaultValue={dados.TipoDoIdentificador}>
                    <ListaDeElementos lista={TiposDeIdentificador} />
                </FormControl>
            </LabelGroup>
            <LabelGroup controlId="AreaGeografica" className="col-sm-6" label="Área geográfica">
                <FormControl componentClass="select" required defaultValue={dados.AreaGeografica}>
                    <ListaDeElementos lista={AreaGeografica} />
                </FormControl>
            </LabelGroup>
            <LabelGroup controlId="Designacao" className="col-sm-6" label="Designação">
                <FormControl componentClass="input" defaultValue={dados.Designacao} required maxLength="25" />
            </LabelGroup>
            <LabelGroup controlId="DataIdentificador" className="col-sm-6" label="Data">
                <FormControl componentClass="input" defaultValue={dados.DataIdentificador} required type="date" />
            </LabelGroup>
            <LabelGroup controlId="Emissor" className="col-sm-6" label="Emissor">
                <FormControl componentClass="input" required maxLength="25" defaultValue={dados.Emissor} />
            </LabelGroup>
        </Panel>
    }
};
  
class Certidao extends React.Component {
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel header="Certidão">    
            <LabelGroup controlId="TipoDeCertidao" className="col-sm-6" label="Tipo de certidão">
                <FormControl componentClass="select" placeholder="select" defaultValue={dados.TipoDeCertidao}>
                    <ListaDeElementos lista={Certidoes} />
                </FormControl>  
            </LabelGroup>
            <LabelGroup controlId="NomeDoCartorio" className="col-sm-6" label="Nome do Cartório">
                <FormControl componentClass="input" maxLength="25" defaultValue={dados.NomeDoCartorio} />
            </LabelGroup>
            <LabelGroup controlId="LivroDoCartorio" className="col-sm-4" label="Livro">
                <FormControl componentClass="input" type="number" defaultValue={dados.LivroDoCartorio} />
            </LabelGroup>
            <LabelGroup controlId="FolhaDoCartorio" className="col-sm-4" label="Folha">
                <FormControl componentClass="input" type="number" defaultValue={dados.FolhaDoCartorio} />   
            </LabelGroup>
            <LabelGroup controlId="TermoDoCartorio" className="col-sm-4" label="Termo">
                <FormControl componentClass="input" type="number" defaultValue={dados.TermoDoCartorio} />
            </LabelGroup>
        </Panel>
    }
};

class CTPS extends React.Component {
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel header="Carteira de trabalho">
            <LabelGroup controlId="SerieCTPS" className="col-sm-6" label="Série">  
                <FormControl componentClass="input" maxLength="25" defaultValue={dados.SerieCTPS} />
            </LabelGroup>
            <LabelGroup controlId="EstadoCTPS" className="col-sm-6" label="Estado">  
                <FormControl componentClass="select" placeholder="select" defaultValue={dados.EstadoCTPS}>
                    <ListaDeElementos lista={ListaDeUFs} />
                </FormControl>
            </LabelGroup>
        </Panel>
    }
};

class TituloDeEleitor extends React.Component {
    render() {
        var dados = this.props.objeto
        ? this.props.objeto
        : {};
        return <Panel header="Título de Eleitor">
            <LabelGroup controlId="SecaoTitulo" className="col-sm-6" label="Seção">
                <FormControl componentClass="input" maxLength="25" defaultValue={dados.SecaoTitulo} />
            </LabelGroup>
            <LabelGroup controlId="ZonaTitulo" className="col-sm-6" label="Zona">            
                <FormControl componentClass="input" maxLength="25" defaultValue={dados.ZonaTitulo} />
            </LabelGroup>
        </Panel>
    }
};

export class DadosIdentificador extends React.Component {
    render() {
        var objeto = this.props.objeto;
        var identificador = objeto != null ? objeto : {};
        return <div className="dadosIdentificador">            
            <h3>Identificadores</h3>
            <DadosGeraisDoIdentificador objeto={identificador.DadosGerais} />
            <Certidao objeto={identificador.Certidao} />
            <CTPS objeto={identificador.CTPS} />
            <TituloDeEleitor objeto={identificador.TituloDeEleitor} />
            </div>
    }
}  