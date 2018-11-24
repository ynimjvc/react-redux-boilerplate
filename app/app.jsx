import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Store from './store';
import Modules from './modules/modules.jsx';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Modules />
                </BrowserRouter>
            </Provider>
        );
    }
}
