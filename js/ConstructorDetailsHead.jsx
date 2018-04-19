import React from 'react';

export class ConstructorDetailsHead extends React.Component {

    render() {
        return (
            <thead>
            <tr>
                <th colSpan="2" className="season">Season: {this.props.constructorDetails.season}</th>
                <th colSpan="4" className="grandprix">Total GrandPrix: {this.props.constructorDetails.Races.length}</th>
            </tr>
            <tr>
                <th className="lp">lalaalGP#</th>
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
