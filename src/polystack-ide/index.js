/**
 * PolyStack IDE API Routes
 * AI-native development environment backend
 */

const express = require('express');
const router = express.Router();

// IDE status and capabilities
router.get('/status', (req, res) => {
  res.json({
    app: 'gTek PolyStack IDE',
    version: '1.0.0',
    features: [
      'AI-powered code assistance',
      'Automated grant proposal generation',
      'Multi-language support',
      'Integrated development tools',
      'Real-time collaboration',
      'Cloud synchronization'
    ],
    ai: {
      codeAssistant: true,
      grantGenerator: true,
      autoDocumentation: true,
      codeAnalysis: true,
    },
    supportedLanguages: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C++',
      'React',
      'Node.js',
      'Solidity'
    ],
    timestamp: new Date().toISOString(),
  });
});

// AI Code Assistant
router.post('/ai/analyze-code', (req, res) => {
  const { code, language = 'javascript' } = req.body;
  
  if (!code) {
    return res.status(400).json({
      success: false,
      message: 'Code content is required',
    });
  }

  // Simulate code analysis
  const analysis = analyzeCode(code, language);
  
  res.json({
    success: true,
    analysis,
    suggestions: generateSuggestions(analysis),
    timestamp: new Date().toISOString(),
  });
});

router.post('/ai/suggest-improvements', (req, res) => {
  const { code, context = 'general' } = req.body;
  
  const improvements = generateImprovements(code, context);
  
  res.json({
    success: true,
    improvements,
    timestamp: new Date().toISOString(),
  });
});

// Grant Generator
router.post('/grants/generate', (req, res) => {
  const { 
    projectTitle, 
    projectDescription, 
    grantType, 
    fundingAmount,
    projectCode 
  } = req.body;
  
  if (!projectTitle || !grantType) {
    return res.status(400).json({
      success: false,
      message: 'Project title and grant type are required',
    });
  }

  const proposal = generateGrantProposal({
    projectTitle,
    projectDescription,
    grantType,
    fundingAmount,
    projectCode,
  });
  
  res.json({
    success: true,
    proposal,
    metadata: {
      type: grantType,
      fundingAmount,
      generatedAt: new Date().toISOString(),
      wordCount: proposal.split(' ').length,
    },
  });
});

router.get('/grants/templates', (req, res) => {
  const templates = [
    {
      id: 'research',
      name: 'Research & Development',
      description: 'For research projects and R&D initiatives',
      structure: ['Executive Summary', 'Research Goals', 'Methodology', 'Budget', 'Timeline'],
    },
    {
      id: 'innovation',
      name: 'Innovation Grant',
      description: 'For innovative technology projects',
      structure: ['Innovation Description', 'Market Analysis', 'Technical Approach', 'Impact', 'Funding'],
    },
    {
      id: 'startup',
      name: 'Startup Funding',
      description: 'For startup and entrepreneurial ventures',
      structure: ['Business Model', 'Market Opportunity', 'Team', 'Financial Projections', 'Use of Funds'],
    },
  ];
  
  res.json({
    success: true,
    templates,
  });
});

// Project Management
router.get('/projects', (req, res) => {
  // Simulated project list
  const projects = [
    {
      id: 'proj_1',
      name: 'AI Assistant App',
      language: 'React',
      lastModified: new Date(Date.now() - 86400000).toISOString(),
      status: 'active',
    },
    {
      id: 'proj_2',
      name: 'Blockchain Integration',
      language: 'Solidity',
      lastModified: new Date(Date.now() - 172800000).toISOString(),
      status: 'active',
    },
    {
      id: 'proj_3',
      name: 'Data Analytics Dashboard',
      language: 'Python',
      lastModified: new Date(Date.now() - 259200000).toISOString(),
      status: 'completed',
    },
  ];
  
  res.json({
    success: true,
    projects,
  });
});

router.post('/projects', (req, res) => {
  const { name, language, template } = req.body;
  
  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Project name is required',
    });
  }

  const project = {
    id: `proj_${Date.now()}`,
    name,
    language: language || 'JavaScript',
    template: template || 'basic',
    created: new Date().toISOString(),
    status: 'active',
  };
  
  res.json({
    success: true,
    message: 'Project created successfully',
    project,
  });
});

