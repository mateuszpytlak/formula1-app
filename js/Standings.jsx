import React from 'react';
import {Buttons} from "./Buttons.jsx";
import {DriverStandings} from "./DriverStandings.jsx";
import {ConstructorStandings} from "./ConstructorStandings.jsx";
import {DriverDetails} from "./DriverDetails.jsx";


//--------------COPIED
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
            constructorDetails: null,
        }
    }

    componentDidMount() {
        fetch(`http://ergast.com/api/f1/${this.state.year}/${this.state.standings}.json`)
            .then(resp => resp.json())
            .then(data => this.setState({data: data.MRData.StandingsTable}))
            .catch(err => console.log(err))
    }

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

        const buttons = document.querySelector('div.buttons');

        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => {
                this.setState({data: data.MRData.StandingsTable, standings: standingsValue});
                console.log('i just scrolled');
                buttons.scrollIntoView();
                console.log(buttons);
            })
            .catch(err => console.log(err));
    };

    handleDriverShowDetails = (event) => {
        const driverDetails = event.target.parentNode.dataset.name;
        const fetchUrl = `http://ergast.com/api/f1/${this.state.year}/drivers/${driverDetails}/results.json`;

        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => {
                this.setState({driverDetails: data.MRData.RaceTable});
                this.fieldset.scrollIntoView({behavior: "smooth", block: "start"});  //TODO: scrollowanie na fieldset
            })
            .catch(err => console.log(err))
    };

    render() {
        const optionList = selectOptions.map(el => <option key={el}>{el}</option>);

        if (this.state.data !== null) {
            if (this.state.standings === 'driverStandings') {
                return (
                    <div className="page_wrap">
                        <div className="styled-select blue">
                            <select ref={this.props.selectRef} value={this.state.year} onChange={this.handleInputYear}>
                                {optionList}
                            </select>
                        </div>
                        <Buttons action={this.handleStandings} standings={this.state.standings}/>
                        <DriverStandings actionShowDetails={this.handleDriverShowDetails} data={this.state.data}/>
                        {this.state.driverDetails &&
                        <DriverDetails fieldsetRef={el => this.fieldset = el}
                                       driverDetails={this.state.driverDetails}/>}
                    </div>
                )
            } else if (this.state.standings === 'constructorStandings') {
                return (
                    <div className="page_wrap">
                        <div className="styled-select blue">
                            <select ref={this.props.selectRef} value={this.state.year} onChange={this.handleInputYear}>
                                {optionList}
                            </select>
                        </div>
                        <Buttons action={this.handleStandings} standings={this.state.standings}/>
                        <ConstructorStandings data={this.state.data}/>
                        {this.state.constructorDetails && <ConstructorDetails constructorDetails={this.state.constructorDetails}/>}
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
