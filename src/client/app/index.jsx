import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

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

render(<App/>, document.getElementById('app'));
render(<Select name="lista-ufs" id="ufs" options={ufs} />, document.getElementById('listaDeUF'));