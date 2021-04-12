import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDom.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.querySelector('#root')
);