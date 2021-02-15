import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";

// Components
import Header from "./components/Header/Header";

// Firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
             const userRef = createUserProfileDocument(userAuth);

             (await userRef).onSnapshot(snapshot => {
                 this.setState({
                     currentUser: {
                         id: snapshot.id,
                         ...snapshot.data()
                     }
                 })
                 console.log(this.state);
             });
         }
         this.setState({currentUser: userAuth})
     })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signIn" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
