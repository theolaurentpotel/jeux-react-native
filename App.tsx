import { HeaderBackButton } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootStackParamList } from '@/navigation/types';
import GameScreen from '@/screens/GameScreen';
import HomeScreen from '@/screens/HomeScreen';
import ResultScreen from '@/screens/ResultScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Game" component={GameScreen} options={{ title: 'Game' }} />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={({ navigation }) => ({
              title: 'Result',
              headerLeft: (props) => (
                <HeaderBackButton {...props} onPress={() => navigation.popToTop()} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
