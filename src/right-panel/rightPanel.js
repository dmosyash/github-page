import React, { Component } from 'react';
import { getRepoDetails } from './../services/apiService';
import './rightPanel.css';
import './../App.css';

import RepoDetails from './../components/repoDetails';

class RightPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repoDetails: [],
            searchRepo: ''
        };
    }

    componentDidMount() {
        // API call
        getRepoDetails().then(response => {
            console.log('kk', response)
            this.setState({ repoDetails: response });
        });
    }

    showRepos() {
        return this.state.repoDetails.map(repo => <RepoDetails key={repo.id} details={repo}/>);
    }

    handleSearchChange() {

    }

    render() {
        const { repoDetails, searchRepo } = this.state;
        console.log(repoDetails)
        return (
            <div className="right-panel" >
                <div className="header-tabs">
                    <span>Overview</span>
                    <span>Repositories</span>
                    <span>Star</span>
                    <span>Followers</span>
                    <span>Followings</span>
                </div>
                <div className="search-section">
                    <input type="search" className="search-text"
                        value={searchRepo}
                        onChange={this.handleSearchChange}
                        placeholder="Search Repository..."
                    />
                    <button className="btn">Type</button>
                    <button className="btn">Language</button>
                </div>
                <div className="repo-list">
                    {this.showRepos()}
                </div>
            </div>
        );
    }
}

export default RightPanel;
