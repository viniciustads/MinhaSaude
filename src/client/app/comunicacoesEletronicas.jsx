import React from 'react';
import { render } from 'react-dom';
import { Col, ControlLabel, FormControl, FormGroup, Panel, Radio, Row, Form, LabelGroup } from 'react-bootstrap';
import { ListaDeElementos, Meio, ListaDeUFs, Utilizacao, Preferencias } from './listas'

class DadoscomunicacoesEletronicas extends React.Component {

render() {
    var dados = this.props.objeto
      ? this.props.objeto
      : {};
    return <Panel>
      <FormGroup controlId="Meio" className="col-sm-3">
        <Col sm={12}>
          <label>Meio</label>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="select" required defaultValue={dados.Meio}>
            <ListaDeElementos lista={Meio} />
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup controlId="Telefone" className="col-sm-3">
        <Col sm={12}>
          <label>Telefone</label>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="input" type="number" placeholder="+55 62912345678" defaultValue={dados.DadosGenericosPaises} />
        </Col>
      </FormGroup>
            <FormGroup controlId="Preferencia" className="col-sm-3">
        <Col sm={12}>
          <label>Preferência</label>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="select" required defaultValue={dados.Preferencia}>
            <ListaDeElementos lista={Preferencias} />
          </FormControl>
        </Col>
      </FormGroup>
            <FormGroup controlId="Utilizacao" className="col-sm-4">
        <Col sm={12}>
          <label>Utilização</label>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="select" required defaultValue={dados.Utilizacao}>
            <ListaDeElementos lista={Utilizacao} />
          </FormControl>
        </Col>
      </FormGroup>

    </Panel>
  }
};







export class DadosComunicacoesEletronicas extends React.Component {
  render() {
    var objeto = this.props.objeto;
    return <div className="dadosIdentificador">
      <h3>Comunicações eletrônicas</h3>
      <DadoscomunicacoesEletronicas objeto={comunicacoesEletronicas.DadosGerais} />
    </div>
  }
}