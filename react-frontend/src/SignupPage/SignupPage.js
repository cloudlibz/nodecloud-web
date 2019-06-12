import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions/user.actions.js';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                username: '',
                password: '',
            },
            submitted: false,
            usernameError: "",
            passwordError: "",
            emailError: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        
        if (this.handleValidation()) {
            this.setState({ passwordError: "", 
                            usernameError: "",
                            emailError: "",
            });
            dispatch(userActions.register(user));
        }
    }

    handleValidation() {
        const { user } = this.state;
        let isFormValid = true;

        //Password
        if (!user.password) {
            isFormValid = false;
            this.setState({ passwordError: "Please enter password", 
                            usernameError: "",
                            emailError: "",
            });
        }

        //Name
        if(!user.username){
            isFormValid = false;
            this.setState({ usernameError: "Please enter username",
                            emailError: "", passwordError: ""
            });
        } else if(typeof user.username !== "undefined"){
            if(!user.username.match(/^[a-zA-Z]+$/)){
                isFormValid = false;
                this.setState({ usernameError: "Username should only contain letters",
                                emailError: "", passwordError: ""
                });            
            }        
         }

        //Email
        if(!user.email){
            isFormValid = false;
            this.setState({ emailError: "Please enter email", usernameError: "", passwordError: ""  });
        } else if(typeof user.email !== "undefined"){
            let lastAtPos = user.email.lastIndexOf('@');
            let lastDotPos = user.email.lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && user.email.indexOf('@@') == -1 && lastDotPos > 2 && (user.email.length - lastDotPos) > 2)) {
               isFormValid = false;
               this.setState({ emailError: "Please enter a valid email", usernameError: "", passwordError: "" });
             }
        } 
        return isFormValid;
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted , usernameError, passwordError, emailError} = this.state;
        return (
            <div className="main"> 
    <div className="innerBox">
      <div className="logoHolder">
      <img src={require('../media/nodecloudlogo.png')} alt="Nodecloud Logo" className="logo"/>
        <p className="title">Let's get you set up</p>
        <p className="subtitle">It should only take a couple of minutes</p>
      </div>
      <div className="formHolder">
          <div onSubmit={this.handleSubmit}>
            <div className="inline fields">
                  <label htmlFor="email" className="label" style={{marginRight:51}}>Email</label>
                  <div className={(emailError) ? 'ui input error' : 'ui input'} style={{flexDirection: "column"}}>
                  <input type="email" name="email" value={user.email} onChange={this.handleChange} className="inputField"  />
                  {emailError && <div className="ui pointing red basic label">{emailError}</div>}
                  </div>
              </div>
              <div className="inline fields">
                  <label htmlFor="username" className="label">Username</label>
                  <div className={(usernameError) ? 'ui input error' : 'ui input'} style={{flexDirection: "column"}}>
                  <input type="text" name="username" value={user.username} onChange={this.handleChange} className="inputField" />
                  {usernameError && <div className="ui pointing red basic label">{usernameError}</div>}
                  </div>
              </div>
              <div className="inline fields">
                <label htmlFor="password" className="label">Password </label>
                <div className={(passwordError) ? 'ui input error' : 'ui input'} style={{flexDirection: "column"}}>
                <input type="password" name="password" value={user.password} onChange={this.handleChange} className="inputField" />
                {passwordError && <div className="ui pointing red basic label">{passwordError}</div>}
                </div>
              </div>
              <div className="buttonHolder">
              <Link to="/login" class="ui secondary button">LOGIN</Link> 
                <button class="ui primary button" onClick={this.handleSubmit}> SIGN UP</button>
          </div>
          </div>
      </div>
    </div>
    </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedSignupPage = connect(mapStateToProps)(SignupPage);
export { connectedSignupPage as SignupPage };