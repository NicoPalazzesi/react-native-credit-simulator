import React, { RefObject, useRef } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Text, { FontFamily } from "./Text";

interface NumberInputProps {
  value: string;
  onValueChange: (value: string) => void;
  numberOfDigits: number;
  currency?: boolean;
  onBlur: () => void;
}

const NumberInput = ({
  value,
  onValueChange,
  numberOfDigits,
  currency = false,
  onBlur,
}: NumberInputProps) => {
  const numberInputRef = useRef() as RefObject<TextInput>;

  const focus = () => {
    numberInputRef.current?.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={focus}>
      <View style={styles.container}>
        <Text text={currency ? "$" : ""} fontFamily={FontFamily.Bold} />
        <TextInput
          ref={numberInputRef}
          style={styles.value}
          value={value}
          onChangeText={(value) => {onValueChange(value)}}
          keyboardType={"numeric"}
          maxLength={numberOfDigits}
          onBlur={onBlur}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
    height: 44,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  value: {
    color:  Colors.white,
    textAlign: "center",
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.Bold,
  }
})

export default NumberInput;
