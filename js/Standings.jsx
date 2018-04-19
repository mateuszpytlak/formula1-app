import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Buttons} from "./Buttons.jsx";
import {DriverStandings} from "./DriverStandings.jsx";
import {ConstructorStandings} from "./ConstructorStandings.jsx";
import {DriverDetails} from "./DriverDetails.jsx";

const selectOptions = [];

for (let i = 2018; i > 1949; i--) {
    selectOptions.push(i);
}

export class Standings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            year: 2017,
            standings: 'driverStandings',
            driverDetails: null,
        }
    }

    componentDidMount() {
        fetch(`http://ergast.com/api/f1/${this.state.year}/${this.state.standings}.json`)
            .then(resp => resp.json())
            .then(data => this.setState({data: data.MRData.StandingsTable}))
            .catch(err => console.log(err))
    }

    // myFetch(url, data1, data2) {
    //     fetch(`http://ergast.com/api/f1/${this.state.year}/${this.state.standings}.json`)
    //         .then(resp => resp.json())
    //         .then(data => this.setState({data: data.MRData.StandingsTable}))
    //         .catch(err => console.log(err))
    // }

    handleInputYear = (event) => {
        this.setState({
            data: null,
        });
        const yearValue = event.target.value;
        const fetchUrl = `http://ergast.com/api/f1/${yearValue}/${this.state.standings}.json`;

        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => this.setState({data: data.MRData.StandingsTable, year: yearValue}))
            .catch(err => console.log(err));
    };

    handleStandings = (event) => {
        this.setState({
            data: null,
        });
        const standingsValue = event.target.dataset.value;
        const fetchUrl = `http://ergast.com/api/f1/${this.state.year}/${standingsValue}.json`;

        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => this.setState({data: data.MRData.StandingsTable, standings: standingsValue}))
            .catch(err => console.log(err));
    };

    handleShowDetails = (event) => {
        const driverDetails = event.target.parentNode.dataset.name;
        const fetchUrl = `http://ergast.com/api/f1/${this.state.year}/drivers/${driverDetails}/results.json`;

        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => this.setState({driverDetails: data.MRData.RaceTable}))
            .catch(err => console.log(err));
    };


    render() {
        const optionList = selectOptions.map(el => <option key={el}>{el}</option>);

        if (this.state.data !== null) {
            if (this.state.standings === 'driverStandings') {
                return (
                    <div className="page_wrap">
                        <div className="styled-select blue">
                            <select value={this.state.year} onChange={this.handleInputYear}>
                                {optionList}
                            </select>
                        </div>
                        {/*<HashRouter>*/}
                        {/*<div>*/}
                        <Buttons action={this.handleStandings} standings={this.state.standings}/>
                        {/*<Switch>*/}
                        {/*<Route path="/driverStandings" component={DriverStandings} data={this.state.data}/>*/}
                        {/*<Route path="/constructorStandings" component={ConstructorStandings}*/}
                        {/*data={this.state.data}/>*/}
                        <DriverStandings actionShowDetails={this.handleShowDetails} data={this.state.data}/>
                        {/*</Switch>*/}
                        {/*</div>*/}
                        {/*</HashRouter>*/}
                        {this.state.driverDetails && <DriverDetails driverDetails={this.state.driverDetails}/>}
                    </div>
                )
            } else if (this.state.standings === 'constructorStandings') {
                return (
                    <div className="page_wrap">
                        <div className="styled-select blue">
                            <select value={this.state.year} onChange={this.handleInputYear}>
                                {optionList}
                            </select>
                        </div>
                        {/*<HashRouter>*/}
                        {/*<div>*/}
                        <Buttons action={this.handleStandings} standings={this.state.standings}/>
                        {/*<Switch>*/}
                        {/*<Route path="/driverStandings" component={DriverStandings} data={this.state.data}/>*/}
                        {/*<Route path="/constructorStandings" component={ConstructorStandings}*/}
                        {/*data={this.state.data}/>*/}
                        <ConstructorStandings data={this.state.data}/>
                        {/*</Switch>*/}
                        {/*</div>*/}
                        {/*</HashRouter>*/}
                        {this.state.driverDetails && <div>{this.state.driverDetails}</div>}
                    </div>
                )
            }

        } else {
            return (
                <div className="styled-select blue">
                    <select onChange={this.handleInputYear}>
                        {optionList}
                    </select>
                </div>
            )
        }

    }
}
