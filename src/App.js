import React, {Component} from 'react';
import './App.less';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, observer} from 'mobx-react';
import stores from './stores';
import bugsnag from 'bugsnag-js'
import createPlugin from 'bugsnag-react'
import UserList from './page/UserList';
import DefaultLayout from './layout/DefaultLayout';
import Service from "./page/Service";
import TeamList from "./page/TeamList";
import Publish from "./page/Publish";

const bugsnagClient = bugsnag('4968ceaa1c751e37413b1f4b45e7b2b2');
const ErrorBoundary = bugsnagClient.use(createPlugin(React));


@observer
class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Provider stores={stores}>
                    <Router>
                        <div className="App">
                            <Route path="/defaultlayout" component={DefaultLayout}/>
                            <Route path="/userlist"
                                   render={props => <DefaultLayout><UserList {...props}/></DefaultLayout>}/>
                            <Route path="/service"
                                   render={props => <DefaultLayout><Service {...props}/></DefaultLayout>}/>
                            <Route path="/teamlist"
                                   render={props => <DefaultLayout><TeamList {...props}/></DefaultLayout>}/>
                            <Route path="/publish"
                                   render={props=><DefaultLayout><Publish {...props}/></DefaultLayout>}/>
                        </div>
                    </Router>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App;




