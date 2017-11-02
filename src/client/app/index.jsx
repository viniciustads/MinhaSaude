import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Col, Button, ControlLabel, Form, FormControl, FormGroup, Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Banner extends React.Component {
    render(){
        return <img src="./resources/img/banner.jpg" width="100%" />
    }
}

const MenuPrincipal = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="./index.html">Minha Saúde</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Identificadores</NavItem>
      <NavItem eventKey={2} href="#">Nomes</NavItem>
      <NavItem eventKey={3} href="#">Dados demográficos</NavItem>
      <NavItem eventKey={4} href="#">Endereços</NavItem>
    </Nav>
  </Navbar>  
)

const ufs = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label:  'Alagoas' },
    { value: 'AP', label:  'Amapá' },
    { value: 'AM', label:  'Amazonas' },
    { value: 'BA', label:  'Bahia' },
    { value: 'CE', label:  'Ceará' },
    { value: 'DF', label:  'Distrito Federal' },
    { value: 'ES', label:  'Espirito Santo' },
    { value: 'GO', label:  'Goiás' },
    { value: 'MA', label:  'Maranhão' },
    { value: 'MS', label:  'Mato Grosso do Sul' },
    { value: 'MT', label:  'Mato Grosso' },
    { value: 'MG', label:  'Minas Gerais' },
    { value: 'PA', label:  'Pará' },
    { value: 'PB', label:  'Paraíba' },
    { value: 'PR', label:  'Paraná' },
    { value: 'PE', label:  'Pernambuco' },
    { value: 'PI', label:  'Piauí' },
    { value: 'RJ', label:  'Rio de Janeiro' },
    { value: 'RN', label:  'Rio Grande do Norte' },
    { value: 'RS', label:  'Rio Grande do Sul' },
    { value: 'RO', label:  'Rondônia' },
    { value: 'RR', label:  'Roraima' },
    { value: 'SC', label:  'Santa Catarina' },
    { value: 'SP', label:  'São Paulo' },
    { value: 'SE', label:  'Sergipe' },
    { value: 'TO', label:  'Tocantins' }
];

const Identificadores = (
  <Form horizontal>
    <h3>Identificadores</h3>
    <FormGroup controlId="TipoDoIdentificador" className="col-sm-6">      
        <Col sm={11}>
          <label>Tipo do identificador</label>
        </Col>
        <Col sm={11}>
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
      <Col sm={11}>
        <ControlLabel>Área geográfica</ControlLabel>      
      </Col>
      <Col sm={11}>
        <FormControl componentClass="select" placeholder="select">
          <option value="1">Local</option>
          <option value="2">Área/região/distrito</option>
          <option value="3">Estado/província/território</option>
          <option value="4">Nacional</option>
        </FormControl>
      </Col>
    </FormGroup>
    <Button type="submit">
      Próximo
    </Button>
  </Form>
);

render(<Banner/>, document.getElementsByTagName('header')[0]);
render(MenuPrincipal, document.getElementById('menuPrincipal'));
render(Identificadores, document.getElementById('identificadores'));