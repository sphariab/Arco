'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';

var RegistrationForm = React.createClass({
    getInitialState() {
        return {
            showModal:false
        };
    },

    render () {
        return (
            <div>
                <Modal show={this.props.win} >
                    <div className="modal-container form-modal">
                        <div className="close-button"  onClick={this.props.closeRegModal}> </div>
                        <div className="row">
                            <div className="title-container">
                                <div className="modal-container__title">Дякуємо за реєстрацію!</div>
                            </div> 
                
                            <p className="modal-text modal-text__reg ">Ваш код успішно зареєстровано, чекайте на розіграш подарунків акції.</p>
   
                            <p className="modal-text__orange">Більше кодів, більша ймовірність виграшу!</p>
                            <button 
                                type="submit" 
                                className="registration-button modal-button"
                                onClick={this.props.closeRegModal}
                                >ГАРАЗД!</button>
                        </div>
                    </div>  
                </Modal> 
            </div> 
        )
    }
});

module.exports = RegistrationForm;

