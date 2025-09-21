/**
 * LiquiNomOcs Economic Types
 * Core type definitions for natural law economic theory
 */

import { Decimal } from 'decimal.js';

// Primary Resource Types (Land + Air + Water)
export interface LandResource {
  type: 'agricultural' | 'residential' | 'commercial' | 'industrial' | 'sacred';
  area: Decimal; // in square meters
  fertility: number; // 0-1 scale
  accessibility: number; // 0-1 scale
  sovereigntyStatus: 'sovereign' | 'colonized' | 'transitioning';
  ancientWisdomValue: number; // Saqqara-Giza rating
}

export interface AirResource {
  type: 'breathable' | 'industrial' | 'transportation' | 'communication' | 'spiritual';
  volume: Decimal; // in cubic meters
  purity: number; // 0-1 scale
  frequency: number; // Hz for communication/spiritual
  carbonOffset: Decimal; // carbon credits
  windEnergyPotential: number; // kWh potential
}

export interface WaterResource {
  type: 'drinking' | 'irrigation' | 'industrial' | 'sacred' | 'transportation';
  volume: Decimal; // in liters
  purity: number; // 0-1 scale
  salinity: number; // ppm
  flowRate: Decimal; // liters per second
  spiritualSignificance: number; // 0-1 scale (Nile wisdom)
}

// Liquidity Calculations
export interface LiquidityComponents {
  land: LandLiquidity;
  air: AirLiquidity;
  water: WaterLiquidity;
  harmonyBalance: number; // 0-1 scale
  sustainabilityIndex: number; // 0-100 scale
}

export interface LandLiquidity {
  baseValue: Decimal;
  productivityMultiplier: number;
  sovereigntyBonus: number;
  ancientWisdomBonus: number;
  totalLiquidity: Decimal;
}

export interface AirLiquidity {
  baseValue: Decimal;
  purityMultiplier: number;
  energyPotentialBonus: number;
  communicationValue: number;
  totalLiquidity: Decimal;
}

export interface WaterLiquidity {
  baseValue: Decimal;
  purityMultiplier: number;
  flowRateBonus: number;
  sacredValueBonus: number;
  totalLiquidity: Decimal;
}

// Economic Resistance
export interface AntiColonialResistanceMetrics {
  resourceLiberation: number; // 0-100 percentage
  sovereignEconomicParticipation: number; // 0-100 percentage
  colonialDependencyReduction: number; // 0-100 percentage
  indigenousKnowledgeIntegration: number; // 0-100 percentage
  communityWealthRetention: number; // 0-100 percentage
}

export interface ResistanceStrategy {
  name: string;
  type: 'economic' | 'educational' | 'technological' | 'spiritual' | 'legal';
  effectiveness: number; // 0-1 scale
  implementationCost: Decimal;
  timeframe: number; // months
  ironRuleAlignment: boolean;
  ancientWisdomBasis: string;
}

// Value Creation
export interface SustainableValueCreation {
  regenerativeCapacity: number; // 0-1 scale
  communityBenefit: number; // 0-1 scale
  environmentalImpact: number; // -1 to 1 scale (negative is beneficial)
  economicResilience: number; // 0-1 scale
  culturalPreservation: number; // 0-1 scale
}

export interface ValueCreationAlgorithm {
  inputResources: ResourceBundle;
  transformationProcess: TransformationProcess;
  outputValue: EconomicOutput;
  resistanceGenerated: AntiColonialResistanceMetrics;
  sustainabilityImpact: SustainableValueCreation;
}

export interface ResourceBundle {
  land: LandResource[];
  air: AirResource[];
  water: WaterResource[];
  rhodiumCollateral: Decimal;
  ancientWisdomCoefficient: number;
}

export interface TransformationProcess {
  method: 'industrial' | 'agricultural' | 'technological' | 'spiritual' | 'educational';
  efficiency: number; // 0-1 scale
  wasteGeneration: number; // 0-1 scale (lower is better)
  communityInvolvement: number; // 0-1 scale
  ironRuleCompliance: boolean;
}

export interface EconomicOutput {
  monetaryValue: Decimal;
  socialValue: number; // 0-1 scale
  environmentalValue: number; // 0-1 scale
  spiritualValue: number; // 0-1 scale
  resistanceValue: number; // 0-1 scale
  totalIntegratedValue: Decimal;
}

