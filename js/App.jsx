import React from 'react';

export class App extends React.Component {

    componentDidMount() {
        fetch('http://ergast.com/api/f1/2008/driverStandings')
            .then( resp => resp.j