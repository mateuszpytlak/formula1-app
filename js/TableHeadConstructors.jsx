import React from 'react';

export class TableHeadConstructors extends React.Component {

    render() {
        if (this.props.data !== null) {
            return (
                <thead>
                <tr>
                    <th colSpan="2" className="season">Season: {this.props.data.season}</th>
                    <th colSpan="3" className="grandprix">Total GrandPrix: {this.props.data.StandingsLists[0].round}</th>
                </tr>
                <tr>
                    <th className="position">Position</th>
                    <th className="constructor">Constructor</th>
                    <th className="nationality">Nationality</th>
                    <th className="points">Points</th>
                    <th className="wins">Wins</th>
                </tr>
                </thead>
            )
        } else {
            return (
                null
            )
        }

    }
}