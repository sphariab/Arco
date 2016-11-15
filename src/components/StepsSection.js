'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';

let StepsSection = React.createClass({
    render () {
        return (
        <section id="steps" className="steps-section">
            <div className="container">
                <div className="row">
                    <div className=" col-md-4 col-sm-12 col-xs-12 step-wrapper">
                        <div className=" col-md-6 col-sm-6 col-xs-6 step">
                            <p className="step-text__yellow">Дивись</p>
                            <p className="step-text__yellow">Дiлись</p>
                            <p className="step-text__gray">xtrm роликами</p>
                            <p className="step-text__gray">з друзями</p>
                        </div>
                        <div className=" col-md-6 col-sm-6 col-xs-6">
                            <span className="step-text__yellow yellow step-text__yellowAnd">&</span> 
                            <span className="step-number">01</span>
                            <span className="step-line"></span>
                            <a href="" className="step-button">Переглянути</a>


                        </div>
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12 step-wrapper">
                
                            <div className=" col-md-6 col-sm-6 col-xs-6 step">
                                <p className="step-text__yellow">Купуй</p>
                                <p className="step-text__yellow">Реєструй</p>
                                <p className="step-text__gray">Промокоди з упаковки</p>
                                <p className="step-text__gray">з друзями</p>
                            </div>
                            <div className=" col-md-6 col-sm-6 col-xs-6">
                                <span className="step-text__yellow step-text__yellowAnd">&</span> 
                                <span className="step-number">02</span>
                                <span className="step-line"></span>
                                <a href="" className="step-button shops">Де придбати?</a>
                            </div>
                      
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12 step-wrapper">
                        <div className=" col-md-6 col-sm-6 col-xs-6 step">
                            <p className="step-text__yellow">Грай</p>
                            <p className="step-text__yellow">Вигравай</p>
                            <p className="step-text__gray">Круті</p>
                            <p className="step-text__gray">призи</p>
                        </div>
                        <div className=" col-md-6 col-sm-6 col-xs-6">
                            <span className="step-text__yellow yellow step-text__yellowAnd">&</span> 
                            <span className="step-number">03</span>
                            <span className="step-line"></span>
                            <a href="" className="step-button">Переможці</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="intro-arrow" href="#registration"></a>
        </section>
        )
    }
});

module.exports = StepsSection;