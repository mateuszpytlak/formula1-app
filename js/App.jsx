import React from 'react';
import {Standings} from "./Standings.jsx";
import {Header} from "./Header.jsx";

const selectOptions = [];

for (let i = 2018; i > 1949; i--) {
    selectOptions.push(i);
}

export class App extends React.Component {

    handleEnterButton = () => {
        this.select.scrollIntoView({behavior: "smooth", block: "start"});
    };

    render() {
        return (
            <div>
                <Header action={this.handleEnterButton}/>
                <Standings selectRef={ el => this.select = el} />
            </div>
        )
    }
}