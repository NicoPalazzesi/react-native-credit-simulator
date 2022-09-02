import React from "react";
import { TouchableOpacity, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Text, { FontFamily } from "./Text";

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
  labelColor?: string;
  labelSize?: number;
}

const Button = ({
  label,
  onPress,
  style,
  color = Colors.green,
  labelColor = Colors.white,
  labelSize = FontSize.paragraph,
}: ButtonProps) => {
  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: color,
    },
    label: {
      color: labelColor,
      fontSize: labelSize,
    }
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, dynamicStyles.container, style]}
    >
      <Text
        text={label}
        fontFamily={FontFamily.Bold}
        style={[styles.label, dynamicStyles.label]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    minWidth: 120,
    minHeight: 45,
    justifyContent: "center",
  },
  label: { textAlign: "center" },
});

export default Button;
