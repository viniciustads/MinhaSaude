import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render(){
        return <Button>default</Button>
    }
}

function ItemDeLista(props) {
  return <option value={props.value.id}>{props.value.text}</option>;
}

function ListaDeElementos(props) {
  const lista = props.lista;
  return (
    <select>
      {lista.map((elemento) =>
        <ItemDeLista key={elemento.id}
                  value={elemento} />
      )}
    </select>
  );
}

const ufs = [
    { id: 'AC', text: 'Acre' },
    { id: 'AL', text:  'Alagoas' },
    { id: 'AP', text:  'Amapá' },
    { id: 'AM', text:  'Amazonas' },
    { id: 'BA', text:  'Bahia' },
    { id: 'CE', text:  'Ceará' },
    { id: 'DF', text:  'Distrito Federal' },
    { id: 'ES', text:  'Espirito Santo' },
    { id: 'GO', text:  'Goiás' },
    { id: 'MA', text:  'Maranhão' },
    { id: 'MS', text:  'Mato Grosso do Sul' },
    { id: 'MT', text:  'Mato Grosso' },
    { id: 'MG', text:  'Minas Gerais' },
    { id: 'PA', text:  'Pará' },
    { id: 'PB', text:  'Paraíba' },
    { id: 'PR', text:  'Paraná' },
    { id: 'PE', text:  'Pernambuco' },
    { id: 'PI', text:  'Piauí' },
    { id: 'RJ', text:  'Rio de Janeiro' },
    { id: 'RN', text:  'Rio Grande do Norte' },
    { id: 'RS', text:  'Rio Grande do Sul' },
    { id: 'RO', text:  'Rondônia' },
    { id: 'RR', text:  'Roraima' },
    { id: 'SC', text:  'Santa Catarina' },
    { id: 'SP', text:  'São Paulo' },
    { id: 'SE', text:  'Sergipe' },
    { id: 'TO', text:  'Tocantins' }
];

render(<App/>, document.getElementById('app'));
render(<ListaDeElementos lista={ufs} />, document.getElementById('listaDeUF'));