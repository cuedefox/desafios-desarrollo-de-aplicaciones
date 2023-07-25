import { Ionicons } from '@expo/vector-icons/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TasksNavigator from './tasks';
import Stats from '../screens/stats';
import { COLORS } from '../themes';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TasksTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'hey',
          fontSize: 10
        },
        tabBarStyle: {
          backgroundColor: COLORS.white
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarIconStyle: {
          fontSize: 22
        }
      }}
    >
      <BottomTab.Screen
        name="TasksTab"
        component={TasksNavigator}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
                size={20}
                color={color}
              />
            );
          }
        }}
      />
      <BottomTab.Screen
        name="StatsTab"
        component={Stats}
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? 'stats-chart' : 'stats-chart-outline'}
                size={20}
                color={color}
              />
            );
          }
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
