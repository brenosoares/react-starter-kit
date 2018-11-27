import React, { Component } from 'react'


// Style
import './style.sass'
import AlertMessage from '../../components/AlertMessage';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Slider, {Slide} from '../../components/Slider';
import Collapse from '../../components/Collapse';

export default class ComponentsContainer extends Component {

    

    render() {
        return (
            <div className="components-container">
                <main className="main-components">
                    <h2>Componets</h2>
                    <div className="component-container">
                        <div className="component-example">
                            <div className="component-example-title">
                                <h3>Titulos</h3>
                            </div>
                            <div className="component-example-description">
                                <p>Titulos baseados na escala de 16px utilizando a medida rem</p>
                            </div>
                            <div className="components-example-item">
                                <h1>Header h1</h1>
                            </div>
                            <div className="components-example-item">
                                <h2>Header h2</h2>
                            </div>
                            <div className="components-example-item">
                                <h3>Header h3</h3>
                            </div>
                            <div className="components-example-item">
                                <h4>Header h4</h4>
                            </div>
                            <div className="components-example-item">
                                <h5>Header h5</h5>
                            </div>
                            <div className="components-example-item">
                                <h6>Header h6</h6>
                            </div>
                        </div>
                        <div className="component-example">
                            <div className="component-example-title">
                                <h3>Mensagens de Alerta</h3>
                            </div>
                            <div className="component-example-description">
                                <p>Mensagens de alerta para uso diverso, combinando mensagens de erro, sucesso e atenção.</p>
                                <p>Para usar basta chamar o component <code>&lt;AlertMessage /&gt;</code> e utilizar os props <code>messageArlert="Mensagem do Alerta" messageType="Tipo de Alerta"</code> para personalizar</p>
                            </div>
                            <div className="components-example-item">
                                <AlertMessage messageArlert="A simple primary type alert message"/>
                                <AlertMessage messageArlert="A simple success type alert message" messageType="success"/>
                                <AlertMessage messageArlert="A simple error type alert message" messageType="error"/>
                                <AlertMessage messageArlert="A simple warning type alert message" messageType="warning"/>
                            </div>
                            <div className="component-example-description">
                                <p>Caso queira apenas a mensagem utilize o props <code>onlyMessage</code></p>
                            </div>
                            <div className="components-example-item">
                                <AlertMessage messageArlert="A simple primary type alert message" onlyMessage/>
                                <AlertMessage messageArlert="A simple success type alert message" messageType="success" onlyMessage/>
                                <AlertMessage messageArlert="A simple error type alert message" messageType="error" onlyMessage/>
                                <AlertMessage messageArlert="A simple warning type alert message" messageType="warning" onlyMessage/>
                            </div>
                        </div>
                        <div className="component-example">
                            <div className="component-example-title">
                                <h3>Botões</h3>
                            </div>
                            <div className="component-example-description">
                                <p>Botões personalizáveis com estilos predefinidos e de fácil utilização</p>
                                <p>Para usar basta chamar o component <code>&lt;Button /&gt;</code> e utilizar os props <code>textButton="Texto do botão" buttonType="Tipo de botão"</code> para personalizar</p>
                            </div>
                            <div className="components-example-item">
                                <Button textButton="Primary" buttonType="primary"/>
                                <Button textButton="Cancel" buttonType="cancel"/>
                                <Button textButton="Success" buttonType="success"/>
                                <Button textButton="Error" buttonType="error"/>
                                <Button textButton="Warning" buttonType="warning"/>
                            </div>
                            <div className="component-example-description">
                                <p>Caso queira o estilo outline utilize o props <code>outline</code></p>
                            </div>
                            <div className="components-example-item">
                                <Button textButton="Primary" buttonType="primary" outline/>
                                <Button textButton="Cancel" buttonType="cancel" outline/>
                                <Button textButton="Success" buttonType="success" outline/>
                                <Button textButton="Error" buttonType="error" outline/>
                                <Button textButton="Warning" buttonType="warning" outline/>
                            </div>
                        </div>
                        <div className="component-example">
                            <div className="component-example-title">
                                <h3>Cards</h3>
                            </div>
                            <div className="component-example-description">
                                <p>Cards responsivos e flexivos</p>
                                <p>Para usar basta chamar o component <code>&lt;Card /&gt;</code> e utilizar os props <code>cardImage="Se quiser imagem" cardTitle="Título" cardText="Texto do card" cardButton="Se quiser passar um component para o botão"</code> para personalizar</p>
                            </div>
                            <div className="components-example-item">
                                <div className="example-item-row">
                                    <div className="example-item-column w-3">
                                        <Card
                                            cardImage="https://source.unsplash.com/600x400/?nature"
                                            cardTitle="Card Title"
                                            cardText="Qui id adipisicing cupidatat enim laborum id et officia fugiat ad nostrud anim reprehenderit eu. Consequat irure aliquip esse pariatur pariatur nulla officia irure dolor officia ipsum ea eiusmod deserunt. Id aliqua deserunt eiusmod exercitation ea amet consectetur. Dolor occaecat Lorem veniam fugiat."
                                            cardButton={<Button textButton="Primary" buttonType="primary"/>}
                                        />
                                    </div>
                                    <div className="example-item-column w-3">
                                        <Card
                                            cardTitle="Card Title"
                                            cardText="Qui id adipisicing cupidatat enim laborum id et officia fugiat ad nostrud anim reprehenderit eu. Consequat irure aliquip esse pariatur pariatur nulla officia irure dolor officia ipsum ea eiusmod deserunt. Id aliqua deserunt eiusmod exercitation ea amet consectetur. Dolor occaecat Lorem veniam fugiat."
                                            cardButton={<Button textButton="Primary" buttonType="primary"/>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="component-example">
                            <div className="component-example-title">
                                <h3>Slide</h3>
                            </div>
                            <div className="component-example-description">
                                <p>Slides baseado no <a href="http://idangero.us/swiper/">Swiper</a></p>

                            </div>
                            <div className="components-example-item">
                                <Slider 
                                    classControl="classe-controle"
                                    options={{
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                        autoplay: {
                                            delay: 3000
                                        },
                                        pagination: {
                                            el: '.swiper-pagination',
                                            type: 'bullets',
                                            clickable: true
                                        },
                                        navigation: {
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        },
                                    }}
                                >
                                    <Slide><img src="https://source.unsplash.com/1000x350/?nature" alt=""/></Slide>
                                    <Slide><img src="https://source.unsplash.com/1000x350/?nature" alt=""/></Slide>
                                    <Slide><img src="https://source.unsplash.com/1000x350/?nature" alt=""/></Slide>                                    
                                </Slider>
                            </div>
                        </div>

                        <div className="component-example">
                            <div className="component-example-title">
                                <h3>Collapse</h3>
                            </div>
                            <div className="component-example-description">
                                <p>Botão que que mostra ou esconde conteudo agregado ao componente</p>
                            </div>
                            <div className="components-example-item">
                                <Collapse title="Toggle Collapse">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus tellus, porta non aliquam semper, viverra vel quam. In hac habitasse platea dictumst. Phasellus condimentum orci sed ipsum ornare, sed vestibulum nisl suscipit. Aenean venenatis est sit amet leo maximus, et condimentum nibh interdum. Proin semper ex eget metus placerat, blandit laoreet nisi faucibus. Ut varius malesuada dolor, porta sagittis tellus blandit et. Aliquam erat volutpat. In facilisis dolor sapien, a tempus ante mattis eget. Vestibulum vulputate rutrum purus at ultrices. Nam ultrices est vel consectetur interdum. Suspendisse ac quam quam. Maecenas finibus ullamcorper aliquam. Nunc sodales a odio ut placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                </Collapse>
                                <Collapse title="Toggle Collapse">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus tellus, porta non aliquam semper, viverra vel quam. In hac habitasse platea dictumst. Phasellus condimentum orci sed ipsum ornare, sed vestibulum nisl suscipit. Aenean venenatis est sit amet leo maximus, et condimentum nibh interdum. Proin semper ex eget metus placerat, blandit laoreet nisi faucibus. Ut varius malesuada dolor, porta sagittis tellus blandit et. Aliquam erat volutpat. In facilisis dolor sapien, a tempus ante mattis eget. Vestibulum vulputate rutrum purus at ultrices. Nam ultrices est vel consectetur interdum. Suspendisse ac quam quam. Maecenas finibus ullamcorper aliquam. Nunc sodales a odio ut placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                </Collapse>
                                <Collapse title="Toggle Collapse">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus tellus, porta non aliquam semper, viverra vel quam. In hac habitasse platea dictumst. Phasellus condimentum orci sed ipsum ornare, sed vestibulum nisl suscipit. Aenean venenatis est sit amet leo maximus, et condimentum nibh interdum. Proin semper ex eget metus placerat, blandit laoreet nisi faucibus. Ut varius malesuada dolor, porta sagittis tellus blandit et. Aliquam erat volutpat. In facilisis dolor sapien, a tempus ante mattis eget. Vestibulum vulputate rutrum purus at ultrices. Nam ultrices est vel consectetur interdum. Suspendisse ac quam quam. Maecenas finibus ullamcorper aliquam. Nunc sodales a odio ut placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
