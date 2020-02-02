import React from 'react';
import './../App.css';
import './filters.css';

import { filterItems } from '../services/constants';

function populateSelectMenuItems(filterName, onSelect) {
    const arr = filterName ? filterItems[filterName] ? filterItems[filterName] : [] : [];
    return arr.map(item => (
        <label key={item} className="SelectMenu-item" role="menuitemradio" aria-checked="false" tabIndex="0" onClick={() => onSelect({name: filterName, value: item})}>
            <span className="text-normal" data-menu-button-text="">{item}</span>
        </label>
    ));
}

function Filters({ name, onSelect }) {
    return (
        <div className="SelectMenu-section">
            <header className="SelectMenu-header">
                <span className="SelectMenu-title">Select type</span>
            </header>
            <div className="SelectMenu-list">
                {populateSelectMenuItems(name, onSelect)}
            </div>
          </div>
  );
}

export default Filters;
