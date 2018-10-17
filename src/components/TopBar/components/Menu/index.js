import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import {ic_menu} from 'react-icons-kit/md/ic_menu'

// Style
import './style.sass'

export default class Menu extends Component {

    state = {
        menuBurger: false
    }

    menuToggle = () => {
        this.setState({menuBurger: !this.state.menuBurger})
        console.log(this.state.menuBurger);
    }

    render() {
        return (
            <div className="header-content-menu">
                <div className="menu-burger-icon" onClick={() => this.menuToggle()}>
                    <Icon icon={ic_menu} size={26}/>
                </div>
                <nav className={this.state.menuBurger ? "menu-navigation open" : "menu-navigation"}>
                    <ul>
                        <li>Home</li>
                        <li>Components</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
