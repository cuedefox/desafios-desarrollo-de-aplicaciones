import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import RootNavigator from './navigations';
import { store } from './store';
import { styles } from './styles';
import { COLORS } from './themes';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    hey: require('../assets/fonts/hey.ttf')
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.secondary} size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}
