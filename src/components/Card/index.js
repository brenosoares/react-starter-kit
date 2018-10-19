import React, { Component } from 'react'

// Style
import './style.sass'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                {this.props.cardImage ?
                    <div className="card-image">
                        <img src="https://source.unsplash.com/600x400/?nature" alt=""/>
                    </div>
                    :
                    null
                }
                <div className="cart-text-cont">
                    <h4 className="card-title">{this.props.cardTitle}</h4>
                    <div className="card-title">
                        {this.props.cardText}
                    </div>
                    {this.props.cardButton}
                </div>
            </div>
        )
    }
}
