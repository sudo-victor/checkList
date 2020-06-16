import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import unicorn from './src/styles/themes/unicorn';

import { store, persistor } from './src/store';

import Routes from './src/routes';

export default function App() {
    return (
        <ThemeProvider theme={unicorn}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <StatusBar
                        backgroundColor="#333"
                        barStyle="light-content"
                    />
                    <Routes />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    );
}
