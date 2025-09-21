import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=gTek' }}
            style={styles.logo}
          />
          <Text style={styles.title}>gDaTaNomOcS</Text>
          <Text style={styles.subtitle}>Samsung Ultra Exclusive</Text>
        </View>

        {/* Iron Rule Framework Banner */}
        <View style={styles.ironRuleBanner}>
          <Text style={styles.ironRuleTitle}>🛡️ Iron Rule Framework</Text>
          <Text style={styles.ironRuleText}>
            Commission or charitable donation only • Rhodium collateralized
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Data Sovereignty</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>99.9%</Text>
            <Text style={styles.statLabel}>Knox Security</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Protection</Text>
          </View>
        </View>

        {/* Core Features */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>🏛️ Ancient Wisdom Features</Text>
          
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>📱</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Native Data Blocking</Text>
              <Text style={styles.featureDescription}>
                User-controlled data sovereignty with Saqqara-Giza protocols
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>💎</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Rhodium-Backed Pools</Text>
              <Text style={styles.featureDescription}>
                Data liquidity pools collateralized in precious metals
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>🗣️</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Guerilla Language</Text>
              <Text style={styles.featureDescription}>
                Linguistic sovereignty protocols for data communication
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>🔒</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Knox Integration</Text>
              <Text style={styles.featureDescription}>
                Samsung Ultra exclusive security framework
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Codex Information */}
        <View style={styles.codexContainer}>
          <Text style={styles.codexTitle}>📜 Codex Sovereign Identity</Text>
          <Text style={styles.codexId}>DIV-LA-JHILL-STFL02035</Text>
          <Text style={styles.codexEntity}>Home Made Productions • CRID: 51509329</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#4F46E5',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#4F46E5',
    fontStyle: 'italic',
  },
  ironRuleBanner: {
    backgroundColor: '#4F46E5',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  ironRuleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  ironRuleText: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  },
  statCard: {
    backgroundColor: '#1a1a2e',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#4F46E5',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
  featuresContainer: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: '#1a1a2e',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#4F46E5',
  },
  featureIcon: {
    fontSize: 30,
    marginRight: 15,
    alignSelf: 'center',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
  },
  codexContainer: {
    backgroundColor: '#1a1a2e',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F46E5',
    alignItems: 'center',
  },
  codexTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 10,
  },
  codexId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  codexEntity: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
  },
});