import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  icone: keyof typeof MaterialIcons.glyphMap;
  legenda: string;
  evento: () => void;
};

export default function BotãoIcone({ icone, legenda, evento }: Props) {
  return (
    <Pressable style={styles.botãoIcone} onPress={evento}>
      <MaterialIcons name={icone} size={24} color="#fff" />
      <Text style={styles.Legenda}>{legenda}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    botãoIcone: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Legenda: {
    color: '#fff',
    marginTop: 12,
  },
});