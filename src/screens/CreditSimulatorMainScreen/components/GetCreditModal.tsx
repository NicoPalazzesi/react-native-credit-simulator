import React from "react";
import { StyleSheet } from "react-native";
import Button from "../../../components/Button";
import BottomModal from "../../../components/BottomModal";
import Text, { FontFamily } from "../../../components/Text";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";

interface GetCreditModalProps {
  visible: boolean;
  onClose: () => void;
}

const GetCreditModal = ({
  visible,
  onClose,
}: GetCreditModalProps) => (
  <BottomModal visible={visible} onClose={onClose}>
    <Text text={"PARA OBTENER TU CRÉDITO LLAMA AL"} style={styles.title} />
    <Text text={"0800-030-3456"} style={styles.phoneNumber} fontFamily={FontFamily.Bold} />
    <Button label={"VOLVER ATRÁS"} onPress={onClose} />
  </BottomModal>
);

const styles = StyleSheet.create({
  title: {
    color: Colors.black,
    textAlign: "center",
  },
  phoneNumber: {
    color: Colors.darkBackgroundBlue,
    textAlign: "center",
    fontSize: FontSize.title,
    marginVertical: 16,
  }
})

export default GetCreditModal;