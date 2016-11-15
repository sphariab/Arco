'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm.js';

let RegistrationSection = React.createClass({
    getInitialState() {
        return {
            showRegModal:false,
            showErrorModal:false,
            number:"",
            code:""
        };
    },

    closeInfoModal () {
        this.setState({
            showErrorModal: false
        });
       
    },

    openRegModal () {
        let modalWindowStatus = this.props.modalStates(this.props.Actions.showModal(), this.props.Actions.showModal().type);
        this.setState({
            showRegModal:modalWindowStatus
        });
    },

    closeRegModal () {
        let modalWindowStatus = this.props.modalStates(this.props.Actions.showModal(), this.props.Actions.closeModal().type);
        this.setState({
            showRegModal:modalWindowStatus.showModal    
        });

    },

    openErrorModal(){
       this.setState({
            showErrorModal: true
        }); 
    },

    onChangeNumber(e){
        this.setState({
            number: e.target.value
        });
    },

    onChangeCode(e){
        this.setState({
            code: e.target.value
        });
    },

    isValid(e) {
        let number = this.state.number;
        let code = this.state.code;
        if (number.length > 0 && code.length > 0) {
            this.openRegModal()
        } else {
            this.openErrorModal()
        }
    },

    render () {
        return (
            <section id="registration" className="registration-section">
                <div className="container">
                    <div className="row">
                        <h1 className="registration-title">Реєструй коди з упаковки</h1>
                         <div className="col-md-12 col-sm-12 col-xs-12 ">
                             <div className="col-md-5 col-sm-12 col-xs-12 ">
                                <div className="input-title">контактний номер телефону</div> 
                                <span className="registration-number">+380</span>
                                <input type="number" onChange={this.onChangeNumber} id="number" className="reg-input reg-input__white" defaultValue="067" required />
                                <input type="number" onChange={this.onChangeCode} id="code" className="reg-input reg-input__yellow"  placeholder="000 00 00" required />
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 code-wrapper">
                                     <div className="input-title  col-md-7 col-sm-12 col-xs-12 ">акційний код</div>

                                     <input type="number" className="reg-input reg-input__code reg-input__yellow" placeholder="000 0000 0000" required />
                                     <button type="button"  onClick={this.isValid} className="registration-button">ЗАРЕЄСТРУВАТИ</button>
                            </div>    
                         </div>
                         
                    </div>
                    <p className="input-title registration-rules">Я погоджуюсь з <a href="" className="registration-rules_link">офіційними правилами акції</a> </p>
                </div>
                <RegistrationForm win={this.state.showRegModal}
                 closeRegModal={this.closeRegModal}/>

                <Modal show={this.state.showErrorModal}>
                    <div className="modal-container ">
                        <div className="close-button" onClick={this.closeInfoModal} > </div>
                        <p className="modal-text modal-text">Заповніть, будь ласка всі поля форми.</p>
                    </div>
                </Modal>
            </section>
        )
    }
});

module.exports = RegistrationSection;