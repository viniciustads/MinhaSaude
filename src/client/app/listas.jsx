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

export const Relacionamento = [
    { value: '7', label: 'Avó materna' },
    { value: '8', label: 'Avô materno' },
    { value: '22', label: 'Cônjuge/companheiro(a)' },
    { value: '23', label: 'Irmão' },
    { value: '24', label: 'Irmã' },
    { value: '25', label: 'Meio-irmão' },
    { value: '26', label: 'Meio-irmã' },
    { value: '27', label: 'Irmãos' },
    { value: '28', label: 'Criança' },
    { value: '29', label: 'Filha' },
    { value: '36', label: 'Avó materna' },
    { value: '37', label: 'Avô paterno' },
    { value: '38', label: 'Tio materno' },
    { value: '40', label: 'Tio paterno' },
    { value: '41', label: 'Tia paterna' },
    { value: '189', label: 'Recém-nascido' },
    { value: '254', label: 'Pais' },
    { value: '262', label: 'Mãe adotiva' },
    { value: '263', label: 'Pai adotivo' },
    { value: '264', label: 'Responsável' },
    { value: '265', label: 'Coabitante' },
    { value: '939', label: 'Tia materna' }
]

export const OrdemDeNascimento = [
    { value: '1', label: 'único ou primeiro' },
    { value: '2', label: 'segundo' },
    { value: '3', label: 'terceiro' },
    { value: '4', label: 'quarto' },
    { value: '5', label: 'quinto' },
    { value: '6', label: 'sexto' },
    { value: '7', label: 'outros' },
    { value: '9', label: 'não declarado' }
]

export const PluralidadeNascimentos = [
    { value: '1', label: 'Único' },
    { value: '2', label: 'Gêmeos' },
    { value: '3', label: 'Trigêmeos' },
    { value: '4', label: 'Quádruplos' },
    { value: '5', label: 'Quíntuplos' },
    { value: '6', label: 'Sêxtuplos' },
    { value: '7', label: 'Outros' },
    { value: '9', label: 'Não declarado' }
]

export const SituacaoFamiliar = [
    { value: '1', label: 'companheiro(a) e filho(s)' },
    { value: '2', label: 'companheiro(a) com laços conjugais e sem filhos' },
    { value: '3', label: 'companheiro(a), com filho(s) e/ou outro(s) familiares' },
    { value: '4', label: 'familiar(es) sem companheiro(a)' },
    { value: '5', label: 'outra(s) pessoa(s), sem laços consanguíneos e/ou laços conjugais' },
    { value: '6', label: 'Vive só' }
]
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
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espirito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' }
];

export const UsoDoNome = [
    { value: '1', label: 'Relatório (R)' },
    { value: '2', label: 'Nome de recém-nascido (N)' },
    { value: '3', label: 'Nome profissional ou comercial (C)' },
    { value: '4', label: 'Nome de solteiro (nascimento) (original)' },
    { value: '5', label: 'Nome registrado (nome legal)' },
    { value: '8', label: 'Outro nome (alias)' }
];

export const MunicipiosEndereco = [
    { value: '1200013', label: 'Acrelândia' },
    { value: '1200054', label: 'Assis Brasil' },
    { value: '1200104', label: 'Brasiléia' },
    { value: '1200138', label: 'Bujari' },
    { value: '1200179', label: 'Capixaba' },
    { value: '1200203', label: 'Cruzeiro do Sul' },
    { value: '1200252', label: 'Epitaciolândia' },
    { value: '1200302', label: 'Feijó' },
    { value: '1200328', label: 'Jordão' },
    { value: '1200336', label: 'Mâncio Lima' },
    { value: '1200344', label: 'Manoel Urbano' },
    { value: '1200351', label: 'Marechal Thaumaturgo' },
    { value: '1200385', label: 'Plácido de Castro' },
    { value: '1200807', label: 'Porto Acre' },
    { value: '1200393', label: 'Porto Walter' },
    { value: '1200401', label: 'Rio Branco' },
    { value: '1200427', label: 'Rodrigues Alves' },
    { value: '1200435', label: 'Santa Rosa do Purus' },
    { value: '1200500', label: 'Sena Madureira' },
    { value: '1200450', label: 'Senador Guiomard' },
    { value: '1200609', label: 'Tarauacá' },
    { value: '1200708', label: 'Xapuri' }
];

export const OutrosPaises = [
    { value: '1200013', label: 'Brasil' },
    { value: '1200054', label: 'Japão' },
    { value: '1200104', label: 'Coreia do Sul' }
];



export const Preferencias = [
    { value: 'A', label: 'Horário comercial' },
    { value: 'B', label: 'Durante o dia' },
    { value: 'C', label: 'Finais de semana' },
    { value: 'D', label: 'Qualquer hora' },
    { value: 'E', label: 'Período noturno' }
];

export const Utilizacao = [
    { value: 'A', label: 'Comercial' },
    { value: 'B', label: 'Pessoal' },
    { value: 'C', label: 'Comercial ou pessoal' }
];

export const Meio = [
    { value: 'A', label: 'Telefone' },
    { value: 'B', label: 'Celular' },
    { value: 'C', label: 'Fax' },
    { value: 'D', label: 'Pager' },
    { value: 'E', label: 'Email' },
    { value: 'F', label: 'URL' },
];

