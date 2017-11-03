import React from 'react';
import {render} from 'react-dom';
import {Col, ControlLabel, FormControl, FormGroup, Panel, Radio, Row, Form} from 'react-bootstrap';
import {ListaDeElementos, TipodoEndereco, AreaGeografica, Certidoes, ListaDeUFs} from './listas'

class DadosGeraisDoEndereco extends React.Component {    
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel>
          <FormGroup controlId="TipodeEndereco" className="col-sm-6">      
                <Col sm={12}>
                <label>Tipo do Endereco</label>
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="select" required defaultValue={dados.TipodeEndereco}>
                        <ListaDeElementos lista={TipodoEndereco} />
                    </FormControl>
                </Col>
            </FormGroup>
            <Row>
               <Col sm={12}>
            <FormGroup controlId="DataInicial" className="col-sm-6">
                <Col sm={12}>
                    <ControlLabel>Data Inicial</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" defaultValue={dados.DataInicial} required type="date" />
                </Col>
            </FormGroup>
            <FormGroup controlId="IndicadorAcuraciaInicial" className="col-sm-6">
                <Col sm={12}>
                    <ControlLabel>Inicador de acurácia</ControlLabel>      
                </Col>   
                <Col sm={12}>   
                    <label>Dia </label>{'   '}                         
                            <Radio name="radioGroup" inline> Acurado </Radio>{' '}
                            <Radio name="radioGroup" inline> Estimado</Radio>{' '}
                            <Radio name="radioGroup" inline>Desconhecido</Radio>                   
                  </Col>
                <Col sm={12}>                               
                    <label>Mês </label>{'   '}              
                            <Radio name="radioGroup" inline> Acurado </Radio>{' '}
                            <Radio name="radioGroup" inline> Estimado</Radio>{' '}
                            <Radio name="radioGroup" inline>Desconhecido</Radio> 
                </Col>
                <Col sm={12}>                              
                    <label>Ano </label>{'   '}              
                            <Radio name="radioGroup" inline> Acurado </Radio>{' '}
                            <Radio name="radioGroup" inline> Estimado</Radio>{' '}
                            <Radio name="radioGroup" inline>Desconhecido</Radio> 
                </Col>    
            </FormGroup>
            </Col>
             </Row>
            <Row>
               <Col sm={12}>
            <FormGroup controlId="DataFinal" className="col-sm-6">
                <Col sm={12}>
                    <ControlLabel>Data Final</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" defaultValue={dados.DataFinal} required type="date" />
                </Col>
            </FormGroup>
            <FormGroup controlId="IndicadorAcuraciaFinal" className="col-sm-6">
                <Col sm={12}>
                    <ControlLabel>Inicador de acurácia</ControlLabel>      
                </Col>   
                <Col sm={12}>   
                    <label>Dia </label>{'   '}                         
                            <Radio name="radioGroup" inline> Acurado </Radio>{' '}
                            <Radio name="radioGroup" inline> Estimado</Radio>{' '}
                            <Radio name="radioGroup" inline>Desconhecido</Radio>                   
                  </Col>
                <Col sm={12}>                               
                    <label>Mês </label>{'   '}              
                            <Radio name="radioGroup" inline> Acurado </Radio>{' '}
                            <Radio name="radioGroup" inline> Estimado</Radio>{' '}
                            <Radio name="radioGroup" inline>Desconhecido</Radio> 
                </Col>
                <Col sm={12}>                              
                    <label>Ano </label>{'   '}              
                            <Radio name="radioGroup" inline> Acurado </Radio>{' '}
                            <Radio name="radioGroup" inline> Estimado</Radio>{' '}
                            <Radio name="radioGroup" inline>Desconhecido</Radio> 
                </Col>   
                    </FormGroup>
                </Col>
             </Row>





            <FormGroup controlId="Emissor" className="col-sm-6">
                <Col sm={12}>
                    <ControlLabel>Emissor</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" required maxLength="25" defaultValue={dados.Emissor} />
                </Col>
            </FormGroup>
        </Panel>
    }
};
  
class Certidao extends React.Component {
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel header="Certidão">    
            <FormGroup controlId="TipoDeCertidao" className="col-sm-12">      
                <Col sm={12}>
                    <label>Tipo de certidão</label>
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="select" placeholder="select" defaultValue={dados.TipoDeCertidao}>
                        <ListaDeElementos lista={Certidoes} />
                    </FormControl>           
                </Col>
            </FormGroup>
            <FormGroup controlId="NomeDoCartorio" className="col-sm-12">
                <Col sm={12}>
                    <ControlLabel>Nome do Cartório</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" maxLength="25" defaultValue={dados.NomeDoCartorio} />
                </Col>
            </FormGroup>
            <FormGroup controlId="LivroDoCartorio" className="col-sm-4">
                <Col sm={12}>
                    <ControlLabel>Livro</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" type="number" defaultValue={dados.LivroDoCartorio} />
                </Col>
            </FormGroup>
            <FormGroup controlId="FolhaDoCartorio" className="col-sm-4">
                <Col sm={12}>
                    <ControlLabel>Folha</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" type="number" defaultValue={dados.FolhaDoCartorio} />
                </Col>
            </FormGroup>
            <FormGroup controlId="TermoDoCartorio" className="col-sm-4">
                <Col sm={12}>
                    <ControlLabel>Termo</ControlLabel>      
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" type="number" defaultValue={dados.TermoDoCartorio} />
                </Col>
            </FormGroup>
        </Panel>
    }
};

class CTPS extends React.Component {
    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return <Panel header="Carteira de trabalho">        
            <FormGroup controlId="SerieCTPS" className="col-sm-6">      
                <Col sm={12}>
                    <label>Série</label>
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" maxLength="25" defaultValue={dados.SerieCTPS} />
                </Col>
            </FormGroup>
            <FormGroup controlId="EstadoCTPS" className="col-sm-6">      
                <Col sm={12}>
                    <label>Estado</label>
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="select" placeholder="select" defaultValue={dados.EstadoCTPS}>
                        <ListaDeElementos lista={ListaDeUFs} />
                    </FormControl>
                </Col>
            </FormGroup>
        </Panel>
    }
};

class TituloDeEleitor extends React.Component {
    render() {
        var dados = this.props.objeto
        ? this.props.objeto
        : {};
        return <Panel header="Título de Eleitor">        
            <FormGroup controlId="SecaoTitulo" className="col-sm-6">      
                <Col sm={12}>
                    <label>Seção</label>
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" maxLength="25" defaultValue={dados.SecaoTitulo} />
                </Col>
            </FormGroup>
            <FormGroup controlId="ZonaTitulo" className="col-sm-6">      
                <Col sm={12}>
                    <label>Zona</label>
                </Col>
                <Col sm={12}>
                    <FormControl componentClass="input" maxLength="25" defaultValue={dados.ZonaTitulo} />
                </Col>
            </FormGroup>
        </Panel>
    }
};

export class DadosEndereco extends React.Component {
    render() {
        var objeto = this.props.objeto;
        var identificador = objeto != null ? objeto : {};
        return <div className="dadosIdentificador">            
            <h3>Endereços</h3>
            <DadosGeraisDoEndereco objeto={endereco.DadosGerais} />
            <Certidao objeto={identificador.Certidao} />
            <CTPS objeto={identificador.CTPS} />
            <TituloDeEleitor objeto={identificador.TituloDeEleitor} />
            </div>
    }
}  