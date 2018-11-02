import React from 'react';

export class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextRaceDate: null,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch(`https://ergast.com/api/f1/current.json`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    nextRaceDate: data.MRData.RaceTable.Races[19].date + 'T' + data.MRData.RaceTable.Races[19].time.substring(0,8),
                });
                
                //pobranie aktualnej daty
                const today = new Date()
                console.log(`Data teraz: ${today}`);

                //pobranie daty wyscigu
                const raceDate = new Date(this.state.nextRaceDate);
                console.log(`Data wyscigu: ${raceDate}`);

                //przeliczenia z ms
                const oneDay = 1000 * 60 * 60 * 24;
                const oneHour = 1000 * 60 * 60;
                const oneMinute = 1000 * 60;
                const oneSecond = 1000;
    
                //pozostałe dni
                const remainingDays = Math.floor((raceDate.getTime() - today.getTime()) / oneDay );
                console.log(`Ramaining Days: ${remainingDays}`);
                this.setState({remainingDays: remainingDays,});

                //pozostałe godziny
                const remainingHours = Math.floor(((raceDate.getTime() - today.getTime()) / oneHour) - remainingDays * 24) ;
                console.log(`Remaining hours: ${remainingHours}`);
                this.setState({remainingHours: remainingHours,});

                //pozostałe minuty
                const remainingMinutes = Math.floor(((raceDate.getTime() - today.getTime()) / oneMinute) - remainingDays * 24 * 60 - remainingHours * 60) ;
                console.log(`Remaining minutes: ${remainingMinutes}`);
                this.setState({remainingMinutes: remainingMinutes,});

                //pozostałe sekundy
                const remainingSeconds = Math.floor(((raceDate.getTime() - today.getTime()) / oneSecond) - remainingDays * 24 * 60 * 60 - remainingHours * 60 * 60 - remainingMinutes * 60) ;
                console.log(`Remaining seconds: ${remainingSeconds}`);
                this.setState({remainingSeconds: remainingSeconds,});

        })
            .catch(err => console.log(err))
    }

    render() {
        // console.log(this.state);
        // console.log(this.state.daysToNextRace);
        return (
            <div className="timer">
                <div>Days to next race: {this.state.remainingDays}</div>
                <div>Hours to next race: {this.state.remainingHours}</div>
                <div>Minutes to next race: {this.state.remainingMinutes}</div>
                <div>Seconds to next race: {this.state.remainingSeconds}</div>
            </div>
        )
    }

}