import React from 'react';
import { Col, FormControl, FormGroup, ControlLabel, Radio} from 'react-bootstrap';
import LabelGroup from './componentes/labelGroup';

export default class IndicadorDeAcuracia extends React.Component{
    render(){
        return  (
            <LabelGroup controlId="IndicadorDeAcuracia" label="Indicador de acurácia">
                
                <LabelGroup label="Dia:">                 
                    <Radio name="Acuracia" inline>
                        Acurado
                    </Radio>
                    <Radio name="Acuracia" inline>
                        Estimado
                    </Radio>
                    <Radio name="Acuracia" inline>
                        Desconhecido
                    </Radio>
                </LabelGroup>                  
                <LabelGroup label="Mês:">                    
                    <Radio name="Acuracia" inline>
                        Acurado
                    </Radio>
                    <Radio name="Acuracia" inline>
                        Estimado
                    </Radio>
                    <Radio name="Acuracia" inline>
                        Desconhecido
                    </Radio>
                </LabelGroup>
                <LabelGroup label="Ano:">                    
                    <Radio name="Acuracia" inline>
                        Acurado
                    </Radio>
                    <Radio name="Acuracia" inline>
                        Estimado
                    </Radio>
                    <Radio name="Acuracia" inline>
                        Desconhecido
                    </Radio>
                </LabelGroup>
            </LabelGroup>
        )
    }
}