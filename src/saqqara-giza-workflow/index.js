/**
 * Saqqara-Giza Workflow System
 * Ancient design principles applied to modern workflow management
 */

const express = require('express');
const router = express.Router();

// Workflow templates based on ancient design principles
const ancientPatterns = {
  pyramid: {
    name: 'Pyramid Structure',
    description: 'Hierarchical workflow with clear foundations',
    steps: ['Foundation', 'Core Structure', 'Refinement', 'Completion'],
    principles: ['Stability', 'Progressive Build', 'Endurance', 'Precision'],
  },
  spiral: {
    name: 'Spiral Method',
    description: 'Iterative approach based on golden ratio principles',
    steps: ['Initiation', 'Expansion', 'Integration', 'Transformation'],
    principles: ['Natural Growth', 'Balance', 'Harmony', 'Evolution'],
  },
  mandala: {
    name: 'Mandala Pattern',
    description: 'Centered approach with radiating elements',
    steps: ['Center Definition', 'Core Elements', 'Extension', 'Unity'],
    principles: ['Unity', 'Balance', 'Wholeness', 'Integration'],
  },
};

// Current workflows (simulated data)
let workflows = [
  {
    id: 'wf_1',
    name: 'Software Development Pyramid',
    pattern: 'pyramid',
    status: 'active',
    currentStep: 'Core Structure',
    progress: 45,
    created: new Date(Date.now() - 604800000).toISOString(),
    team: ['Developer', 'Designer', 'QA'],
  },
  {
    id: 'wf_2',
    name: 'Product Launch Spiral',
    pattern: 'spiral',
    status: 'active',
    currentStep: 'Integration',
    progress: 75,
    created: new Date(Date.now() - 1209600000).toISOString(),
    team: ['Product Manager', 'Marketing', 'Sales'],
  },
];

// Get workflow status
router.get('/status', (req, res) => {
  res.json({
    app: 'Saqqara-Giza Workflow Engine',
    version: '1.0.0',
    description: 'Ancient design principles → Modern workflow management',
    philosophy: 'Applying timeless wisdom to contemporary challenges',
    features: [
      'Ancient pattern-based workflows',
      'Sacred geometry integration',
      'Harmonious team coordination',
      'Natural progression tracking',
      'Wisdom-guided decision making'
    ],
    availablePatterns: Object.keys(ancientPatterns),
    activeWorkflows: workflows.filter(w => w.status === 'active').length,
    timestamp: new Date().toISOString(),
  });
});

// Get ancient patterns
router.get('/patterns', (req, res) => {
  res.json({
    success: true,
    patterns: ancientPatterns,
    philosophy: {
      core: 'Ancient wisdom meets modern efficiency',
      principles: [
        'Natural order creates sustainable systems',
        'Sacred geometry guides optimal structure',
        'Timeless patterns ensure lasting success',
        'Harmony between tradition and innovation'
      ],
    },
  });
});

// Get all workflows
router.get('/workflows', (req, res) => {
  const { status, pattern } = req.query;
  
  let filtered = workflows;
  
  if (status) {
    filtered = filtered.filter(w => w.status === status);
  }
  
  if (pattern) {
    filtered = filtered.filter(w => w.pattern === pattern);
  }
  
  res.json({
    success: true,
    workflows: filtered,
    total: filtered.length,
    summary: {
      active: workflows.filter(w => w.status === 'active').length,
      completed: workflows.filter(w => w.status === 'completed').length,
      paused: workflows.filter(w => w.status === 'paused').length,
    },
  });
});

// Create new workflow
router.post('/workflows', (req, res) => {
  const { name, pattern, description, team = [] } = req.body;
  
  if (!name || !pattern) {
    return res.status(400).json({
      success: false,
      message: 'Workflow name and pattern are required',
    });
  }
  
  if (!ancientPatterns[pattern]) {
    return res.status(400).json({
      success: false,
      message: 'Invalid pattern. Choose from: ' + Object.keys(ancientPatterns).join(', '),
    });
  }
  
  const workflow = {
    id: `wf_${Date.now()}`,
    name,
    pattern,
    description,
    team,
    status: 'active',
    currentStep: ancientPatterns[pattern].steps[0],
    progress: 0,
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };
  
  workflows.push(workflow);
  
  res.json({
    success: true,
    message: `Workflow created following the ${ancientPatterns[pattern].name}`,
    workflow,
    guidance: generateGuidance(pattern, workflow.currentStep),
  });
});

// Update workflow progress
router.put('/workflows/:id/progress', (req, res) => {
  const { id } = req.params;
  const { action, notes } = req.body; // action: 'advance', 'retreat', 'complete'
  
  const workflow = workflows.find(w => w.id === id);
  
  if (!workflow) {
    return res.status(404).json({
      success: false,
      message: 'Workflow not found',
    });
  }
  
  const pattern = ancientPatterns[workflow.pattern];
  const currentStepIndex = pattern.steps.indexOf(workflow.currentStep);
  
  let newStep = workflow.currentStep;
  let newProgress = workflow.progress;
  let newStatus = workflow.status;
  
  switch (action) {
    case 'advance':
      if (currentStepIndex < pattern.steps.length - 1) {
        newStep = pattern.steps[currentStepIndex + 1];
        newProgress = Math.round(((currentStepIndex + 1) / pattern.steps.length) * 100);
      } else {
        newStatus = 'completed';
        newProgress = 100;
      }
      break;
      
    case 'retreat':
      if (currentStepIndex > 0) {
        newStep = pattern.steps[currentStepIndex - 1];
        newProgress = Math.round((currentStepIndex / pattern.steps.length) * 100);
      }
      break;
      
    case 'complete':
      newStatus = 'completed';
      newProgress = 100;
      newStep = pattern.steps[pattern.steps.length - 1];
      break;
  }
  
  workflow.currentStep = newStep;
  workflow.progress = newProgress;
  workflow.status = newStatus;
  workflow.lastUpdated = new Date().toISOString();
  
  if (notes) {
    workflow.notes = workflow.notes || [];
    workflow.notes.push({
      text: notes,
      timestamp: new Date().toISOString(),
      step: newStep,
    });
  }
  
  res.json({
    success: true,
    message: `Workflow ${action}d to: ${newStep}`,
    workflow,
    guidance: generateGuidance(workflow.pattern, newStep),
    ancientWisdom: getAncientWisdom(workflow.pattern, newStep),
  });
});

