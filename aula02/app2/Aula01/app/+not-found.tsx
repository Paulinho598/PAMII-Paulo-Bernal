import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Cuidado!' }} />
      <View style={styles.container}>
        <h1 style={styles.button}>Você acabou de se deparar com Ácido sulfúrico!</h1>
        <Link href="/" style={styles.button}>
          <h2>melhor voltar...</h2>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
