import React from 'react';
import {render} from 'react-dom';
import {Col, Button, ControlLabel, Form, MenuItem, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import {DadosIdentificador} from './identificadores'

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
      <NavItem eventKey={1} href="#identificadores">Identificadores</NavItem>
      <NavItem eventKey={2} href="#">Nomes</NavItem>
      <NavItem eventKey={3} href="#">Dados demográficos</NavItem>
      <NavItem eventKey={4} href="#">Endereços</NavItem>
      <NavItem eventKey={5} href="#">Comunicações eletrônicas</NavItem>
      <NavItem eventKey={6} href="#">Vínculos</NavItem>
    </Nav>
  </Navbar>  
)

var identificador = {
  DadosGerais: {
    TipoDoIdentificador: '02',
    AreaGeografica: '3',
    Designacao: 'Teste',
    DataIdentificador: '2017-11-02',
    Emissor: 'Hospital'
  },
  Certidao: {
    TipoDeCertidao: 'casamento',
    NomeDoCartorio: 'Cartório',
    LivroDoCartorio: 3,
    FolhaDoCartorio: 1,
    TermoDoCartorio: 0
  },
  CTPS: {
    SerieCTPS: 'ABC',
    EstadoCTPS: 'GO'
  },
  TituloDeEleitor: {
    SecaoTitulo: '001',
    ZonaTitulo: '1010'
  }
};

const Identificadores = (
  <Form horizontal>  
    <DadosIdentificador objeto={identificador} />
    <Button type="submit">
      Próximo
    </Button>
  </Form>
);

render(<Banner/>, document.getElementsByTagName('header')[0]);
render(MenuPrincipal, document.getElementById('menuPrincipal'));
render(Identificadores, document.getElementById('identificadores'));