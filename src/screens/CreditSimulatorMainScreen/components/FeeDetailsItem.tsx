import React from "react";
import { View, StyleSheet } from "react-native";
import Text, { FontFamily } from "../../../components/Text";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import Formats from "../../../utils/Formats";

export interface FeeDetails {
  amount: number;
  date: string;
  fee: number;
}

const FeeDetailsItem = ({ amount, date, fee }: FeeDetails) => (
  <View style={styles.container}>
    <View>
      <Text text={`CUOTA ${fee.toString()}`} style={styles.fee} />
      <Text text={date} style={styles.date} />
    </View>
    <Text
      text={Formats.currency(amount, "ARS", 2)}
      style={styles.amount}
      fontFamily={FontFamily.Bold}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.darkBackgroundBlue,
    paddingBottom: 8,
    marginBottom: 8,
  },
  fee: {
    color: Colors.black,
  },
  date: {
    color: Colors.gray,
    fontSize: FontSize.note,
  },
  amount: {
    color: Colors.darkBackgroundBlue,
    fontSize: FontSize.title,
  },
});

export default FeeDetailsItem;
