import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import Home from './Components/home/Home'
import About from './Components/pages/About'; 
import Contact from './Components/pages/Contact'; 
import LearnMore from './Components/pages/LearnMore';
import ListPosts from './Containers/ListPosts';
import ConnectToCar from './Containers/ConnectToCar'
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAccount from './Containers/CreateAccount';
import Login from './Containers/Login';
import LoadingComponent from './Containers/LoadingComponent';
import AuthenticatedComponent from './Containers/AuthenticatedComponent';
import PostDetail from './Containers/PostDetail';
import './Styles/App.css'
import './Components/home/home.css'
import { getUser, logout } from './Actions/UserActions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Main />
        <Switch>
          <Route exact path="/CreateAccount" component={CreateAccount}/>
          <Route exact path = "/Login" component={Login} />
          <Route exact path="/Home" component={Home}/>
          <Route exact path = "/About" component={About} />
          <Route exact path = "/Contact" component={Contact} />
          <Route exact path = "/LearnMore" component={LearnMore} />
            <Route exact path="/ConnectToCar" component={ConnectToCar} />
        <AuthenticatedComponent>
            <Route exact path="/:id" component={PostDetail}/>
            <Route exact path="/" component={ListPosts}/>
          </AuthenticatedComponent>
        </Switch>
        </div>
       {/* </LoadingComponent> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
