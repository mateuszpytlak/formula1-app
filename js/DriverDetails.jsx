import React from 'react';
import {DriverDetailsHead} from "./DriverDetailsHead.jsx";
import {DriverDetailsBody} from "./DriverDetailsBody.jsx";

export class DriverDetails extends React.Component {

    render() {
        return (
            <fieldset>
                <legend>Driver details</legend>
                <table>
                    <DriverDetailsHead driverDetails={this.props.driverDetails}/>
                    <DriverDetailsBody driverDetails={this.props.driverDetails}/>
                </table>
            </fieldset>
        )
    }
}
