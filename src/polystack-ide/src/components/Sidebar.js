/**
 * Sidebar Component
 */

import React from 'react';

const Sidebar = ({ onFileSelect }) => {
  const files = [
    { name: 'App.js', type: 'file' },
    { name: 'index.js', type: 'file' },
    { name: 'package.json', type: 'file' },
    { name: 'components/', type: 'folder' },
    { name: 'utils/', type: 'folder' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Explorer</h3>
      </div>
      <div className="file-list">
        {files.map((file, index) => (
          <div
            key={index}
            className={`file-item ${file.type}`}
            onClick={() => file.type === 'file' && onFileSelect(file)}
          >
            <span className="file-icon">
              {file.type === 'folder' ? '📁' : '📄'}
            </span>
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;