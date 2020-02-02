import React from 'react';
import './../App.css';

let repoStyle = {
    padding: '10px',
    position: 'relative',
    borderBottom: '1px solid #e1e4e8'
}

let repoDetailsStyle = {
    width: '80%'
}

let repoNameStye = {
    color: '#0366d6'
}

let repoDescriptionStyle = {
    color: '#586069',
    fontSize: '14px'
}

let buttonStyle = {
    position: 'absolute',
    top: '43%',
    right: '0%'
}

let repoLanguageCircle = {
    position: 'relative',
    top: '1px',
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: "#2b7489"
}

function RepoDetails({ details }) {
  return (
      <div style={repoStyle}>
          <div style={repoDetailsStyle}>
              <h3 style={repoNameStye}>{details.name}</h3>
              <p style={repoDescriptionStyle}>{details.description}</p>
              <div>
                  {details.language ?
                    (<span style={{marginRight: '20px', fontSize: '12px'}}>
                          <span style={repoLanguageCircle}></span>
                          <span>{details.language}</span>
                      </span>) : null}
                   Updated 
                  <relative-time datetime="2019-03-04T11:24:44Z" class="no-wrap" title="Mar 4, 2019, 4:54 PM GMT+5:30"> on {details.updated_at}</relative-time>
              </div>
          </div>
          <button className="btn" style={buttonStyle}>Star</button>
    </div>
  );
}

export default RepoDetails;
