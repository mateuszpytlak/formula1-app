import React from 'react';
import {Standings} from "./Standings.jsx";
import {Header} from "./Header.jsx";

export class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Standings/>
            </div>
        )
    }
}