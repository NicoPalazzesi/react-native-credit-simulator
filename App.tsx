import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './src/components/Text';
import Colors from './src/constants/Colors';

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={Colors.lightBackgroundBlue}
      barStyle={'light-content'}
    />
    <LinearGradient
      colors={[Colors.lightBackgroundBlue, Colors.backgroundBlue]}
      style={styles.contentContainer}
    >
      <Text text={"Thin"} fontFamily={"thin"} />
      <Text text={"Extra light"} fontFamily={"extraLight"} />
      <Text text={"Light"} fontFamily={"light"} />
      <Text text={"Regular"} />
      <Text text={"Medium"} fontFamily={"medium"} />
      <Text text={"Semi bold"} fontFamily={"semiBold"} />
      <Text text={"Bold"} fontFamily={"bold"} />
      <Text text={"Extra bold"} fontFamily={"extraBold"}  />
      <Text text={"Black"} fontFamily={"black"} />
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default App;
