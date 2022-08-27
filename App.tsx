import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Text from './src/components/Text';
import Colors from './src/constants/Colors';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text text={"Thin"} fontFamily={"thin"} />
    <Text text={"Extra light"} fontFamily={"extraLight"} />
    <Text text={"Light"} fontFamily={"light"} />
    <Text text={"Regular"} />
    <Text text={"Medium"} fontFamily={"medium"} />
    <Text text={"Semi bold"} fontFamily={"semiBold"} />
    <Text text={"Bold"} fontFamily={"bold"} />
    <Text text={"Extra bold"} fontFamily={"extraBold"}  />
    <Text text={"Black"} fontFamily={"black"} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.backgroundBlue,
  },
});

export default App;
