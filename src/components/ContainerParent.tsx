import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';

interface ContainerParentProps {
  children: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
}

const ContainerParent = ({
  children,
  style
}: ContainerParentProps) => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={Colors.lightBackgroundBlue}
      barStyle={'light-content'}
    />
    <LinearGradient
      colors={[Colors.lightBackgroundBlue, Colors.backgroundBlue]}
      style={[styles.contentContainer, style]}
    >
      {children}
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ContainerParent;
