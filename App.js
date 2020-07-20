import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.title}>Administrador de citas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default App;
