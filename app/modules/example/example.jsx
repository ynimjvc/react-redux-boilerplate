import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import connector from './connector';

export class Example extends React.Component {
    render() {

        return (
            <div>
                Example Module
            </div>
        );
    }
}

export default withRouter(connect(connector)(Example));
