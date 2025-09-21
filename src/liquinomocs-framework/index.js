/**
 * LiquiNomOcs Framework
 * Natural law economics implementation
 */

const express = require('express');
const router = express.Router();

// Economic principles based on natural laws
const naturalLaws = {
  flow: {
    name: 'Flow Dynamics',
    description: 'Economics that follow natural flow patterns like water and air',
    principles: [
      'Resources flow naturally to where they are most needed',
      'Resistance creates inefficiency; smooth flow creates abundance',
      'Circular flows are more sustainable than linear ones',
    ],
  },
  equilibrium: {
    name: 'Natural Equilibrium',
    description: 'Self-balancing economic systems like ecosystems',
    principles: [
      'Supply and demand naturally balance when not artificially constrained',
      'Diversity creates stability and resilience',
      'Excess in one area naturally flows to deficient areas',
    ],
  },
  growth: {
    name: 'Organic Growth',
    description: 'Economic growth patterns that mirror biological systems',
    principles: [
      'Sustainable growth follows natural S-curves',
      'Exponential growth is temporary; sustainable growth is cyclical',
      'Growth requires both expansion and consolidation phases',
    ],
  },
  symbiosis: {
    name: 'Economic Symbiosis',
    description: 'Mutually beneficial economic relationships',
    principles: [
      'True prosperity comes from mutual benefit, not extraction',
      'Healthy systems support all participants',
      'Competition and cooperation coexist naturally',
    ],
  },
};

// Economic indicators and metrics
let economicState = {
  flowIndex: 75, // 0-100, how well resources are flowing
  equilibriumIndex: 68, // 0-100, how balanced the system is
  sustainabilityIndex: 82, // 0-100, long-term health indicator
  symbiosisIndex: 71, // 0-100, cooperation vs competition ratio
  lastUpdated: new Date().toISOString(),
};

// Market participants
let participants = [
  {
    id: 'part_1',
    name: 'Community Collective',
    type: 'cooperative',
    resources: { time: 100, skills: 85, capital: 45 },
    needs: { funding: 60, tools: 40, training: 30 },
    flowScore: 78,
  },
  {
    id: 'part_2',
    name: 'Innovation Hub',
    type: 'enterprise',
    resources: { capital: 90, technology: 95, network: 80 },
    needs: { talent: 70, ideas: 50, community: 35 },
    flowScore: 73,
  },
  {
    id: 'part_3',
    name: 'Resource Stewards',
    type: 'stewardship',
    resources: { materials: 88, knowledge: 92, connections: 75 },
    needs: { innovation: 55, distribution: 45, growth: 40 },
    flowScore: 81,
  },
];

// Framework status
router.get('/status', (req, res) => {
  res.json({
    framework: 'LiquiNomOcs',
    version: '1.0.0',
    description: 'Natural law economics framework',
    philosophy: 'Economics that flows like nature, grows like life, and sustains like ecosystems',
    features: [
      'Natural flow dynamics',
      'Ecosystem-based economics',
      'Symbiotic value creation',
      'Sustainable growth patterns',
      'Self-balancing mechanisms'
    ],
    naturalLaws: Object.keys(naturalLaws),
    currentState: economicState,
    activeParticipants: participants.length,
    timestamp: new Date().toISOString(),
  });
});

// Get natural laws
router.get('/natural-laws', (req, res) => {
  res.json({
    success: true,
    naturalLaws,
    philosophy: {
      core: 'Economics should mirror the patterns that create abundance in nature',
      principles: [
        'Nature creates abundance through cooperation and symbiosis',
        'Sustainable systems are self-regulating and self-healing',
        'True wealth flows from the health of the whole system',
        'Diversity creates resilience; monocultures create fragility'
      ],
    },
  });
});

