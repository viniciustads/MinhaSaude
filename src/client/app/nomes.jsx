import React from 'react';
import {render} from 'react-dom';
import {Label, FormControl, Panel} from 'react-bootstrap';
import {ListaDeElementos, UsoDoNome} from './listas'
import LabelGroup from './componentes/labelGroup'

export default class Nomes extends React.Component {
    obtenhaNomeCompleto(dados) {
        if (dados == null || dados.Nome == null) {
            return '-- preencha os campos --';
        }

        return dados.Titulo + " " + dados.Nome + " " + dados.Sobrenome + " " + dados.Sufixo;
    }
    definaNomeCompleto(e) {
        if (e == null || e.target == null) {
            return '-- preencha os campos --';
        }

        var rotulo = document.getElementById('NomeCompleto');
        var titulo = document.getElementById('Titulo').value;
        var nome = document.getElementById('Nome').value;
        var sobrenome = document.getElementById('Sobrenome').value;
        var sufixo = document.getElementById('Sufixo').value;
        if (titulo == ''  && nome == '' && sobrenome == '' && sufixo == '') {
            rotulo.innerHTML = '-- preencha os campos --';
        }
        
        var dados = {
            Titulo: titulo,
            Nome: nome,
            Sobrenome: sobrenome,
            Sufixo: sufixo
        };

        rotulo.innerHTML = dados.Titulo + " " + dados.Nome + " " + dados.Sobrenome + " " + dados.Sufixo;        
    }

    render() {
        var dados = this.props.objeto
                        ? this.props.objeto
                        : {};
        return (
        <div>
            <h3>Nomes</h3>
            <Panel>            
                <LabelGroup controlId="Nome" className="col-sm-6" label="Nome">
                    <FormControl componentClass="input" defaultValue={dados.Nome} required maxLength="30" 
                        onChange={this.definaNomeCompleto} />
                </LabelGroup>
                <LabelGroup controlId="Sobrenome" className="col-sm-6" label="Sobrenome">
                    <FormControl componentClass="input" defaultValue={dados.Sobrenome} required maxLength="30" 
                        onChange={this.definaNomeCompleto} />
                </LabelGroup>
                <LabelGroup controlId="Titulo" className="col-sm-6" label="Título">
                    <FormControl componentClass="input" defaultValue={dados.Titulo} required maxLength="15" 
                        onChange={this.definaNomeCompleto} />
                </LabelGroup>
                <LabelGroup controlId="Sufixo" className="col-sm-6" label="Sufixo">
                    <FormControl componentClass="input" defaultValue={dados.Sufixo} required maxLength="15" 
                        onChange={this.definaNomeCompleto} />
                </LabelGroup>            
                <LabelGroup controlId="NomeCompleto" className="col-sm-6" label="Nome completo">
                    <h4 id="NomeCompleto">{this.obtenhaNomeCompleto(dados)}</h4>
                </LabelGroup>
                <LabelGroup controlId="UsoDoNome" className="col-sm-6" label="Uso">
                    <FormControl componentClass="select" placeholder="select" defaultValue={dados.UsoDoNome}>
                        <ListaDeElementos lista={UsoDoNome} />
                    </FormControl>
                </LabelGroup>
            </Panel>
        </div>)
    }
};