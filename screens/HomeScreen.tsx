import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

import { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const startGame = () => {
    navigation.navigate('Game');
  };

  const showHint = () => {
    Alert.alert('Long press to start the game');
  };

  const tapGesture = Gesture.Tap().onEnd(() => {
    runOnJS(showHint)();
  });

  const longPressGesture = Gesture.LongPress()
    .minDuration(500)
    .onStart(() => {
      runOnJS(startGame)();
    });

  const gesture = Gesture.Race(longPressGesture, tapGesture);

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>Start game!</Text>
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#8e1bb5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});
