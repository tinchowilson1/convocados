import React, { Component } from 'react';

export class ListaConvocados extends Component {
    render() {
        const { convocados } = this.props
        let convocadosItems = convocados.map((item, key) => <li key={key}>{item.name}</li>);
        return (
            <ul>
                {convocadosItems}
            </ul>
        );
    }
}