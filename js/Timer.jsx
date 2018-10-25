import React from 'react';

export class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextRaceDate: null,
            daysToNextRace: null,
        }
    }

    componentDidMount() {
        fetch(`https://ergast.com/api/f1/current.json`)
            .then(resp => resp.json())
            .then(data => this.setState({nextRaceDate: data.MRData.RaceTable.Races[18].date}))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        const today = new Date();
        const nextRace = new Date(this.state.nextRaceDate);
        const oneDay = 1000 * 60 * 60 * 24;
    
        const remainingTime = Math.ceil((nextRace.getTime() - today.getTime()) / oneDay);
        
        console.log(today);
        console.log(nextRace);
        console.log(remainingTime);
        
        if(this.state.nextRaceDate === null) {
            this.setState({
                daysToNextRace: remainingTime,
            })
    
        }
        // this.forceUpdate()
        // console.log(this.state.daysToNextRace);
    }


    render() {
        console.log(this.state);
        console.log(this.state.daysToNextRace);
        return (
            <div className="timer">
                <div>Days to next race: {this.state.daysToNextRace}</div>
            </div>
        )
    }

}