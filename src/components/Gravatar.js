import React, {PropTypes, Component} from 'react';
import { Button } from 'react-bootstrap';

export default class Gravatar extends React.Component {
    render() {
        const {image, first_name, last_name, onClickHandler} = this.props;
        return (
            <span>
                <h1> <img src={image} width="50px" height="50px" />  {last_name}, {first_name} </h1>
                <Button bsStyle="primary" onClick={ onClickHandler }>
                    Toggle
                </Button>
            </span>
        );
    }
};

Gravatar.propTypes = {
    image: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
};