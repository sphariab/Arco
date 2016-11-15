'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';

let IntroSection = React.createClass({
    render () {
        return (
            <section id="intro" className="intro-section">
                <div className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="intro-content__textWrapper">
                                    <p className="intro-content__text">Слiдкуй за пригодами</p>
                                    <p className="intro-content__textBold">arcomen</p>
                                </div>
                                <div className="content__button intro-content__button">пригода перша</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <a className="intro-arrow" href="#steps"></a>
            </section>
        )
    }
});

module.exports = IntroSection;