import React from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers';
import CounterContainer from './src/containers/CounterContainer';

let store = createStore(allReducers);
const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

AppRegistry.registerComponent('reduxSagaBasic', () => App);
