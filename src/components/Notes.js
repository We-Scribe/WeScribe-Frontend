import React, { Component } from 'react';
import { CardColumns,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddNote from './AddNote';
import axios from 'axios';
import { connect } from 'react-redux';

import { USERS_URL } from '../api/constants';
import { getConfig } from '../utils/getConfig';
import { ErrorHandler } from '../utils/ErrorHandler';


class Notes extends Component {

    state = {
        notes: [],
        error: null
    }

    componentDidMount(){
        axios
        .get(USERS_URL+this.props.username+"/notes", getConfig())
        .then((res) => {
          this.setState({
            notes: res.data,
          });
        })
        .catch((err) => {
          this.setState({
            error: ErrorHandler(err),
          });
        });
      }

    render() {

        let notes = null;
        const arr = this.state.notes;

        notes = (
            <div style ={{marginTop:'5vw'}}>
                <CardColumns style ={{ marginLeft:'10vw',marginRight:'10vw',maxWidth:'75vw'}}>
                {arr.map((note) => {
                    return (
                        <Link to={"/cis-hackathon/main/" + note.boardID}>
                            <Card>
                            <Card.Body>
                                <Card.Title>{note.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Created at {note.created}</small>
                            </Card.Footer>
                            </Card>
                        </Link>
                    );
                })}
                </CardColumns>
            </div>
        );

        return (
            <div>
                <AddNote/>
                <br/>
                {notes}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    };
};
  
export default connect(mapStateToProps, null)(Notes);