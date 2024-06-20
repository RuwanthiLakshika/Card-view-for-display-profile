import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
            date: new Date(),
            message:"It's time to work!"
        
        }
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timer=setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <div> Time is: {this.state.date.toISOString()} </div>
                <div> {this.state.message} </div>
            </div>
            
        )
    }
}

export default Clock;