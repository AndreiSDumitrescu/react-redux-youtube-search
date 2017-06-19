import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import MyAccount from "./components/MyAccount";
import SearchBar from "./containers/SearchBar";
import VideoList from "./containers/VideoList";
import VideoDetail from "./containers/VideoDetail";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore );

const App = () => (
    <div>
        <div className="search-bar row">
            <SearchBar />
        </div>
        <div className="row">
            <VideoDetail />
            <VideoList />
        </div>
    </div>
);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware( reducers ) }>
        <Router>
            <div className="container">
                <ul className="navigation">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/myaccount">My Account</Link></li>
                </ul>
                <Route exact path="/" component={ App } />
                <Route path="/myaccount" component={ MyAccount } />
            </div>
        </Router>
    </Provider>
, document.getElementById( "app" ) );
