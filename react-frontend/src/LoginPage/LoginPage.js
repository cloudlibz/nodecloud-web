import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions/user.actions.js';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false,
            usernameError: "",
            passwordError: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if(!username){
            this.setState({ usernameError: "Please enter username" });
        } else if(!password) {
            this.setState({ passwordError: "Please enter password", 
                            usernameError: "",
            });
        } else{
            this.setState({ passwordError: "", 
                            usernameError: "",
            });
            const { dispatch } = this.props;
            if (username && password) {
                dispatch(userActions.login(username, password));
                }
        }
    }

    render() {
        const { username, password, submitted, usernameError, passwordError } = this.state;
        return(
            <div className="main"> 
                <div className="innerBox">
                    <div className="logoHolder">
                        <img src={require('../media/nodecloudlogo.png')} alt="Nodecloud Logo" className="logo"/>
                        <p className="title">Let's get you set up</p>
                        <p className="subtitle">It should only take a couple of minutes</p>
                    </div>
                    <div className="formHolder">
                        <div onSubmit={this.handleSubmit}>
                            <div>
                            <div className="inline fields">
                                <label  htmlFor="username" className="label">Username</label>
                                <div className={(usernameError) ? 'ui input error' : 'ui input'} style={{flexDirection: "column"}}>
                                <input type="text" name="username" value={username} onChange={this.handleChange} />
                                {usernameError && <div className="ui pointing red basic label">{usernameError}</div>}
                                </div>
                            </div>
                            </div>
                            <div>
                            <div class="inline fields">
                                <label htmlFor="password" className="label">Password </label>
                                <div className={(passwordError) ? 'ui input error' : 'ui input'} style={{flexDirection: "column"}}>
                                <input type="password" name="password" value={password} onChange={this.handleChange} />
                                {passwordError && <div className="ui pointing red basic label">{passwordError}</div>}
                                </div>
                                </div>
                            </div>
                            <div className="buttonHolder">
                            <Link to="/signup" class="ui button">SIGN UP</Link> 
                            <button class="ui primarycolor button" onClick={this.handleSubmit}> LOGIN</button>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        );
        
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
