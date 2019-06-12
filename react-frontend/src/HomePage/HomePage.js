import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions/user.actions.js';
import './HomePage.css';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div style={{margin: 20}}>
                <div class="ui center aligned page grid" >
                    <div class="seven wide column"></div>
                    <div class="two wide column">
                        <img src={require('../media/nodecloudlogo.png')} alt="Nodecloud Logo" class="ui small image" />
                    </div>
                    <div class="one wide right floated column" >
                        <button class="ui secondary button">HELP?</button>
                    </div>
                    </div>              
                    <div class="ui center aligned page grid">
                    <div class="six wide column">
                    <p>Node Cloud is a standard library to get a single API on the open cloud with multiple providers. Making open cloud easily accessible and managed.</p>  
                    </div>
                    </div>

            </div>
//             <div class="ui centered grid">
//   <div class="eight column wide">
//     <div>I want to be centered vertically on a page</div>
//   </div>
// </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };