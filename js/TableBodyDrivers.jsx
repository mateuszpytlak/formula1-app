import React from 'react';

export class TableBodyDrivers extends React.Component {


    render() {
        if (this.props.data !== null) {
            const list = this.props.data.StandingsLists[0].DriverStandings.map(elem =>
            <tr className="data" key={elem.position}>
                <td className="position">{elem.position}</td>
                <td className="driver">{elem.Driver.givenName} {elem.Driver.familyName}</td>
                <td className="team">{elem.Constructors[0].name}</td>
                <td className="points">{elem.points}</td>
                <td className="wins">{elem.wins}</td>
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