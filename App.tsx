import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleCountIncrease = () => setCount(prevCount => prevCount + 1);

  const handleCountDecrease = () => setCount(prevCount => prevCount - 1);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar />
      <Header />

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleCountDecrease} style={styles.button}>
            <Text style={styles.buttonText}>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCountIncrease} style={styles.button}>
            <Text style={styles.buttonText}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 30,
    margin: 30,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#123456',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  countText: {
    color: '#123456',
  },
});

export default App;
