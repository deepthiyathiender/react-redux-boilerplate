import React, {PropTypes, Component} from 'react';
import { Button } from 'react-bootstrap';

export default class Finder extends React.Component {
    render(){
        const { onChangeHandler, onFindClickHandler, value } = this.props;
        return (
            <span>
                <h1>Enter User ID
                    <input type="text" onChange= { onChangeHandler } value= { value } placeholder="Enter a 9 digit FB id" />
                    <Button bsStyle = "primary" onClick={ onFindClickHandler } >
                        Find
                    </Button>
                </h1>
            </span>
        )
    }

}

Finder.propTypes = {
    onFindClickHandler: PropTypes.func.isRequired
};