// Get workflow guidance
router.get('/workflows/:id/guidance', (req, res) => {
  const { id } = req.params;
  const workflow = workflows.find(w => w.id === id);
  
  if (!workflow) {
    return res.status(404).json({
      success: false,
      message: 'Workflow not found',
    });
  }
  
  const guidance = generateGuidance(workflow.pattern, workflow.currentStep);
  const wisdom = getAncientWisdom(workflow.pattern, workflow.currentStep);
  
  res.json({
    success: true,
    currentStep: workflow.currentStep,
    guidance,
    ancientWisdom: wisdom,
    nextActions: getNextActions(workflow.pattern, workflow.currentStep),
  });
});

// Ancient wisdom endpoint
router.get('/wisdom', (req, res) => {
  const { topic } = req.query;
  
  const wisdomLibrary = {
    leadership: [
      "Like the pharaohs who built lasting monuments, true leadership creates foundations that endure beyond one's lifetime.",
      "The pyramid teaches us that great achievements require stable foundations and careful, methodical progress.",
    ],
    teamwork: [
      "As the ancient builders worked in harmony to raise the pyramids, modern teams must unite their individual strengths.",
      "The sacred geometry of collaboration: each person's unique angle contributes to the perfect whole.",
    ],
    planning: [
      "The ancients aligned their monuments with celestial bodies, teaching us to align our projects with natural rhythms and cosmic timing.",
      "Sacred geometry reveals that the most efficient path is often the one that follows natural patterns.",
    ],
    persistence: [
      "The Sphinx has weathered millennia by adapting to change while maintaining its essential form.",
      "Like the Nile's annual floods that brought renewal, challenges are opportunities for growth and transformation.",
    ],
  };
  
  const wisdom = topic && wisdomLibrary[topic] 
    ? wisdomLibrary[topic][Math.floor(Math.random() * wisdomLibrary[topic].length)]
    : "The ancient wisdom flows through those who listen with their hearts and act with their hands.";
  
  res.json({
    success: true,
    wisdom,
    topic: topic || 'general',
    source: 'Ancient Egyptian and Sacred Geometry Traditions',
  });
});

// Helper functions
function generateGuidance(pattern, currentStep) {
  const patternData = ancientPatterns[pattern];
  const stepIndex = patternData.steps.indexOf(currentStep);
  
  const guidance = {
    pyramid: {
      'Foundation': 'Establish solid groundwork. Like the pyramid builders, ensure your base is unshakeable.',
      'Core Structure': 'Build systematically. Each layer must support the next with precision and strength.',
      'Refinement': 'Perfect the details. The ancient craftsmen knew that excellence lies in the smallest elements.',
      'Completion': 'Crown your achievement. Like the capstone, complete your work with pride and purpose.',
    },
    spiral: {
      'Initiation': 'Begin at the center of purpose. Plant the seed of your intention with clear vision.',
      'Expansion': 'Grow naturally outward. Follow the golden ratio of balanced expansion.',
      'Integration': 'Weave all elements together. Create harmony between all parts of your creation.',
      'Transformation': 'Emerge renewed. Like the spiral, return to your center transformed.',
    },
    mandala: {
      'Center Definition': 'Establish your sacred center. All work radiates from this core truth.',
      'Core Elements': 'Place the fundamental pieces. Each element has its perfect position.',
      'Extension': 'Expand with symmetry and balance. Maintain harmony as you grow.',
      'Unity': 'Achieve perfect wholeness. All parts work together as one.',
    },
  };
  
  return guidance[pattern][currentStep] || 'Follow the ancient path with wisdom and patience.';
}

function getAncientWisdom(pattern, currentStep) {
  const wisdom = {
    pyramid: "The pyramid endures because it was built to last. Build your work with the same permanence in mind.",
    spiral: "The spiral teaches us that growth is not linear but follows natural curves toward perfection.",
    mandala: "The mandala shows us that true completion comes when all parts work in perfect harmony.",
  };
  
  return wisdom[pattern];
}

function getNextActions(pattern, currentStep) {
  const actions = {
    pyramid: [
      'Verify foundation stability',
      'Gather materials for next level',
      'Check alignment with original plan',
      'Coordinate team efforts',
    ],
    spiral: [
      'Assess current expansion',
      'Identify natural growth points',
      'Maintain balance during growth',
      'Prepare for integration phase',
    ],
    mandala: [
      'Review center alignment',
      'Balance opposing elements',
      'Ensure symmetrical progress',
      'Prepare for unification',
    ],
  };
  
  return actions[pattern];
}

module.exports = router;