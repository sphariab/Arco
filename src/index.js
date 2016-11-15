'use strict';
import React from 'react';
import { render } from 'react-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import RegistrationSection from './components/RegistrationSection';
import StepsSection from './components/StepsSection';
import FormShopsModal from './components/FormShopsModal';
import FormWinnersModal from './components/FormWinnersModal';
import RegistrationForm from './components/RegistrationForm';

import { bindActionCreators } from 'redux'
import * as Actions from './actions/index.js';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';
import modalStates from './reducers';

export const store = createStore(modalStates);
    
let winnersList=[
    {
        date: "01 / 07 /16",
        name: "John Doe",
        image: '../public/images/user1.png',
        number: "+380 63 7хх хх 92"
    },
    {
        date: "01 / 07 /16",
        name: "Jane Doe",
        image: '../public/images/user2.png',
        number: "+380 63 7хх хх 93"
    },
    {
        date: "01 / 07 /16",
        name: "Samanta Doe",
        image: '../public/images/user1.png',
        number: "+380 63 7хх хх 94"
    },
    {
        date: "01 / 07 /16",
        name: "Kventin Doe",
        image: '../public/images/user1.png',
        number: "+380 63 7хх хх 95"
    }
];
const App = ({actions}) => (
              <div>
                <Header 
                    Actions={Actions}
                    modalStates={modalStates}
                    winnersList={winnersList}/>
                <IntroSection />
                <StepsSection />
                <RegistrationSection
                    Actions={Actions }
                    modalStates={modalStates}/>
                <Footer 
                    Actions={Actions}
                    modalStates={modalStates}
                    winnersList={winnersList}
                />
              </div>
)

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
export default connect(
  mapDispatchToProps
)(App)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)