import React from 'react';
import {ConstructorDetailsHead} from "./ConstructorDetailsHead.jsx";
import {ConstructorDetailsBody} from "./ConstructorDetailsBody.jsx";

export class ConstructorDetails extends React.Component {

    render() {
        return (
            <fieldset>
                <legend>Constructor details</legend>
                <table>
                    <ConstructorDetailsHead constructorDetails={this.props.constructorDetails}/>
                    <ConstructorDetailsBody constructorDetails={this.props.constructorDetails}/>
                </table>
            </fieldset>
        )
    }
}
