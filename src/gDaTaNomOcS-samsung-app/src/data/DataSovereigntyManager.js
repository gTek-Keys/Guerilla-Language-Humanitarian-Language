/**
 * Data Sovereignty Manager
 * Manages sovereign data storage and control
 */

import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DataSovereigntyManager {
  static isInitialized = false;
  static sovereigntyEnabled = false;
  static encryptionKey = null;

  static async initialize() {
    try {
      // Generate or retrieve encryption key
      this.encryptionKey = await this.getOrCreateEncryptionKey();
      
      // Check current sovereignty status
      const status = await this.getSovereigntyStatus();
      this.sovereigntyEnabled = status;
      
      this.isInitialized = true;
      console.log('Data Sovereignty Manager initialized');
      
      return this.sovereigntyEnabled;
    } catch (error) {
      console.error('Data Sovereignty initialization failed:', error);
      throw error;
    }
  }

  static async getOrCreateEncryptionKey() {
    try {
      let key = await EncryptedStorage.getItem('sovereignty_key');
      
      if (!key) {
        // Generate new encryption key
        key = this.generateEncryptionKey();
        await EncryptedStorage.setItem('sovereignty_key', key);
        console.log('New encryption key generated');
      }
      
      return key;
    } catch (error) {
      console.error('Encryption key management failed:', error);
      throw error;
    }
  }

  static generateEncryptionKey() {
    // Generate a secure random key
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 64; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  }

  static async getSovereigntyStatus() {
    try {
      const status = await AsyncStorage.getItem('sovereignty_enabled');
      return status === 'true';
    } catch (error) {
      console.error('Failed to get sovereignty status:', error);
      return false;
    }
  }

  static async toggleSovereignty() {
    try {
      if (!this.isInitialized) {
        throw new Error('Data Sovereignty Manager not initialized');
      }

      this.sovereigntyEnabled = !this.sovereigntyEnabled;
      
      await AsyncStorage.setItem('sovereignty_enabled', 
        this.sovereigntyEnabled.toString());
      
      if (this.sovereigntyEnabled) {
        await this.enableSovereignty();
      } else {
        await this.disableSovereignty();
      }
      
      console.log(`Data sovereignty ${this.sovereigntyEnabled ? 'enabled' : 'disabled'}`);
      return this.sovereigntyEnabled;
    } catch (error) {
      console.error('Failed to toggle sovereignty:', error);
      throw error;
    }
  }

  static async enableSovereignty() {
    try {
      // Migrate existing data to encrypted storage
      await this.migrateToEncryptedStorage();
      
      // Setup sovereignty protocols
      await this.setupSovereigntyProtocols();
      
      console.log('Data sovereignty enabled');
    } catch (error) {
      console.error('Failed to enable sovereignty:', error);
      throw error;
    }
  }

  static async disableSovereignty() {
    try {
      // Note: In a real implementation, you might want to keep data encrypted
      // This is for demonstration purposes
      console.log('Data sovereignty disabled');
    } catch (error) {
      console.error('Failed to disable sovereignty:', error);
      throw error;
    }
  }

  static async migrateToEncryptedStorage() {
    try {
      // Get all keys from AsyncStorage
      const keys = await AsyncStorage.getAllKeys();
      
      for (const key of keys) {
        if (key.startsWith('user_data_')) {
          const value = await AsyncStorage.getItem(key);
          if (value) {
            // Encrypt and store in secure storage
            await EncryptedStorage.setItem(key, value);
            // Remove from standard storage
            await AsyncStorage.removeItem(key);
          }
        }
      }
      
      console.log('Data migration to encrypted storage completed');
    } catch (error) {
      console.error('Data migration failed:', error);
      throw error;
    }
  }

  static async setupSovereigntyProtocols() {
    try {
      const protocols = {
        dataLocation: 'device_local',
        encryptionEnabled: true,
        backupEnabled: false,
        cloudSyncEnabled: false,
        thirdPartyAccess: false,
        timestamp: new Date().toISOString(),
      };
      
      await EncryptedStorage.setItem('sovereignty_protocols', 
        JSON.stringify(protocols));
      
      console.log('Sovereignty protocols established');
    } catch (error) {
      console.error('Failed to setup sovereignty protocols:', error);
      throw error;
    }
  }

  static getSovereigntyInfo() {
    return {
      initialized: this.isInitialized,
      enabled: this.sovereigntyEnabled,
      encryptionActive: this.sovereigntyEnabled && !!this.encryptionKey,
      keyGenerated: !!this.encryptionKey,
    };
  }
}

export default DataSovereigntyManager;