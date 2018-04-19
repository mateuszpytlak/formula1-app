import React from 'react';

export class TableBodyConstructors extends React.Component {


    render() {
        if (this.props.data !== null) {
            const list = this.props.data.StandingsLists[0].ConstructorStandings.map(elem =>
            <tr data-name={elem.Constructor.constructorId} onClick={this.props.actionShowDetails} className="data" key={elem.position}>
                <td className="position">{elem.position}</td>
                <td className="constructor">{elem.Constructor.name}</td>
                <td className="nationality">{elem.Constructor.nationality}</td>
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