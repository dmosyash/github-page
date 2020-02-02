import React, { Component } from 'react';
import { getRepoDetails } from './../services/apiService';
import './rightPanel.css';
import './../App.css';

import RepoDetails from './../components/repoDetails';
import Filters from './../components/filters';

class RightPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repoDetails: [],
            searchText: '',
            filteredResults: [],
            filterType: '',
            showFilterToggle: false,
            selectMenuPos: {},
            selectedFilter: {
                type: 'All',
                language: 'All'
            }
        };
        this.timer = null;
        this.typeSelectMenu = null;
        this.languageSelectMenu = null;
    }

    componentDidMount() {
        // API call
        getRepoDetails().then(response => {
            this.setState({ repoDetails: response, filteredResults: response });
        });
    }

    showRepos() {
        return this.state.filteredResults.map(repo => <RepoDetails key={repo.id} details={repo}/>);
    }

    handleSearchChange = (event) => {
        if (event.target.value.length) {
            this.setState({ searchText: event.target.value });
        } else {
            this.setState({ searchText: event.target.value, filteredResults: [] });
            return;
        }
        // Filtering after 200ms, to avoiding unnecessary operations
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(() => {
            this.getSearchResults(this.state.searchText);
        }, 200);
    }

    getSearchResults = (text) => {
        let arr = this.state.repoDetails.filter(repo => {
            const repoName = repo.name.trim().toLowerCase();
            text = text.trim().toLowerCase();
            return (repoName.indexOf(text) !== -1);
        });
        this.setState({ filteredResults: arr, filterType: 'search', showFilterToggle: false });
    }

    filterRepos = filter => {
        let arr = [];
        let listToFilter = this.state.filteredResults;
        if (filter.name === this.state.filterType) {
            listToFilter = this.state.repoDetails;
        }
        if (filter.value === 'All') {
            arr = this.state.repoDetails;
        } else {
            arr = listToFilter.filter(repo => {
                if (filter.name === 'type') {
                    return (repo.private === (filter.value === 'Private'));
                } else {
                    return (repo.language === filter.value);
                }
            });
        }
        const { selectedFilter } = this.state;
        selectedFilter[filter.name] = filter.value;
        this.setState({ filteredResults: arr, selectedFilter: selectedFilter });
    }

    filterClicked = (filterType, e) => {
        const { showFilterToggle } = this.state;
        const buttonPos = e.currentTarget.getBoundingClientRect();
        console.log(buttonPos.top);
        this.setState({
            filterType: filterType,
            showFilterToggle: !showFilterToggle,
            selectMenuPos: {left: buttonPos.left, top: buttonPos.top}
        });
    }

    filterDiv = () => {
        const { showFilterToggle, filterType, selectMenuPos } = this.state;
        return (
            <div
                style={{
                    display: showFilterToggle ? 'block' : 'none',
                    position: 'absolute',
                    top: selectMenuPos.top + 35,
                    left: selectMenuPos.left
                }}>
            <Filters
                name={filterType}
                onSelect={this.filterRepos} />
        </div>);
    }

    render() {
        const { searchText, selectedFilter } = this.state;
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
                        value={searchText}
                        onChange={this.handleSearchChange}
                        placeholder="Search Repository..."
                    />
                    <button className="btn" onClick={e => this.filterClicked('type', e)}>Type: {selectedFilter.type}</button>
                    <button className="btn" onClick={e => this.filterClicked('language', e)}>Language: {selectedFilter.language}</button>
                    {this.filterDiv()}
                </div>
                <div className="repo-list">
                    {this.showRepos()}
                </div>
            </div>
        );
    }
}

export default RightPanel;