// Economic state dashboard
router.get('/state', (req, res) => {
  const insights = generateEconomicInsights(economicState);
  const recommendations = generateRecommendations(economicState);
  
  res.json({
    success: true,
    currentState: economicState,
    insights,
    recommendations,
    trends: {
      direction: calculateTrend(economicState),
      stability: calculateStability(economicState),
      sustainability: economicState.sustainabilityIndex,
    },
  });
});

// Participants in the economic ecosystem
router.get('/participants', (req, res) => {
  const { type } = req.query;
  
  let filtered = participants;
  if (type) {
    filtered = participants.filter(p => p.type === type);
  }
  
  const ecosystem = analyzeEcosystem(participants);
  
  res.json({
    success: true,
    participants: filtered,
    ecosystem,
    networkHealth: calculateNetworkHealth(participants),
  });
});

// Add new participant
router.post('/participants', (req, res) => {
  const { name, type, resources = {}, needs = {} } = req.body;
  
  if (!name || !type) {
    return res.status(400).json({
      success: false,
      message: 'Participant name and type are required',
    });
  }
  
  const participant = {
    id: `part_${Date.now()}`,
    name,
    type,
    resources,
    needs,
    flowScore: calculateFlowScore(resources, needs),
    joined: new Date().toISOString(),
  };
  
  participants.push(participant);
  updateEconomicState();
  
  res.json({
    success: true,
    message: 'Participant added to the economic ecosystem',
    participant,
    ecosystemImpact: analyzeNewParticipantImpact(participant),
  });
});

// Resource flow analysis
router.get('/flows', (req, res) => {
  const flows = analyzeResourceFlows(participants);
  const bottlenecks = identifyBottlenecks(participants);
  const opportunities = identifyFlowOpportunities(participants);
  
  res.json({
    success: true,
    flows,
    bottlenecks,
    opportunities,
    flowEfficiency: economicState.flowIndex,
    recommendations: generateFlowRecommendations(flows, bottlenecks),
  });
});

// Create resource exchange
router.post('/exchanges', (req, res) => {
  const { fromParticipant, toParticipant, resource, amount, terms } = req.body;
  
  const exchange = {
    id: `ex_${Date.now()}`,
    from: fromParticipant,
    to: toParticipant,
    resource,
    amount,
    terms: terms || 'mutual_benefit',
    status: 'proposed',
    created: new Date().toISOString(),
  };
  
  const impact = simulateExchangeImpact(exchange, participants);
  
  res.json({
    success: true,
    message: 'Resource exchange proposed',
    exchange,
    projectedImpact: impact,
    naturalAlignment: assessNaturalAlignment(exchange),
  });
});

// Sustainability metrics
router.get('/sustainability', (req, res) => {
  const metrics = calculateSustainabilityMetrics(participants, economicState);
  const forecast = generateSustainabilityForecast(metrics);
  
  res.json({
    success: true,
    metrics,
    forecast,
    recommendations: generateSustainabilityRecommendations(metrics),
    naturalBenchmarks: getNaturalBenchmarks(),
  });
});

// Helper functions
function generateEconomicInsights(state) {
  const insights = [];
  
  if (state.flowIndex < 60) {
    insights.push({
      type: 'concern',
      message: 'Resource flows are restricted. Consider removing barriers to natural exchange.',
    });
  }
  
  if (state.equilibriumIndex < 50) {
    insights.push({
      type: 'warning',
      message: 'System imbalance detected. Resources may be concentrating unnaturally.',
    });
  }
  
  if (state.sustainabilityIndex > 80) {
    insights.push({
      type: 'positive',
      message: 'Excellent sustainability indicators. The system is aligned with natural patterns.',
    });
  }
  
  if (state.symbiosisIndex > 75) {
    insights.push({
      type: 'positive',
      message: 'High cooperation levels create a thriving ecosystem for all participants.',
    });
  }
  
  return insights;
}

