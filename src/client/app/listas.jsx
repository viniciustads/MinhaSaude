import React from 'react';

function ItemDeLista(props) {
    return <option value={props.value}>{props.label}</option>;
}

export function ListaDeElementos(props) {
    const lista = props.lista;
    return (
      lista.map((elemento) =>
            <ItemDeLista key={elemento.value} 
                        value={elemento.value}
                        label={elemento.label} />
            )
    );
}

export const TipodoEndereco = [
    { value: '01', label: 'Comercial' },
    { value: '02', label: 'Correio ou postal' },
    { value: '03', label: 'Acomodação temporária' },
    { value: '04', label: 'Residencial' },
    { value: '08', label: 'Sem endereço fixo' },
    { value: '09', label: 'Desconhecido/não declarado' }    
];


export const TiposDeIdentificador = [
    { value: '01', label: 'Único dentro da organização' },
    { value: '02', label: 'Número do prontuário' },
    { value: '21', label: 'Radiologia' },
    { value: '22', label: 'Patologia' },
    { value: '23', label: 'Farmácia' }
];

export const AreaGeografica = [
    { value: '1', label: 'Local' },
    { value: '2', label: 'Área/região/distrito' },
    { value: '3', label: 'Estado/província/território' },
    { value: '4', label: 'Nacional' }
];

export const Certidoes = [
    { value: 'nascimento', label: 'Nascimento' },
    { value: 'casamento', label: 'Casamento' },
    { value: 'divorcio', label: 'Divórcio' }
];

export const ListaDeUFs = [
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

export const UsoDoNome = [
    { value: '1', label:  'Relatório (R)' },
    { value: '2', label:  'Nome de recém-nascido (N)' },
    { value: '3', label:  'Nome profissional ou comercial (C)' },
    { value: '4', label:  'Nome de solteiro (nascimento) (original)' },
    { value: '5', label:  'Nome registrado (nome legal)' },
    { value: '8', label:  'Outro nome (alias)' }
];