//The component to display short link received from the backend

import React from 'react';
import {Button} from 'reactstrap';

export default function ShortLink(props) {

    function copy() {
        let el = document.createElement('textarea');
        el.value = props.props.shortLink;
        el.setAttribute('readonly', '');
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    if(props.props.shortLink === ""){
        return <div className="padding">
            {props.props.error}
        </div>
    } else {
        return <div className="result">
            <span className="padding">
                Short Link:
            </span>
            <span className="padding">
               <a href={props.props.shortLink} id="shortLink">{props.props.shortLink}</a>
            </span>
            <span className="padding">
                <Button onClick={copy}>
                    <i className="fa fa-clipboard" aria-hidden="true"></i>
                    <span className="padding">Copy</span>
                </Button>
            </span>
        </div>;
    }
}