import React from 'react';

// Styles
import './SignIn.styles.scss';

// Components
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

// Firebase
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: '',
            })
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;