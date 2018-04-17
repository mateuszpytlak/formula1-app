import React from 'react';
import {Logo} from "./Logo.jsx";
import {Navigation} from "./Navigation.jsx";

export class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="page_wrap">
                    <Logo/>
                    <Navigation/>
                </div>
            </div>
        )
    }
}