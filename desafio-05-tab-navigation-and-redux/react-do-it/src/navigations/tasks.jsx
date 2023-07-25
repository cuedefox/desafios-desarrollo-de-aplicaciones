import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import { Menu, Tasks } from '../screens';
import { COLORS } from '../themes';
const Stack = createNativeStackNavigator();

function TasksNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 80
        },
        headerTitleStyle: {
          fontFamily: 'hey',
          fontSize: 16,
          color: COLORS.text
        },
        headerTintColor: COLORS.white,
        animation: 'fade_from_bottom'
      })}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-circle"
                size={30}
                color={COLORS.text}
              />
            </TouchableOpacity>
          ),
          title: 'Tareas'
        })}
      />
    </Stack.Navigator>
  );
}

export default TasksNavigator;
