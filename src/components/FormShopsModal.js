'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';

let FormShopsModal = React.createClass({
    getInitialState() {
        return {
            showModal:false
        };
    },

    render () {
            return (
            <div>
                <Modal show={this.props.win} className="winners-container">
                    <div className="modal-container ">
                        <div className="close-button"  onClick={this.props.closeShopsModal}> </div>
                        <div className="row">
                            <div className="title-container">
                                <div className="modal-container__title"> Магазини продажу продукції</div>
                                <span className="logo-modal"></span>
                            </div> 
                
                            <p className="modal-text modal-text__top">Купуй онлайн</p>
                            <div className="modal-image"></div>    
                            <p className="modal-text modal-text__bottom">А також у мережах</p>
                            <div className="company-images-container container col-md-12 col-sm-12 col-xs-12">
                                <div className="row companies-wrapper">
                                    <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company1-image "></div>
                                        </div> 
                                        
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company2-image"></div>
                                        </div> 
                                        
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company3-image"></div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company4-image"></div>
                                        </div> 
                                        
                                    </div>
                                </div>
                                <div className="row companies-wrapper">
                                    <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company5-image"></div>
                                        </div> 
                                            
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company6-image"></div>
                                        </div> 
                                            
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company7-image"></div>
                                        </div>
                                            
                                        </div> 
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company8-image"></div>
                                        </div>
                                        
                                    </div> 
                                </div>    
                                
                                <div className="row companies-wrapper">
                                    <div className="  col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company9-image"></div>
                                        </div>
                                            
                                        </div>
                                        <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company10-image"></div>
                                        </div>
                                            
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company11-image"></div>
                                        </div> 
                                            
                                        </div>
                                        <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company12-image"></div>
                                        </div> 
                                    </div>
                                </div>
                                

                                <div className="row companies-wrapper">
                                    <div className="  col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company13-image"></div>
                                        </div>
                                            
                                        </div>
                                        <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company14-image"></div>
                                        </div>
                                            
                                        </div>
                                        <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company15-image"></div>
                                        </div>
                                            
                                        </div>
                                        <div className=" col-md-3 col-sm-3 col-xs-3">
                                        <div className="company-image">
                                            <div className="company16-image"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>  
                </Modal>
            </div> 
        )
    }
});


module.exports = FormShopsModal;

