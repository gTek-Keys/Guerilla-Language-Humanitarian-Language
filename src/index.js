/**
 * gTek Integrated Ecosystem Main Entry Point
 * Coordinates all ecosystem components
 */

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Component imports
const gDaTaNomOcSApp = require('./gDaTaNomOcS-samsung-app/index.js');
const polyStackIDE = require('./polystack-ide/index.js');
const saqqaraGizaWorkflow = require('./saqqara-giza-workflow/index.js');
const liquiNomOcsFramework = require('./liquinomocs-framework/index.js');

// Routes
app.get('/', (req, res) => {
  res.json({
    name: 'gTek Integrated Ecosystem',
    version: '1.0.0',
    components: {
      'gDaTaNomOcS Samsung App': 'Knox-secured data sovereignty',
      'gTek PolyStack IDE': 'AI-native development environment',
      'Saqqara-Giza Workflow': 'Ancient design → modern management',
      'LiquiNomOcs Framework': 'Natural law economics'
    },
    compliance: ['IEEE', 'ISO27001', 'GDPR'],
    technologies: ['ReactNative', 'Electron', 'Next.js', 'Node.js', 'Docker']
  });
});

// Component routes
app.use('/api/samsung-app', gDaTaNomOcSApp);
app.use('/api/polystack-ide', polyStackIDE);
app.use('/api/workflow', saqqaraGizaWorkflow);
app.use('/api/economics', liquiNomOcsFramework);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`gTek Integrated Ecosystem running on port ${PORT}`);
    console.log('Components initialized:');
    console.log('- gDaTaNomOcS Samsung App (Knox Security)');
    console.log('- gTek PolyStack IDE (AI Development)');
    console.log('- Saqqara-Giza Workflow (Ancient → Modern)');
    console.log('- LiquiNomOcs Framework (Natural Economics)');
  });
}

module.exports = app;