// Helper functions
function analyzeCode(code, language) {
  const lines = code.split('\n');
  const nonEmptyLines = lines.filter(line => line.trim().length > 0);
  
  return {
    totalLines: lines.length,
    codeLines: nonEmptyLines.length,
    emptyLines: lines.length - nonEmptyLines.length,
    hasComments: lines.some(line => line.trim().startsWith('//')),
    hasFunctions: /function\s+\w+|=>\s*{|\w+\s*\(.*\)\s*{/.test(code),
    hasConsoleLog: /console\.log/.test(code),
    complexity: calculateComplexity(code),
    language,
    analysis: {
      maintainability: calculateMaintainability(code),
      readability: calculateReadability(code),
      testability: calculateTestability(code),
    },
  };
}

function calculateComplexity(code) {
  const lines = code.split('\n').length;
  const functions = (code.match(/function|=>/g) || []).length;
  const conditions = (code.match(/if|else|switch|case|for|while/g) || []).length;
  
  if (lines > 100 || functions > 10 || conditions > 15) return 'high';
  if (lines > 50 || functions > 5 || conditions > 8) return 'medium';
  return 'low';
}

function calculateMaintainability(code) {
  const hasComments = /\/\/|\/\*/.test(code);
  const hasConstants = /const\s+[A-Z_]+/.test(code);
  const hasProperNaming = !/\b[a-z]\b/.test(code); // Avoid single letter variables
  
  let score = 0;
  if (hasComments) score += 30;
  if (hasConstants) score += 25;
  if (hasProperNaming) score += 25;
  if (code.length < 1000) score += 20;
  
  return score > 75 ? 'high' : score > 50 ? 'medium' : 'low';
}

function calculateReadability(code) {
  const lines = code.split('\n');
  const avgLineLength = lines.reduce((sum, line) => sum + line.length, 0) / lines.length;
  const hasGoodIndentation = lines.every(line => !line.trim() || line.startsWith('  ') || line.startsWith('\t') || !line.startsWith(' '));
  
  if (avgLineLength < 80 && hasGoodIndentation) return 'high';
  if (avgLineLength < 120) return 'medium';
  return 'low';
}

function calculateTestability(code) {
  const hasPureFunctions = /return\s+/.test(code) && !/console\.log|alert|document\./.test(code);
  const hasSmallFunctions = (code.match(/function|=>/g) || []).length > 0;
  const hasGoodStructure = /export|module\.exports/.test(code);
  
  let score = 0;
  if (hasPureFunctions) score += 40;
  if (hasSmallFunctions) score += 30;
  if (hasGoodStructure) score += 30;
  
  return score > 70 ? 'high' : score > 40 ? 'medium' : 'low';
}

function generateSuggestions(analysis) {
  const suggestions = [];
  
  if (!analysis.hasComments) {
    suggestions.push({
      type: 'documentation',
      message: 'Add comments to explain complex logic',
      priority: 'medium',
    });
  }
  
  if (analysis.hasConsoleLog) {
    suggestions.push({
      type: 'cleanup',
      message: 'Remove console.log statements for production',
      priority: 'low',
    });
  }
  
  if (analysis.complexity === 'high') {
    suggestions.push({
      type: 'refactoring',
      message: 'Consider breaking down complex functions',
      priority: 'high',
    });
  }
  
  if (analysis.analysis.readability === 'low') {
    suggestions.push({
      type: 'formatting',
      message: 'Improve code formatting and indentation',
      priority: 'medium',
    });
  }
  
  return suggestions;
}

function generateImprovements(code, context) {
  const improvements = [
    {
      type: 'performance',
      description: 'Use const/let instead of var for better scoping',
      before: 'var name = "value";',
      after: 'const name = "value";',
    },
    {
      type: 'error-handling',
      description: 'Add try-catch blocks for error handling',
      before: 'result = riskyOperation();',
      after: 'try {\n  result = riskyOperation();\n} catch (error) {\n  console.error("Error:", error);\n}',
    },
    {
      type: 'async',
      description: 'Use async/await for better readability',
      before: 'promise.then(result => {\n  // handle result\n});',
      after: 'const result = await promise;\n// handle result',
    },
  ];
  
  return improvements;
}

function generateGrantProposal(params) {
  const { projectTitle, projectDescription, grantType, fundingAmount, projectCode } = params;
  
  return `# ${projectTitle}

## Executive Summary

This proposal outlines an innovative ${grantType} project that leverages cutting-edge technology to deliver measurable impact. We request $${fundingAmount || '100,000'} in funding to develop and implement this comprehensive solution.

## Project Description

${projectDescription || 'This project utilizes advanced AI and modern technologies to create a revolutionary platform that transforms how organizations operate and deliver value.'}

## Technical Approach

Our implementation strategy includes:

- **AI-Native Architecture**: Leveraging machine learning for intelligent automation
- **Modern Tech Stack**: Built with React, Node.js, and cloud technologies
- **Scalable Infrastructure**: Designed for growth and performance
- **Security First**: Implementing best practices for data protection

${projectCode ? `## Code Foundation

\`\`\`javascript
${projectCode.substring(0, 300)}...
\`\`\`

This demonstrates our technical capabilities and commitment to quality.` : ''}

## Budget Breakdown

- **Personnel (60%)**: $${Math.floor((parseInt(fundingAmount) || 100000) * 0.6).toLocaleString()}
- **Technology (25%)**: $${Math.floor((parseInt(fundingAmount) || 100000) * 0.25).toLocaleString()}
- **Operations (10%)**: $${Math.floor((parseInt(fundingAmount) || 100000) * 0.1).toLocaleString()}
- **Contingency (5%)**: $${Math.floor((parseInt(fundingAmount) || 100000) * 0.05).toLocaleString()}

## Expected Outcomes

1. Innovative solution in ${grantType}
2. Technical excellence and scalability
3. Positive community impact
4. Sustainable business model
5. Open source contributions

---

*Generated by gTek PolyStack IDE Grant Generator*`;
}

module.exports = router;