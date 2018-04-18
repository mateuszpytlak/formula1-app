import React from 'react';
import {TableHeadDrivers} from "./TableHeadDrivers.jsx";
import {TableBodyDrivers} from "./TableBodyDrivers.jsx";

export class DriverStandings extends React.Component {

    render() {
        return (
            <fieldset>
                <legend>Driver standings</legend>
                <table>
                    <TableHeadDrivers data={this.props.data}/>
                    <TableBodyDrivers data={this.props.data}/>
                </table>
            </fieldset>
        )
    }
}



