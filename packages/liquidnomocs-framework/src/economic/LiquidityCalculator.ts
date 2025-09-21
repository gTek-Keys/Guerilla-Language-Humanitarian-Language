/**
 * LiquiNomOcs Liquidity Calculator
 * Core calculation engine for Land + Air + Water liquidity
 * Implements natural law economic principles
 */

import { Decimal } from 'decimal.js';
import {
  LandResource,
  AirResource,
  WaterResource,
  LiquidityComponents,
  LandLiquidity,
  AirLiquidity,
  WaterLiquidity,
  ResourceBundle,
  NATURAL_LAW_CONSTANTS,
  LiquiNomOcsError,
} from './types';

export class LiquidityCalculator {
  private readonly goldenRatio = new Decimal(NATURAL_LAW_CONSTANTS.GOLDEN_RATIO);
  private readonly saqqaraWisdom = new Decimal(NATURAL_LAW_CONSTANTS.SAQQARA_WISDOM_COEFFICIENT);

  /**
   * Calculate comprehensive liquidity for all resources
   */
  calculateTotalLiquidity(bundle: ResourceBundle): LiquidityComponents {
    try {
      const landLiquidity = this.calculateLandLiquidity(bundle.land);
      const airLiquidity = this.calculateAirLiquidity(bundle.air);
      const waterLiquidity = this.calculateWaterLiquidity(bundle.water);
      
      const harmonyBalance = this.calculateHarmonyBalance(
        landLiquidity,
        airLiquidity,
        waterLiquidity
      );
      
      const sustainabilityIndex = this.calculateSustainabilityIndex(
        bundle,
        landLiquidity,
        airLiquidity,
        waterLiquidity
      );

      return {
        land: landLiquidity,
        air: airLiquidity,
        water: waterLiquidity,
        harmonyBalance,
        sustainabilityIndex,
      };
    } catch (error) {
      throw new LiquiNomOcsError(
        'Failed to calculate total liquidity',
        'LIQUIDITY_CALCULATION_ERROR',
        { bundle, error: error.message }
      );
    }
  }

  /**
   * Calculate land-based liquidity
   * Applies ancient wisdom principles and sovereignty bonuses
   */
  calculateLandLiquidity(landResources: LandResource[]): LandLiquidity {
    const baseValue = landResources.reduce((total, resource) => {
      const area = resource.area;
      const fertilityBonus = new Decimal(resource.fertility);
      const accessibilityBonus = new Decimal(resource.accessibility);
      
      const resourceValue = area
        .mul(fertilityBonus)
        .mul(accessibilityBonus)
        .mul(NATURAL_LAW_CONSTANTS.LAND_BASE_MULTIPLIER);
      
      return total.add(resourceValue);
    }, new Decimal(0));

    // Calculate multipliers
    const productivityMultiplier = this.calculateProductivityMultiplier(landResources);
    const sovereigntyBonus = this.calculateSovereigntyBonus(landResources);
    const ancientWisdomBonus = this.calculateAncientWisdomBonus(landResources);

    const totalLiquidity = baseValue
      .mul(productivityMultiplier)
      .mul(new Decimal(1).add(sovereigntyBonus))
      .mul(new Decimal(1).add(ancientWisdomBonus));

    return {
      baseValue,
      productivityMultiplier,
      sovereigntyBonus,
      ancientWisdomBonus,
      totalLiquidity,
    };
  }

  /**
   * Calculate air-based liquidity
   * Includes communication, energy, and spiritual values
   */
  calculateAirLiquidity(airResources: AirResource[]): AirLiquidity {
    const baseValue = airResources.reduce((total, resource) => {
      const volume = resource.volume;
      const purityBonus = new Decimal(resource.purity);
      
      let resourceValue = volume
        .mul(purityBonus)
        .mul(NATURAL_LAW_CONSTANTS.AIR_BASE_MULTIPLIER);

      // Special handling for different air types
      if (resource.type === 'communication' || resource.type === 'spiritual') {
        const frequencyBonus = new Decimal(resource.frequency).div(1000); // normalize Hz
        resourceValue = resourceValue.mul(frequencyBonus);
      }

      if (resource.windEnergyPotential > 0) {
        const energyBonus = new Decimal(resource.windEnergyPotential).div(1000);
        resourceValue = resourceValue.add(energyBonus);
      }

      return total.add(resourceValue);
    }, new Decimal(0));

    const purityMultiplier = this.calculateAirPurityMultiplier(airResources);
    const energyPotentialBonus = this.calculateEnergyPotentialBonus(airResources);
    const communicationValue = this.calculateCommunicationValue(airResources);

    const totalLiquidity = baseValue
      .mul(purityMultiplier)
      .add(energyPotentialBonus)
      .add(communicationValue);

    return {
      baseValue,
      purityMultiplier,
      energyPotentialBonus,
      communicationValue,
      totalLiquidity,
    };
  }

  /**
   * Calculate water-based liquidity
   * Emphasizes flow, purity, and sacred significance (Nile wisdom)
   */
  calculateWaterLiquidity(waterResources: WaterResource[]): WaterLiquidity {
    const baseValue = waterResources.reduce((total, resource) => {
      const volume = resource.volume;
      const purityBonus = new Decimal(resource.purity);
      const flowBonus = resource.flowRate.div(100); // normalize flow rate
      
      const resourceValue = volume
        .mul(purityBonus)
        .mul(new Decimal(1).add(flowBonus))
        .mul(NATURAL_LAW_CONSTANTS.WATER_BASE_MULTIPLIER);

      return total.add(resourceValue);
    }, new Decimal(0));

    const purityMultiplier = this.calculateWaterPurityMultiplier(waterResources);
    const flowRateBonus = this.calculateFlowRateBonus(waterResources);
    const sacredValueBonus = this.calculateSacredValueBonus(waterResources);

    const totalLiquidity = baseValue
      .mul(purityMultiplier)
      .mul(new Decimal(1).add(flowRateBonus))
      .mul(new Decimal(1).add(sacredValueBonus));

    return {
      baseValue,
      purityMultiplier,
      flowRateBonus,
      sacredValueBonus,
      totalLiquidity,
    };
  }

