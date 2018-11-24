import React from 'react';
import {withRouter} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Example from 'Module/example/example.jsx';

import connector from './connector';

export class Modules extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/example" component={Example} />
                <Redirect from="/" to="/example" />
            </Switch>
        );
    }
}

export default withRouter(connect(connector)(Modules));
