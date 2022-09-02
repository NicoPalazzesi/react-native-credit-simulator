import React from "react";
import { Text as RNText, StyleSheet, TextStyle, StyleProp } from "react-native";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";

export enum FontFamily {
  Thin = "Montserrat-Thin",
  ExtraLight = "Montserrat-ExtraLight",
  Light = "Montserrat-Light",
  Regular = "Montserrat-Regular",
  Medium = "Montserrat-Medium",
  SemiBold = "Montserrat-SemiBold",
  Bold = "Montserrat-Bold",
  ExtraBold = "Montserrat-ExtraBold",
  Black = "Montserrat-Black",
}

interface TextProps {
  text: string | undefined;
  style?: StyleProp<TextStyle>;
  fontFamily?: FontFamily;
}

const Text = ({
  text,
  style,
  fontFamily =FontFamily.Regular,
}: TextProps) => {
  const dynamicStyles = StyleSheet.create({
    text: {
      fontFamily,
      fontSize: FontSize.paragraph,
      color: Colors.white,
    },
  });

  return <RNText style={[dynamicStyles.text, style]}>{text}</RNText>
};

export default Text;
