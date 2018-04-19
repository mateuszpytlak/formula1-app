import React from 'react';

export class DriverDetailsHead extends React.Component {

    render() {
        return (
            <thead>
            <tr>
                <th colSpan="2" className="season">Season: {this.props.driverDetails.season}</th>
                <th colSpan="4" className="grandprix">Total GrandPrix: {this.props.driverDetails.Races.length}</th>
            </tr>
            <tr>
                <th className="lp">GP#</th>
                <th className="race">Race</th>
                <th className="qualPos">Qual. Pos.</th>
                <th className="laps">Laps</th>
                <th className="finished">Finished</th>
                <th className="points">Points</th>
            </tr>
            </thead>
        )
    }
}
