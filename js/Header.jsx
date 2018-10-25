import React from 'react';
import {Logo} from "./Logo.jsx";
import {EnterButton} from "./EnterButton.jsx";
import {Timer} from "./Timer.jsx";    


export class Header extends React.Component {


    render() {
        return (
            <div className="header">
                <div className="page_wrap">
                    <Logo />
                    <Timer />
                    <EnterButton action={this.props.action} />
                </div>

            </div>
        )
    }
}