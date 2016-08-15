import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Gravatar from '../components/Gravatar';
import Finder from '../components/Finder';
import {requestInfo} from '../actions';
import { Link } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';
import About from '../components/About';
import Repos from '../components/Repos';

class AsyncApp extends Component {


    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onFindClickHandler = this.onFindClickHandler.bind(this);

        this.state = {
            finder: {
                value: []
            }
        }
    }

    onClickHandler() {
        const {dispatch} = this.props;
        dispatch(requestInfo("699179619"));
    }

    onChangeHandler(event) {
        this.setState({
            finder: {
                value: event.target.value.substring(0,9)
            }
        }, function () { console.log(this.state.finder.value); });
    }

    onFindClickHandler(event) {
        const {dispatch} = this.props;
        dispatch(requestInfo(this.state.finder.value));
    }


    render() {
        return (
            <div>
                <Gravatar
                    image={this.props.image}
                    first_name={this.props.first_name}
                    last_name={this.props.last_name}
                    onClickHandler={ this.onClickHandler }
                />
                <Finder
                    value={ this.state.finder.value }
                    onChangeHandler={ this.onChangeHandler }
                    onFindClickHandler={ this.onFindClickHandler }
                />

                <Tabs defaultActiveKey={1} >
                    <Tab eventKey={1} title="About Us">
                        <About></About>
                    </Tab>
                    <Tab eventKey={2} title="Repos">
                        <Repos></Repos>
                    </Tab>
                </Tabs>


                <hr/>

                <Link to="/about" activeStyle={{ color: 'red' }}> About </Link><nobr></nobr>
                <Link to="/repos" activeStyle={{ color: 'red' }}> Repositories </Link>

                {this.props.children}


            </div>
        );
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestInfo("564084115"));
    }
}

AsyncApp.propTypes = {
    image: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const {data} = state;

    return {
        image: data.cover.source,
        first_name: data.first_name,
        last_name: data.last_name
    };
}


export default connect(mapStateToProps)(AsyncApp);
