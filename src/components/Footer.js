'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';
import FormShopsModal from '../components/FormShopsModal';
import FormWinnersModal from '../components/FormWinnersModal';

let Footer = React.createClass({
    getInitialState() {
        return {
            showShopsModal:false,
            showWinnersModal:false
        };
    },
    openWinnersModal () {
        let modalWindowStatus = this.props.modalStates(this.props.Actions.showModal(), this.props.Actions.showModal().type);
        this.setState({
            showWinnersModal:modalWindowStatus.showModal
        });
    },

    openShopsModal () {
        let modalWindowStatus = this.props.modalStates(this.props.Actions.showModal(), this.props.Actions.showModal().type);
        this.setState({
            showShopsModal:modalWindowStatus
        });
    },

    closeWinnersModal () {
        let modalWindowStatus = this.props.modalStates(this.props.Actions.showModal(), this.props.Actions.closeModal().type);
        this.setState({
            showWinnersModal:modalWindowStatus.showModal    
        });

    },

    closeShopsModal () {
        let modalWindowStatus = this.props.modalStates(this.props.Actions.closeModal(), this.props.Actions.closeModal().type);
        this.setState({
            showShopsModal: modalWindowStatus.showModal    
        });

    },
    render () {
        return (
            <footer role="navigation">
                <div className="container">
                    <div className="row">
                        <h3 className="footer-title">Розповідай друзям</h3>
                        <div className="" role="navigation">
                            <div className="navbar-header__list">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <a className="navbar-header__link" href="">Правила</a>
                                    </li>
                                    <li>
                                        <a className="navbar-header__link" href="">Подарунки</a>
                                    </li>
                                    <li>
                                        <a className=" footer-facebook" href=""  target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className= "vk-link" href=""  target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className=" footer-instagram" href=""  target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className="navbar-header__link"  onClick={this.openWinnersModal}>Переможцi</a>
                                    </li>
                                    <li className="shops-wrapper">
                                        <a className="navbar-header__link shops"  onClick={this.openShopsModal}>Де придбати?</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <p className="footer-copyright">2016 © ARKO</p>

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
                 <FormShopsModal win={this.state.showShopsModal}
                 closeShopsModal={this.closeShopsModal}/>

                <FormWinnersModal win={this.state.showWinnersModal}
                 winnersList={this.props.winnersList}
                 closeWinnersModal={this.closeWinnersModal}/>
            </footer>
        )
    }
});

module.exports = Footer;