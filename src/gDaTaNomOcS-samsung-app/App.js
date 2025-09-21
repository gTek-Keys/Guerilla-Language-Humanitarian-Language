/**
 * gDaTaNomOcS Samsung App - Knox-secured data sovereignty
 * Main React Native entry point
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

import KnoxSecurityManager from './src/security/KnoxSecurityManager';
import DataSovereigntyManager from './src/data/DataSovereigntyManager';
import RhodiumCommissionTracker from './src/blockchain/RhodiumCommissionTracker';

const App = () => {
  const [securityStatus, setSecurityStatus] = React.useState('Initializing...');
  const [dataSovereignty, setDataSovereignty] = React.useState(false);

  React.useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Initialize Knox Security
      const knoxStatus = await KnoxSecurityManager.initialize();
      setSecurityStatus(knoxStatus ? 'Knox Secured' : 'Standard Security');

      // Initialize Data Sovereignty
      const sovereigntyStatus = await DataSovereigntyManager.initialize();
      setDataSovereignty(sovereigntyStatus);

      // Initialize Rhodium Commission Tracking
      await RhodiumCommissionTracker.initialize();
    } catch (error) {
      console.error('App initialization error:', error);
      Alert.alert('Initialization Error', error.message);
    }
  };

  const handleSecurityCheck = () => {
    KnoxSecurityManager.performSecurityCheck()
      .then(result => {
        Alert.alert('Security Check', result.message);
      })
      .catch(error => {
        Alert.alert('Security Error', error.message);
      });
  };

  const handleDataSovereigntyToggle = () => {
    DataSovereigntyManager.toggleSovereignty()
      .then(status => {
        setDataSovereignty(status);
        Alert.alert('Data Sovereignty', 
          status ? 'Enabled - Your data is sovereign' : 'Disabled');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>gDaTaNomOcS</Text>
          <Text style={styles.subtitle}>Knox-Secured Data Sovereignty</Text>
        </View>

        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Security Status:</Text>
          <Text style={[styles.statusValue, 
            securityStatus === 'Knox Secured' ? styles.secured : styles.standard]}>
            {securityStatus}
          </Text>
        </View>

        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Data Sovereignty:</Text>
          <Text style={[styles.statusValue, 
            dataSovereignty ? styles.enabled : styles.disabled]}>
            {dataSovereignty ? 'Enabled' : 'Disabled'}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSecurityCheck}>
            <Text style={styles.buttonText}>Run Security Check</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleDataSovereigntyToggle}>
            <Text style={styles.buttonText}>Toggle Data Sovereignty</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Features:</Text>
          <Text style={styles.infoText}>• Knox Hardware Security</Text>
          <Text style={styles.infoText}>• Encrypted Data Storage</Text>
          <Text style={styles.infoText}>• Sovereign Data Management</Text>
          <Text style={styles.infoText}>• Rhodium-backed Commissions</Text>
          <Text style={styles.infoText}>• Samsung Ultra Exclusive</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
  statusCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secured: {
    color: '#28a745',
  },
  standard: {
    color: '#ffc107',
  },
  enabled: {
    color: '#28a745',
  },
  disabled: {
    color: '#dc3545',
  },
  buttonContainer: {
    margin: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 4,
  },
});

export default App;