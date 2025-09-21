/**
 * Code Editor Component
 */

import React from 'react';

const Editor = ({ content, onChange, currentFile }) => {
  return (
    <div className="editor">
      <div className="editor-header">
        <span className="file-name">
          {currentFile ? currentFile.name : 'Untitled'}
        </span>
      </div>
      <textarea
        className="editor-textarea"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start coding..."
        spellCheck={false}
      />
    </div>
  );
};

export default Editor;