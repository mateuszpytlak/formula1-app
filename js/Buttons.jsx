import React from 'react';

export class Buttons extends React.Component {

    render() {
        return (
            <div className="buttons">
                {/*<NavLink to="/driverStandings" onClick={this.props.action} data-value="driverStandings">Drivers</NavLink>*/}
                {/*<NavLink to="/constructorStandings" onClick={this.props.action} data-value="constructorStandings">Constructors</NavLink>*/}
                <div onClick={this.props.action} data-value="driverStandings">Drivers</div>
                <div onClick={this.props.action} data-value="constructorStandings">Constructors</div>
            </div>
        )
    }
}



