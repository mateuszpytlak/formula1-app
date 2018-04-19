import React from 'react';
import {TableHeadConstructors} from "./TableHeadConstructors.jsx";
import {TableBodyConstructors} from "./TableBodyConstructors.jsx";

export class ConstructorStandings extends React.Component {

    render() {
        return (
            <fieldset>
                <legend>Constructor standings</legend>
                <table>
                    <TableHeadConstructors data={this.props.data}/>
                    <TableBodyConstructors actionShowDetails={this.props.actionShowDetails} data={this.props.data}/>
                </table>
            </fieldset>
        )
    }
}



