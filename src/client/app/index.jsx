import React from 'react';
import {render} from 'react-dom';
import {Col, Button, ControlLabel, Form, MenuItem, Nav, Navbar, NavItem, NavDropdown, Tabs, Tab} from 'react-bootstrap';
import DadosIdentificador from './identificadores'
import Nomes from './nomes'
import {DadosEndereco} from './endereco'
import {DadosComunicacoesEletronicas} from './comunicacoesEletronicas'
import DadosDemograficos from './dadosDemograficos'
import Vinculos from './vinculos'

class Banner extends React.Component {
    render(){
        return <img src="./resources/img/banner.jpg" width="100%" />
    }
}

const Identificadores = (
  <Form horizontal>  
    <DadosIdentificador objeto={identificador} />
    <Button type="submit">
      Próximo
    </Button>
  </Form>
);

const ComunicacoesEletronicas = (
  <Form horizontal>  
   <DadosComunicacoesEletronicas objeto={comunicacoesEletronicas} />
  </Form>
);

const Endereco = (
  <Form horizontal>  
   <DadosEndereco objeto={endereco} />
  </Form>
);

const MenuPrincipal = (
  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" animation={false}>
    <Tab eventKey={1} title="Identificadores">{Identificadores}</Tab>
    <Tab eventKey={2} title="Nomes"><Nomes /></Tab>
    <Tab eventKey={3} title="Dados demográficos"><DadosDemograficos/></Tab>
    <Tab eventKey={4} title="Endereços">{Endereco}</Tab>
    <Tab eventKey={5} title="Comunicações eletrônicas">{ComunicacoesEletronicas}</Tab>
    <Tab eventKey={6} title="Vínculos"><Vinculos/></Tab>
  </Tabs>
);

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

render(<Banner/>, document.getElementsByTagName('header')[0]);
render(MenuPrincipal, document.getElementById('menuPrincipal'));
