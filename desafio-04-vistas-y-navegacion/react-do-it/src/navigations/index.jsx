import { NavigationContainer } from '@react-navigation/native';

import TasksNavigator from './tasks';

function RootNavigator() {
  return (
    <NavigationContainer>
      <TasksNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
