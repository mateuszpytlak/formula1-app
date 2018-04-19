import React from 'react';

export class ConstructorDetailsBody extends React.Component {

    render() {
        if (this.props.constructorDetails !== null) {
            const list = this.props.constructorDetails.Races.map(elem =>
                <tr data-name={elem.Circuit.circuitId} className="data" key={elem.round}>
                    <td className="round">{elem.round}</td>
                    <td className="race">{elem.raceName}</td>
                    <td className="qualPos">{elem.Results[0].grid}</td>
                    <td className="laps">{elem.Results[0].laps}</td>
                    <td className="finished">{elem.Results[0].position}</td>
                    <td className="points">{elem.Results[0].points}</td>
                </tr>);

            return (
                <tbody>
                {list}
                </tbody>
            )
        } else {
            return (
                null
            )
        }
    }
}
