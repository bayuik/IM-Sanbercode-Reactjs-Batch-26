import React, {Component} from 'react';
import "./tugas11.css";

class Tugas11 extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 100,
        }
    }

    componentDidMount(){
        if(this.props.start !== undefined){
            this.setState({time: this.props.start})
        }

        this.timerDate = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerDate)
    }

    tick(){
        this.setState({
            time: this.state.time - 1,
        });
    }

    render(){
        if(this.state.time > 0){
            return (
                <div className="timeContainer">
                    <h1>Sekarang jam - {new Date().toLocaleTimeString()}</h1>
                    <h1>Hitung mundur {this.state.time}</h1>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Tugas11;