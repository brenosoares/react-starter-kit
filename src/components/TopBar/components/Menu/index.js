import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit'
import {ic_menu} from 'react-icons-kit/md/ic_menu'

// Style
import './style.sass'

export default class Menu extends Component {

    state = {
        height: window.outerWidth > 860 ? 'auto' : 0
    }

    constructor(){
        super();
        window.addEventListener('resize', () =>{
            if( window.outerWidth > 860){
                this.setState({height: 'auto'})
            }
        })
    }

    menuToggle = () => {
        this.setState({ 
            height: this.state.height === 0 ? 'auto' : 0
        })
    }

    render() {
        return (
            <div className="header-content-menu">
                <div className="menu-burger-icon" onClick={() => this.menuToggle()}>
                    <Icon icon={ic_menu} size={26}/>
                </div>
                    <nav className="menu-navigation">
                        <AnimateHeight
                            duration={ 500 }
                            height={ this.state.height }
                        >
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/components">Components</Link></li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                </AnimateHeight>
                    </nav>
            </div>
        )
    }
}
