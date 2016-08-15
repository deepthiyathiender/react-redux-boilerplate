import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';
import About from '../components/About';
import Repos from '../components/Repos';
import { Router, Route, hashHistory } from 'react-router'

const store = configureStore();

//Provider threads the store object through all container component
export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path="/" component={AsyncApp} >
              <Route path="/about" component={About} />
              <Route path="/repos" component={Repos} />
             </Route>
          </Router>
        </Provider>


      // <Provider store={store}>
      //   <Router history={browserHistory}>
      //     <Route path="/" component={AsyncApp}>
      //       <Route path="users" component={Users}>
      //         <Route path="/user/:userId" component={User}/>
      //       </Route>
      //     </Route>
      //   </Router>
      // </Provider>
    );
  }
}