// Data Currency
export interface DataCurrency {
  type: 'personal' | 'behavioral' | 'biometric' | 'location' | 'communication' | 'creative';
  volume: Decimal; // units of data
  quality: number; // 0-1 scale
  sovereignty: number; // 0-1 scale (user control)
  marketValue: Decimal; // in USD
  rhodiumEquivalent: Decimal; // in grams
  resistanceCoefficient: number; // anti-colonial value
}

export interface DataCurrencyExchange {
  fromCurrency: DataCurrency;
  toCurrency: 'USD' | 'rhodium' | 'land' | 'air' | 'water';
  exchangeRate: Decimal;
  ironRuleFee: Decimal; // 15% for Iron Rule compliance
  resistanceBonus: Decimal; // bonus for anti-colonial alignment
  finalValue: Decimal;
}

// Iron Rule Framework Integration
export interface IronRuleEconomics {
  commissionOnly: boolean;
  rhodiumCollateralization: RhodiumCollateral;
  sovereignEconomicPrinciples: boolean;
  trustBasedManagement: boolean;
  ancientWisdomIntegration: boolean;
}

export interface RhodiumCollateral {
  required: boolean;
  percentage: number; // typically 15%
  currentPrice: Decimal; // USD per ounce
  requiredOunces: Decimal;
  verificationStatus: 'verified' | 'pending' | 'insufficient';
  saqqaraGizaCompliant: boolean;
}

// Ancient Wisdom Economics
export interface SaqqaraGizaEconomics {
  djoserClientPrinciples: DjoserPrinciples;
  imhotepAdvisorWisdom: ImhotepWisdom;
  pyramidArchitecturalEconomics: ArchitecturalEconomics;
  sacredGeometryRatios: SacredGeometry;
}

export interface DjoserPrinciples {
  pharaohLevelVision: boolean;
  sovereignDecisionAuthority: boolean;
  monumentalThinking: number; // 0-1 scale
  dynasticContinuity: number; // 0-1 scale
}

export interface ImhotepWisdom {
  polymathExpertise: number; // 0-1 scale
  innovationCapacity: number; // 0-1 scale
  architecturalSoundness: number; // 0-1 scale
  spiritualIntegration: number; // 0-1 scale
}

export interface ArchitecturalEconomics {
  foundationStability: number; // 0-1 scale
  structuralIntegrity: number; // 0-1 scale
  aestheticHarmony: number; // 0-1 scale
  functionalEfficiency: number; // 0-1 scale
  enduranceFactor: number; // projected years of sustainability
}

export interface SacredGeometry {
  goldenRatio: boolean;
  fibonacciSequence: boolean;
  harmonicProportions: boolean;
  cosmicAlignment: boolean;
  mathematicalPerfection: number; // 0-1 scale
}

// Natural Law Constants
export const NATURAL_LAW_CONSTANTS = {
  LAND_BASE_MULTIPLIER: 1.2,
  AIR_BASE_MULTIPLIER: 0.8,
  WATER_BASE_MULTIPLIER: 1.5,
  RHODIUM_COLLATERAL_PERCENTAGE: 0.15,
  IRON_RULE_FEE_PERCENTAGE: 0.15,
  GOLDEN_RATIO: 1.618033988749,
  SAQQARA_WISDOM_COEFFICIENT: 2.618033988749, // Golden ratio + 1
  ANCIENT_STABILITY_FACTOR: 4700, // Years of ancient wisdom
} as const;

// Utility Types
export type ResourceType = 'land' | 'air' | 'water';
export type ResistanceLevel = 'minimal' | 'moderate' | 'significant' | 'revolutionary';
export type SustainabilityRating = 'unsustainable' | 'transitioning' | 'sustainable' | 'regenerative';
export type WisdomLevel = 'novice' | 'adept' | 'sage' | 'polymath' | 'ancient-master';

// Error Types
export class LiquiNomOcsError extends Error {
  constructor(
    message: string,
    public code: string,
    public context?: Record<string, any>
  ) {
    super(message);
    this.name = 'LiquiNomOcsError';
  }
}

export class IronRuleViolationError extends LiquiNomOcsError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 'IRON_RULE_VIOLATION', context);
    this.name = 'IronRuleViolationError';
  }
}

export class InsufficientRhodiumError extends LiquiNomOcsError {
  constructor(required: Decimal, available: Decimal) {
    super(
      `Insufficient rhodium collateral: ${available} available, ${required} required`,
      'INSUFFICIENT_RHODIUM',
      { required: required.toString(), available: available.toString() }
    );
    this.name = 'InsufficientRhodiumError';
  }
}