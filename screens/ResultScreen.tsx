import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ route }: Props) {
  const { won, baseNumber, score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {won ? "You've won" : "You've lost"}{'\n'}
        baseNumber was {baseNumber} and score {score}
      </Text>
      {won && <Text style={styles.trophy}>🏆</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  trophy: {
    fontSize: 48,
    marginTop: 24,
  },
});
