import React from 'react';
import { Col, FormControl, FormGroup, ControlLabel, Radio} from 'react-bootstrap';
import LabelGroup from './componentes/labelGroup';

export default class IndicadorDeAcuracia extends React.Component{
    render(){
        return  (
            <LabelGroup controlId="IndicadorDeAcuracia" label="Indicador de acurácia">
                <FormGroup>
                    Dia:
                    <Radio name="diaAcuracia" inline>
                        Acurado
                    </Radio>
                    <Radio name="diaAcuracia" inline>
                        Estimado
                    </Radio>
                    <Radio name="diaAcuracia" inline>
                        Desconhecido
                    </Radio>
                </FormGroup>
                <FormGroup>
                    Mês:
                    <Radio name="mesAcuracia" inline>
                        Acurado
                    </Radio>
                    <Radio name="mesAcuracia" inline>
                        Estimado
                    </Radio>
                    <Radio name="mesAcuracia" inline>
                        Desconhecido
                    </Radio>
                </FormGroup>
                <FormGroup>
                    Ano:
                    <Radio name="anoAcuracia" inline>
                        Acurado
                    </Radio>
                    <Radio name="anoAcuracia" inline>
                        Estimado
                    </Radio>
                    <Radio name="anoAcuracia" inline>
                        Desconhecido
                    </Radio>
                </FormGroup>
            </LabelGroup>
        )
    }
}