  /**
   * Calculate harmony balance between Land, Air, and Water
   * Uses golden ratio principles
   */
  private calculateHarmonyBalance(
    land: LandLiquidity,
    air: AirLiquidity,
    water: WaterLiquidity
  ): number {
    const totalLiquidity = land.totalLiquidity
      .add(air.totalLiquidity)
      .add(water.totalLiquidity);

    if (totalLiquidity.isZero()) return 0;

    // Calculate proportions
    const landProportion = land.totalLiquidity.div(totalLiquidity);
    const airProportion = air.totalLiquidity.div(totalLiquidity);
    const waterProportion = water.totalLiquidity.div(totalLiquidity);

    // Ideal proportions based on natural law
    const idealLandProportion = new Decimal(0.4); // 40% land (foundation)
    const idealAirProportion = new Decimal(0.2); // 20% air (communication)
    const idealWaterProportion = new Decimal(0.4); // 40% water (life)

    // Calculate deviation from ideal
    const landDeviation = landProportion.sub(idealLandProportion).abs();
    const airDeviation = airProportion.sub(idealAirProportion).abs();
    const waterDeviation = waterProportion.sub(idealWaterProportion).abs();

    const totalDeviation = landDeviation.add(airDeviation).add(waterDeviation);
    const harmony = new Decimal(1).sub(totalDeviation.div(2));

    return Math.max(0, Math.min(1, harmony.toNumber()));
  }

  /**
   * Calculate sustainability index
   */
  private calculateSustainabilityIndex(
    bundle: ResourceBundle,
    land: LandLiquidity,
    air: AirLiquidity,
    water: WaterLiquidity
  ): number {
    // Base sustainability from resource balance
    const harmonyFactor = this.calculateHarmonyBalance(land, air, water);
    
    // Ancient wisdom coefficient
    const wisdomFactor = bundle.ancientWisdomCoefficient;
    
    // Rhodium backing stability
    const rhodiumFactor = bundle.rhodiumCollateral.isZero() 
      ? 0.5 
      : Math.min(1, bundle.rhodiumCollateral.div(10000).toNumber()); // normalize against $10k
    
    // Combined sustainability
    const sustainability = (harmonyFactor * 0.4) + (wisdomFactor * 0.3) + (rhodiumFactor * 0.3);
    
    return Math.max(0, Math.min(100, sustainability * 100));
  }

  // Helper methods for specific calculations

  private calculateProductivityMultiplier(landResources: LandResource[]): number {
    const avgFertility = landResources.reduce((sum, r) => sum + r.fertility, 0) / landResources.length || 0;
    const avgAccessibility = landResources.reduce((sum, r) => sum + r.accessibility, 0) / landResources.length || 0;
    return 0.5 + (avgFertility * 0.3) + (avgAccessibility * 0.2);
  }

  private calculateSovereigntyBonus(landResources: LandResource[]): number {
    const sovereignCount = landResources.filter(r => r.sovereigntyStatus === 'sovereign').length;
    const totalCount = landResources.length || 1;
    return (sovereignCount / totalCount) * 0.25; // 25% bonus for full sovereignty
  }

  private calculateAncientWisdomBonus(landResources: LandResource[]): number {
    const avgWisdomValue = landResources.reduce((sum, r) => sum + r.ancientWisdomValue, 0) / landResources.length || 0;
    return avgWisdomValue * 0.15; // 15% bonus for ancient wisdom
  }

  private calculateAirPurityMultiplier(airResources: AirResource[]): number {
    const avgPurity = airResources.reduce((sum, r) => sum + r.purity, 0) / airResources.length || 0;
    return 0.5 + (avgPurity * 0.5);
  }

  private calculateEnergyPotentialBonus(airResources: AirResource[]): number {
    const totalEnergyPotential = airResources.reduce((sum, r) => sum + r.windEnergyPotential, 0);
    return Math.min(1000, totalEnergyPotential / 100); // cap at reasonable bonus
  }

  private calculateCommunicationValue(airResources: AirResource[]): number {
    const communicationResources = airResources.filter(r => 
      r.type === 'communication' || r.type === 'spiritual'
    );
    const avgFrequency = communicationResources.reduce((sum, r) => sum + r.frequency, 0) / communicationResources.length || 0;
    return avgFrequency / 1000; // normalize frequency value
  }

  private calculateWaterPurityMultiplier(waterResources: WaterResource[]): number {
    const avgPurity = waterResources.reduce((sum, r) => sum + r.purity, 0) / waterResources.length || 0;
    return 0.6 + (avgPurity * 0.4);
  }

  private calculateFlowRateBonus(waterResources: WaterResource[]): number {
    const totalFlow = waterResources.reduce((sum, r) => sum.add(r.flowRate), new Decimal(0));
    return Math.min(0.5, totalFlow.div(10000).toNumber()); // 50% max bonus
  }

  private calculateSacredValueBonus(waterResources: WaterResource[]): number {
    const avgSacredValue = waterResources.reduce((sum, r) => sum + r.spiritualSignificance, 0) / waterResources.length || 0;
    return avgSacredValue * 0.2; // 20% bonus for sacred significance
  }
}