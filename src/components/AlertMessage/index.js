import React, { Component } from 'react'

// Style
import './style.sass'

export default class AlertMessage extends Component {

    constructor(){
        super()
        this.state = {
            type: 'primary',
        }
    }

    componentDidMount(){
        if(this.props.messageType){
            this.setState({type: this.props.messageType})
        }
    }

    render() {
        return (
            <div className={`${this.state.type} ${this.props.onlyMessage ? 'only-message' : null} alert`}>
                <div className="alert-msg">
                    <p>{this.props.messageArlert}</p>
                </div>
            </div>
        )
    }
}
