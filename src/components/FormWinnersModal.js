'use strict';
import React from 'react';
import { Modal } from 'react-bootstrap';

var FormWinners = React.createClass({
    getInitialState() {
        return {
            showModal:false,
            searchString: '',
            winnersList: this.props.winnersList
        };
    },

    dataSearch(e){
        this.setState({searchString:e.target.value});
        let searchString = this.state.searchString.trim().toLowerCase();  
        let winnersList = this.state.winnersList;
        if (searchString.length > 0) {
            this.setState({
                winnersList:this.props.winnersList.filter (function(winner) {
                    return winner.name.toLowerCase().indexOf( searchString ) !== -1
                })
            });

        } 

        if (e.target.value.length === 0) {
            this.setState({
                winnersList: this.props.winnersList
            });
        }
    },

    getWinners(){
        let winnersList = this.state.winnersList;
        let obj = [], element;
            winnersList.map(function(winner, index) {
                element =    <tr  key={index} className="user-info">
                    <td className="winners-title winners-info">{winner.date}</td>
                    <td className="winners-title winners-info"><img src={winner.image} />
                        <span className="winners-info__name">{winner.name}</span>
                    </td>
                    <td className="winners-title winners-info">{winner.number}</td>
                  </tr>

                obj.push(element);
            });

        return obj
    },

    render () {
        return (
            <div>
                <Modal show={this.props.win} >
                    <div className="modal-container winners-modal">
                        <div className="close-button"  onClick={this.props.closeWinnersModal}> </div>
                        <div className="row">
                            <div className="title-container">
                                <div className="modal-container__title"> ПЕРЕМОЖЦІ АКЦІЇ</div>
                                <span className="logo-modal"></span>
                            </div> 
                            <input 
                                type="text" 
                                placeholder="Перевірити номер"
                                className="winners-search"
                                onChange={this.dataSearch} />   
                            <table className="table">
                                <thead>
                                  <tr className="user-info">
                                    <th className="winners-title">Дата</th>
                                    <th className="winners-title">Переможець</th>
                                    <th className="winners-title">номер телефону</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {this.getWinners()}
                                </tbody>
                            </table>
                       
                        </div>
                            
                    </div>  
                </Modal>
            </div> 
        )
    }
});

module.exports = FormWinners;

