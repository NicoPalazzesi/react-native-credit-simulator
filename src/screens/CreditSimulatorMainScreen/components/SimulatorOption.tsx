import React from "react";
import { View, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import NumberInput from "../../../components/NumberInput";
import Text from "../../../components/Text";
import Colors from "../../../constants/Colors";
import Formats from "../../../utils/Formats";

interface SimulatorOptionProps {
  name: string;
  value: number;
  onValueChange: (value: number) => void;
  minValue: number;
  maxValue: number;
  currency?: boolean;
  step?: number;
}

const SimulatorOption = ({
  name,
  value,
  onValueChange,
  minValue,
  maxValue,
  currency = false,
  step = 1,
}: SimulatorOptionProps) => {
  const dynamicStyles = StyleSheet.create({
    extremeValuesContainer: {  marginHorizontal: currency ? 0 : 16 },
  });

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

  const onSlide = (value: number | number[]) => {
    onValueChange(typeof value === "number" ? value : value[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text text={name} />
        <NumberInput
          value={currency ? Formats.currency(value) : value.toString()}
          onValueChange={(value) => onValueChange(Formats.toInteger(value))}
          numberOfDigits={maxValue.toString().length + (currency ? 1 : 0)}
          onBlur={validateRange}
          currency={currency}
        />
      </View>
      <Slider
        value={value < minValue ? minValue : value > maxValue ? maxValue : value}
        onValueChange={onSlide}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        thumbTintColor={Colors.white}
        minimumTrackTintColor={Colors.white}
        maximumTrackTintColor={Colors.white}
        containerStyle={styles.sliderContainer}
      />
      <View
        style={[
          styles.extremeValuesContainer, dynamicStyles.extremeValuesContainer
        ]}
      >
        <Text
          text={
            currency ? Formats.currency(minValue, "ARS") : minValue.toString()
          }
        />
        <Text
          text={
            currency ? Formats.currency(maxValue, "ARS") : maxValue.toString()
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sliderContainer: { marginHorizontal: 16 },
  extremeValuesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SimulatorOption;