function generateRecommendations(state) {
  const recommendations = [];
  
  if (state.flowIndex < state.equilibriumIndex) {
    recommendations.push('Focus on removing flow barriers to restore natural balance');
  }
  
  if (state.symbiosisIndex < 70) {
    recommendations.push('Encourage more cooperative and mutually beneficial exchanges');
  }
  
  if (state.sustainabilityIndex < 75) {
    recommendations.push('Implement more regenerative practices to ensure long-term health');
  }
  
  return recommendations;
}

function analyzeEcosystem(participants) {
  const types = {};
  participants.forEach(p => {
    types[p.type] = (types[p.type] || 0) + 1;
  });
  
  return {
    diversity: Object.keys(types).length,
    balance: calculateTypeBalance(types),
    totalFlow: participants.reduce((sum, p) => sum + p.flowScore, 0) / participants.length,
    healthScore: calculateEcosystemHealth(participants),
  };
}

function calculateFlowScore(resources, needs) {
  const resourceSum = Object.values(resources).reduce((sum, val) => sum + val, 0);
  const needsSum = Object.values(needs).reduce((sum, val) => sum + val, 0);
  
  // Higher score when resources > needs (can contribute to flow)
  return Math.min(100, Math.max(0, (resourceSum / (needsSum + 1)) * 50));
}

function analyzeResourceFlows(participants) {
  const flows = [];
  
  participants.forEach(source => {
    participants.forEach(target => {
      if (source.id !== target.id) {
        const potential = calculateFlowPotential(source, target);
        if (potential > 30) {
          flows.push({
            from: source.name,
            to: target.name,
            potential,
            resources: identifyFlowableResources(source, target),
          });
        }
      }
    });
  });
  
  return flows.sort((a, b) => b.potential - a.potential);
}

function calculateFlowPotential(source, target) {
  let potential = 0;
  
  Object.keys(source.resources).forEach(resource => {
    if (target.needs[resource]) {
      const surplus = Math.max(0, source.resources[resource] - 50); // Assume 50 is baseline need
      const demand = target.needs[resource];
      potential += Math.min(surplus, demand);
    }
  });
  
  return potential;
}

function identifyFlowableResources(source, target) {
  const flowable = [];
  
  Object.keys(source.resources).forEach(resource => {
    if (target.needs[resource] && source.resources[resource] > 50) {
      flowable.push({
        resource,
        available: source.resources[resource] - 50,
        needed: target.needs[resource],
      });
    }
  });
  
  return flowable;
}

function updateEconomicState() {
  // Recalculate economic indicators based on current participants
  const avgFlow = participants.reduce((sum, p) => sum + p.flowScore, 0) / participants.length;
  economicState.flowIndex = Math.round(avgFlow);
  economicState.lastUpdated = new Date().toISOString();
}

function calculateTrend(state) {
  // Simplified trend calculation
  const avg = (state.flowIndex + state.equilibriumIndex + state.sustainabilityIndex + state.symbiosisIndex) / 4;
  if (avg > 75) return 'improving';
  if (avg > 50) return 'stable';
  return 'declining';
}

function calculateStability(state) {
  const values = [state.flowIndex, state.equilibriumIndex, state.sustainabilityIndex, state.symbiosisIndex];
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
  const variance = values.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / values.length;
  return variance < 100 ? 'stable' : variance < 400 ? 'moderate' : 'volatile';
}

function getNaturalBenchmarks() {
  return {
    forestEcosystem: {
      diversity: 'High species diversity creates resilience',
      resourceCycling: '99% of nutrients are recycled efficiently',
      cooperation: 'Trees share resources through mycorrhizal networks',
    },
    riverSystem: {
      flow: 'Water naturally finds the most efficient path',
      adaptation: 'System adapts to obstacles while maintaining direction',
      renewal: 'Continuous flow prevents stagnation',
    },
    animalCollective: {
      specialization: 'Each member contributes unique capabilities',
      communication: 'Information flows freely for collective benefit',
      leadership: 'Leadership is situational and distributed',
    },
  };
}

module.exports = router;