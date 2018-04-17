import React from 'react';
import {TableBody} from "./TableBody.jsx";
import {TableHead} from "./TableHead.jsx";
import {Buttons} from "./Buttons.jsx";


// const fetchUrl = `http://ergast.com/api/f1/${this.state.year}/driverStandings.json`;

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
        }
    }

    componentDidMount() {
        // const fetchUrl = `http://ergast.com/api/f1/${this.state.year}/driverStandings.json`;

        fetch('http://ergast.com/api/f1/2018/driverStandings.json')
        // fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => this.setState({data: data.MRData.StandingsTable}))
            .catch(err => console.log(err))
    }

    componentWillUpdate() {
        const fetchUrl = `http://ergast.com/api/f1/${this.state.year}/driverStandings.json`;

        // fetch('http://ergast.com/api/f1/2018/driverStandings.json')
        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => this.setState({data: data.MRData.StandingsTable}))
            .catch(err => console.log(err))
    }

    handleInputYear = (event) => {
        this.setState({
            year: event.target.value
        });
        console.log(this.state.year);
    };


    render() {

        const optionList = selectOptions.map(el => <option key={el}>{el}</option>);

        if (this.state.data !== null) {
            return (
                <div className="page_wrap">
                    <div className="styled-select blue">
                        <select value={this.state.year} onChange={this.handleInputYear}>
                            {optionList}
                        </select>
                    </div>
                    <Buttons />
                    <fieldset>
                        <legend>Driver standings</legend>
                        <table>
                            <TableHead data={this.state.data}/>
                            <TableBody data={this.state.data}/>
                        </table>
                    </fieldset>
                </div>
            )
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
