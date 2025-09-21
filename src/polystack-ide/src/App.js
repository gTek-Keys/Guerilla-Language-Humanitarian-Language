/**
 * gTek PolyStack IDE - AI-Native Development Environment
 * Main React Application
 */

import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import AIAssistant from './components/AIAssistant';
import GrantGenerator from './components/GrantGenerator';

function App() {
  const [currentFile, setCurrentFile] = useState(null);
  const [fileContent, setFileContent] = useState('// Welcome to gTek PolyStack IDE\n// AI-Native Development Environment\n\nconsole.log("Hello from PolyStack IDE!");');
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [grantGeneratorOpen, setGrantGeneratorOpen] = useState(false);

  const handleFileSelect = (file) => {
    setCurrentFile(file);
    setFileContent(`// File: ${file.name}\n// Last modified: ${new Date().toISOString()}\n\n`);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-left">
          <h1>gTek PolyStack IDE</h1>
          <span className="subtitle">AI-Native Development Environment</span>
        </div>
        <div className="header-right">
          <button 
            className={`header-btn ${aiAssistantOpen ? 'active' : ''}`}
            onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
          >
            🤖 AI Assistant
          </button>
          <button 
            className={`header-btn ${grantGeneratorOpen ? 'active' : ''}`}
            onClick={() => setGrantGeneratorOpen(!grantGeneratorOpen)}
          >
            📝 Grant Generator
          </button>
        </div>
      </header>

      <div className="app-body">
        <Sidebar onFileSelect={handleFileSelect} />
        
        <div className="main-content">
          <div className="editor-container">
            <Editor 
              content={fileContent}
              onChange={setFileContent}
              currentFile={currentFile}
            />
          </div>
        </div>

        {aiAssistantOpen && (
          <div className="side-panel">
            <AIAssistant 
              onClose={() => setAiAssistantOpen(false)}
              currentCode={fileContent}
              onCodeUpdate={setFileContent}
            />
          </div>
        )}
      </div>

      {grantGeneratorOpen && (
        <div className="modal-overlay">
          <GrantGenerator 
            onClose={() => setGrantGeneratorOpen(false)}
            projectCode={fileContent}
          />
        </div>
      )}
    </div>
  );
}

export default App;