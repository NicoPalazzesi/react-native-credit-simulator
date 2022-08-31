import React from "react";
import { View, StyleSheet } from "react-native";
import Text, { FontFamily } from "../../../components/Text";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import Formats from "../../../utils/Formats";

interface AmountPerMonthProps {
  amount: number;
  fees: number;
}

const AmountPerMonth = ({ amount, fees }: AmountPerMonthProps) => {

  const calculateAmountPerMonth = () => Formats.currency(amount / fees, "ARS", 2);

  return (
    <View style={styles.container}>
      <Text text={"CUOTA FIJA POR MES"} fontFamily={FontFamily.Bold}  />
      <Text
        text={calculateAmountPerMonth()}
        fontFamily={FontFamily.Bold}
        style={styles.amount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginTop: 16,
    backgroundColor: Colors.darkBackgroundBlue,
  },
  amount: {
    fontSize: FontSize.huge,
  },
});

export default AmountPerMonth;
