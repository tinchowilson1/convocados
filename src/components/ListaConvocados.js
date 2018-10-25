import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class ListaConvocados extends Component {
    render() {
        const { convocados } = this.props
        // let convocadosItems = convocados.map((item, key) => <li key={key}>{item.name}</li>);
        return (
            // <ul>
            //     {convocadosItems}
            // </ul>
            <BootstrapTable data={convocados} hover>
                <TableHeaderColumn isKey dataField='id'>#</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Player</TableHeaderColumn>
                <TableHeaderColumn dataField='ranking'>Estrellas</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}