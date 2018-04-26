import React from 'react';

export class EnterButton extends React.Component {


    render() {
        return (
            <div id="enter" onClick={this.props.action}>Enter</div>
        )
    }
}



