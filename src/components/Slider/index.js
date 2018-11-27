import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.esm.bundle';

//Style
import 'swiper/dist/css/swiper.min.css'
import './style.sass'

export default class Slider extends Component {

    componentDidMount(){
        this.props.classControl ?
            new Swiper('.'+this.props.classControl, this.props.options )
        :
           console.log('erro')
    }

  render() {
    return (
        <div className={'swiper-container '+this.props.classControl}>
            <div className="swiper-wrapper">
                {this.props.children}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
  }
}

export class Slide extends Component {
    render() {
        return (
            <div className="swiper-slide">{this.props.children}</div>
        )
    }
}