//The Form component to make POST request to the server

import React from 'react';
import $ from "jquery";
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import apis from '../services/apis';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

function UrlForm(props) {

    function update(ev) {
        let tgt = $(ev.target);

        let data = {};
        data[tgt.attr('name')] = tgt.val();
        let action = {
            type: 'UPDATE_URL_FORM',
            data: data,
        };
        props.dispatch(action);
    }

    function submit() {
        if(props.link.value === ""){
            swal({
                title: "Empty Link!",
                text: "Please enter a link to shorten!",
                icon: "warning",
            });
        } else {
            apis.shortenLink(props.link.value);
        }
    }

    let button;

    if(props.link.value === ""){
        button =  <Button onClick={submit} className="btn btn-dark">Submit</Button>
    } else {
        button = <Link to={"/shortLink"}><Button onClick={submit} className="btn btn-dark">Submit</Button></Link>
    }

        return <div className="content">
            <div className="content-inside display">
            <Form>
                <FormGroup>
                    <div className="input-group">
                        <div className="input-group-addon align">
                            <span>
                               <i className="fa fa-link"></i>
                            </span>
                        </div>
                        <Input type="text" name="value"
                               placeholder="Long Link" value={props.link.value} onChange={update}/>
                    </div>
                </FormGroup>
                {button}
            </Form>
            </div>
        </div>;

}

function state2props(state) {
    //console.log("rerender", state);
    return { link: state.link };
}

export default connect(state2props)(UrlForm);