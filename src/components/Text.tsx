import React from "react";
import { Text as RNText, StyleSheet, TextStyle, StyleProp } from "react-native";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";

interface TextProps {
  text: string | undefined;
  style?: StyleProp<TextStyle>;
  fontFamily?:
    "thin"
    | "extraLight"
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black";
}

const getFontFamily = (fontFamily: string) => {
  switch (fontFamily) {
    case "thin": return "Montserrat-Thin";
    case "extraLight": return "Montserrat-ExtraLight";
    case "light": return "Montserrat-Light";
    case "medium": return "Montserrat-Medium";
    case "semiBold": return "Montserrat-SemiBold";
    case "bold": return "Montserrat-Bold";
    case "extraBold": return "Montserrat-ExtraBold";
    case "black": return "Montserrat-Black";
    default: return "Montserrat-Regular";
  }
};

const Text = ({
  text,
  style,
  fontFamily = "regular",
}: TextProps) => {
  const dynamicStyles = StyleSheet.create({
    text: {
      fontFamily: getFontFamily(fontFamily),
      fontSize: FontSize.paragraph,
      color: Colors.white,
    },
  });

  return <RNText style={[dynamicStyles.text, style]}>{text}</RNText>
};

export default Text;
