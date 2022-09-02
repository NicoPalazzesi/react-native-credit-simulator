import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import Colors from "../constants/Colors";

interface BottomModalProps {
  visible: boolean;
  onClose: () => void
  children: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
}

const BottomModal = ({
  visible,
  onClose,
  children,
  style,
}: BottomModalProps) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      style={styles.container}
    >
      <View style={[styles.contentContainer, style]}>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  contentContainer: {
    width: "100%",
    minHeight: "20%",
    maxHeight: "40%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 16,
  }
})

export default BottomModal;
