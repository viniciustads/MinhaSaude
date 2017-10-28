import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Banner extends React.Component {
    render(){
        return <img src="./resources/img/banner.jpg" width="100%" />
    }
}

class MenuPrincipal extends React.Component {
  render() {
    return <Navbar>
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
  }
}

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

render(<Banner/>, document.getElementsByTagName('header')[0]);
render(<MenuPrincipal/>, document.getElementById('menuPrincipal'));