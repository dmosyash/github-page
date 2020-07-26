import React, { Component } from 'react';
import { getUserInfo } from './../services/apiService';
import './leftPanel.css';
import './../App.css';

class LeftPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        };
    }

    componentDidMount() {
        // API call
        getUserInfo().then(response => {
            this.setState({ userDetails: response });
        });
    }

    render() {
        const { userDetails } = this.state;
        return (
            <div className="left-panel" >
                <img className="display-pic" src={userDetails.avatar_url} />
                <div className="profile-details-section">
                <h1 className="full-name">{userDetails.name}</h1>
                <h5 className="username">{userDetails.login}</h5>
                <div className="bio">
                    <span>{userDetails.bio}</span>
                </div>
                <button className="edit-bio btn">Follow</button>
                <div className="details">
                    <span>{userDetails.company}</span>
                    <span>{userDetails.location}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftPanel;
