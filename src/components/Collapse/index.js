import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';

//Style
import './style.sass'

export default class Collapse extends Component {

    state = {
        height: 0
    }

    collapseToggle = () => {
        this.setState({ 
            height: this.state.height === 0 ? 'auto' : 0
        })
    }

    render() {
        return (
            <div>
                <div className="collapse-bar" onClick={this.collapseToggle}>{this.props.title}</div>
                <AnimateHeight
                    duration={ 500 }
                    height={ this.state.height }
                >
                    <div className="collapse-container">
                        {this.props.children}
                    </div>
                </AnimateHeight>   
            </div>
        )
    }
}
