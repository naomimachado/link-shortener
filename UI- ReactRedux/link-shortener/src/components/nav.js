//The Navigation Bar component

import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(props) {

    function clear() {
        props.props.dispatch({type: 'CLEAR_URL_FORM'});
        props.props.dispatch({type:'CLEAR_SHORT_LINK'});
        props.props.dispatch({type:'CLEAR_ERROR'});
    }

    return <div className="nav navbar navbar-dark heading">
        <Link to={"/"} onClick={clear} className="heading">Link Shortener</Link>
    </div>
}