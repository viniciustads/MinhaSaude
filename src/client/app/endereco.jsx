import React from 'react';
import { render } from 'react-dom';
import { Col, ControlLabel, FormControl, FormGroup, Panel, Radio, Row, Form, LabelGroup } from 'react-bootstrap';
import { ListaDeElementos, TipodoEndereco, ListaDeUFs, MunicipiosEndereco, OutrosPaises } from './listas'

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
            <Col sm={12} >
              <label>Ano </label>{'   '}
              <Radio name="radioGroup" inline> Acurado </Radio>{' '}
              <Radio name="radioGroup" inline> Estimado</Radio>{' '}
              <Radio name="radioGroup" inline>Desconhecido</Radio>
            </Col>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup controlId="TipoDoPais" className="col-sm-6">
        <Col sm={12}>
          <ControlLabel>País</ControlLabel>
        </Col>
        <Col sm={12}>
          <Radio name="radioGroupPais" inline>Brasil</Radio>{' '}
          <Radio name="radioGroupPais" inline>Outro</Radio>
        </Col>
      </FormGroup>
    </Panel>
  }
};

class Brasil extends React.Component {
  render() {
    var dados = this.props.objeto
      ? this.props.objeto
      : {};
    return <Panel header="Brasil">
      <Panel>
        <Col sm={12}>
          <label>Estado</label>
        </Col>
        <Col sm={12}>
          <FormGroup controlId="EstadoBrasil" className="col-sm-6" label="Estado">
            <FormControl componentClass="select" placeholder="select" defaultValue={dados.EstadoBrasil}>
              <ListaDeElementos lista={ListaDeUFs} />
            </FormControl>
          </FormGroup>
        </Col>
        <Col sm={12}>
          <label>Município</label>
        </Col>
        <Col sm={12}>
          <FormGroup controlId="MunicipioBrasil" className="col-sm-6" label="Municipio">
            <FormControl componentClass="select" placeholder="select" defaultValue={dados.MunicipiosBrasil}>
              <ListaDeElementos lista={MunicipiosEndereco} />
            </FormControl>
          </FormGroup>
        </Col>

      </Panel>

      <Panel>
        <Col sm={12}>
          <label>País</label>
        </Col>
        <Col sm={12}>
          <FormGroup controlId="OutrosPaises" className="col-sm-6" label="Municipio">
            <FormControl componentClass="select" placeholder="select" defaultValue={dados.OutrosPaises}>
              <ListaDeElementos lista={OutrosPaises} />
            </FormControl>
          </FormGroup>
        </Col>

        <Col sm={12}>
          <label>Estado</label>
        </Col>
        <Col sm={6}>
          <FormControl componentClass="input" type="Text" defaultValue={dados.OutrosPaisesEstados} />
        </Col>
        <Col sm={12}>
          <label>Município</label>
        </Col>
        <Col sm={6}>
          <FormControl componentClass="input" type="Text" defaultValue={dados.OutrosPaisesMunicipios} />
        </Col>
      </Panel>

      <FormGroup controlId="CaixaPostal" className="col-sm-2">
        <Col sm={12}>
          <ControlLabel>Caixa Postal</ControlLabel>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="input" type="number" defaultValue={dados.DadosGenericosPaises} />
        </Col>
      </FormGroup>
      <FormGroup controlId="CEP" className="col-sm-3">
        <Col sm={12}>
          <ControlLabel>CEP</ControlLabel>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="input" type="number" placeholder="Exemplo: 74000-010" defaultValue={dados.DadosGenericosPaises} />
        </Col>
      </FormGroup>
      <FormGroup controlId="Bairro" className="col-sm-4">
        <Col sm={12}>
          <ControlLabel>Bairro</ControlLabel>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="input" type="text" defaultValue={dados.DadosGenericosPaises} />
        </Col>
      </FormGroup>
      <FormGroup controlId="Distrito" className="col-sm-4">
        <Col sm={12}>
          <ControlLabel>Distrito</ControlLabel>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="input" type="text" defaultValue={dados.DadosGenericosPaises} />
        </Col>
      </FormGroup>
      <FormGroup controlId="Endereco" className="col-sm-12">
        <Col sm={12}>
          <ControlLabel>Endereço</ControlLabel>
        </Col>
        <Col sm={12}>
          <FormControl componentClass="input" type="text" defaultValue={dados.DadosGenericosPaises} />
        </Col>
      </FormGroup>


    </Panel>
  }
};

class Outros extends React.Component {
  render() {
    var dados = this.props.objeto
      ? this.props.objeto
      : {};
    return <Panel header="Apagar depois que configurar os Fade de Paises">

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
      <Brasil objeto={identificador.Brasil} />
      <Outros objeto={identificador.Outros} />
    </div>
  }
}