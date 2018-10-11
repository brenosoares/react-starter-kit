import React, { Component } from 'react'

// Style
import './style.sass'

// Images and Assets
import logo from '../../assets/logo.svg'

// Styles
import './style.sass'

// Components
import Menu from './components/Menu';

export default class TopBar extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-logo">
                        <img src={logo} alt="Red Dragon"/>
                    </div>
                    <Menu />
                </div>
            </header>
        )
    }
}
