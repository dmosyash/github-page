import React from 'react';

function RepoDetails({ details }) {
  return (
      <div className="repo-section">
          <div className="repo">
              <h3 className="repo-name">{details.name}</h3>
              <p className="repo-description">{details.description}</p>
              <div>
                  <span>
                      <span className="repo-language-color" style={{ backgroundColor: "#2b7489" }}></span>
                      <span itemprop="programmingLanguage">{details.programmingLanguage}</span>
                </span>
              <relative-time datetime="2019-03-04T11:24:44Z" class="no-wrap" title="Mar 4, 2019, 4:54 PM GMT+5:30">on Mar 4, 2019</relative-time>




        Updated 
    </div>
          </div>
          <div className="star"></div>
    </div>
  );
}

export default RepoDetails;
