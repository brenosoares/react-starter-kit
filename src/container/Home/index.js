import React, { Component } from 'react'

// Style
import './style.sass'
import TopBar from '../../components/TopBar';

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <main className="main">
                    <section>
                        <article className="description">
                            <h2>Fácil de usar e começar seus projetos.</h2>
                            <p>Um prático e rápido kit inicial para desenvolvimento em ReactJs.</p>
                            <p>Esse kit foi baseado no <a href="#">Create React App</a> e já conta com alguns componentes personalizados e funcionalidades já conhecidas.</p>
                        </article>
                        <nav className="navigation-home">
                            <ul>
                                <li>Como está a estrutura?</li>
                                <li>Conheça os componentes.</li>
                                <li>Criando Rotas</li>
                                <li>Consumindo suas APIs</li>
                            </ul>
                        </nav>
                    </section>
                </main>
                <footer className="footer-gay">
                    Designed with ♥ by <a href="#">Breno Sores</a>. Licensed under the <a href="#">MIT License</a>.
                </footer>
            </div>
        )
    }
}
