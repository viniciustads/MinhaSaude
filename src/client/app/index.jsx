import React from 'react';
import {render} from 'react-dom';
import {Col, Button, ControlLabel, Form, MenuItem, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import {DadosGeraisDoIdentificador, Certidao, CTPS, TituloDeEleitor} from './identificadores'

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

const Identificadores = (
  <Form horizontal>
    <h3>Identificadores</h3>
    <DadosGeraisDoIdentificador />
    <Certidao />
    <CTPS />
    <TituloDeEleitor />
    <Button type="submit">
      Próximo
    </Button>    
  </Form>
);

render(<Banner/>, document.getElementsByTagName('header')[0]);
render(MenuPrincipal, document.getElementById('menuPrincipal'));
render(Identificadores, document.getElementById('identificadores'));