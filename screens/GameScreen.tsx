import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function GameScreen({ navigation }: Props) {
  const [baseNumber] = useState(randomNumber);
  const [hiddenNumber] = useState(() => {
    let value = randomNumber();
    while (value === baseNumber) {
      value = randomNumber();
    }
    return value;
  });

  const guess = (choice: 'higher' | 'lower') => {
    const won = choice === 'higher' ? hiddenNumber > baseNumber : hiddenNumber < baseNumber;
    const score = Math.abs(hiddenNumber - baseNumber);
    navigation.replace('Result', { won, baseNumber, score });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starting: {baseNumber}</Text>

      <Pressable style={[styles.button, styles.higherButton]} onPress={() => guess('higher')}>
        <Text style={styles.buttonText}>Higher</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.lowerButton]} onPress={() => guess('lower')}>
        <Text style={styles.buttonText}>Lower</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    minWidth: 140,
    alignItems: 'center',
  },
  higherButton: {
    backgroundColor: '#2e7d32',
  },
  lowerButton: {
    backgroundColor: '#c62828',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
