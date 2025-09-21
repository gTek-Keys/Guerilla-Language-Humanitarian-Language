import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import DataSovereigntyScreen from './src/screens/DataSovereigntyScreen';
import RhodiumPoolScreen from './src/screens/RhodiumPoolScreen';
import KnoxSecurityScreen from './src/screens/KnoxSecurityScreen';
import GuerillaLanguageScreen from './src/screens/GuerillaLanguageScreen';

// Services
import { initializeKnoxSecurity } from './src/services/KnoxService';
import { initializeRhodiumPool } from './src/services/RhodiumService';

const Tab = createBottomTabNavigator();

export default function App() {
  React.useEffect(() => {
    // Initialize Samsung Knox Security
    initializeKnoxSecurity();
    
    // Initialize Rhodium-backed liquidity pools
    initializeRhodiumPool();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Data Sovereignty':
                  iconName = focused ? 'shield' : 'shield-outline';
                  break;
                case 'Rhodium Pool':
                  iconName = focused ? 'diamond' : 'diamond-outline';
                  break;
                case 'Knox Security':
                  iconName = focused ? 'lock-closed' : 'lock-closed-outline';
                  break;
                case 'Guerilla Language':
                  iconName = focused ? 'language' : 'language-outline';
                  break;
                default:
                  iconName = 'circle';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4F46E5',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#1a1a2e',
              borderTopColor: '#4F46E5',
            },
            headerStyle: {
              backgroundColor: '#1a1a2e',
            },
            headerTintColor: '#fff',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Data Sovereignty" component={DataSovereigntyScreen} />
          <Tab.Screen name="Rhodium Pool" component={RhodiumPoolScreen} />
          <Tab.Screen name="Knox Security" component={KnoxSecurityScreen} />
          <Tab.Screen name="Guerilla Language" component={GuerillaLanguageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor="#1a1a2e" />
    </SafeAreaProvider>
  );
}