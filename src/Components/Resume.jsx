import React from 'react';

const DownloadButton = (props) => {
  return (
    <a 
      href={props.downloadLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      download
    >
      <button>Resume</button>
    </a>
  );
};

export default DownloadButton;
