'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';
import modalStates from '../reducers';

import FormShopsModal from '../components/FormShopsModal';
import FormWinnersModal from '../components/FormWinnersModal';

let Header = React.createClass({
    getInitialState() {
        return {
            showShopsModal:false,
            showWinnersModal:false,
            searchString: ''
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
            <nav className=" header-nav" role="navigation">
                <div className="container">
                    <div className="navbar-header__list">
                        <a href="#" className="logo"></a>
                        <ul className="nav navbar-nav">
                            <li>
                                <a className="navbar-header__link" href="">Правила</a>
                            </li>
                            <li>
                                <a className="navbar-header__link" onClick={this.openWinnersModal}>Переможцi</a>
                            </li>
                            <li>
                                <a className="navbar-header__link shops" onClick={this.openShopsModal} >Де придбати?</a>
                            </li>
                            <li>
                                <a href="https://vk.com" target="_blank" className="vk-link"></a>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                </div>
 

                <FormShopsModal win={this.state.showShopsModal}
                 closeShopsModal={this.closeShopsModal}/>

                <FormWinnersModal win={this.state.showWinnersModal}
                 winnersList={this.props.winnersList}
                 closeWinnersModal={this.closeWinnersModal}/> 
            </nav>

        )
    }
});

module.exports = Header;