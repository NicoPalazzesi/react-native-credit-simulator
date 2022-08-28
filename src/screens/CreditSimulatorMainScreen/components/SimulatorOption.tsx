import React from "react";
import { View, StyleSheet } from "react-native";
import NumberInput from "../../../components/NumberInput";
import Text from "../../../components/Text";
import Formats from "../../../utils/Formats";

interface SimulatorOptionProps {
  name: string;
  value: number;
  onValueChange: (value: number) => void;
  minValue: number;
  maxValue: number;
  currency: boolean;
}

const SimulatorOption = ({
  name,
  value,
  onValueChange,
  minValue,
  maxValue,
  currency = false,
}: SimulatorOptionProps) => {
  const validateRange = () => {
    if (value > maxValue) {
      onValueChange(maxValue);
      return;
    }
    if(value < minValue) {
      onValueChange(minValue);
      return;
    }
  };

  return (
    <View>
      <View style={styles.textInputContainer}>
        <Text text={name} />
        <NumberInput
          value={currency ? Formats.currency(value) : value.toString()}
          onValueChange={(value) => onValueChange(Formats.toInteger(value))}
          numberOfDigits={maxValue.toString().length + (currency ? 1 : 0)}
          onBlur={validateRange}
          currency={"$"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SimulatorOption;
