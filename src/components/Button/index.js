import React, { Component } from 'react'

//Style
import './style.sass'
export default class Button extends Component {

    constructor(){
        super()
        this.state = {
            type: 'primary',
        }
    }

    componentDidMount(){
        if(this.props.buttonType){
            this.setState({type: this.props.buttonType})
        }
    }

    render() {
        return (
                <button className={`${this.state.type}${this.props.outline ? '-outline' : ''} button`}>
                    {this.props.textButton}
                </button>
        )
    }
}
