import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Button from "../../../components/Button";
import BottomModal from "../../../components/BottomModal";
import Formats from "../../../utils/Formats";
import FeeDetailsItem, { FeeDetails } from "./FeeDetailsItem";

interface FeesDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  amount: number;
  fees: number;
}

const FeesDetailsModal = ({
  visible,
  onClose,
  amount,
  fees
}: FeesDetailsModalProps) => {
  const [feesDetails, setFeesDetails] = useState<FeeDetails[]>([]);

  const createFeesDetails = () => {
    const today = new Date();
    const fd = Array(fees).fill(0).map(
      (_, index) => {
        const date = new Date(today.setMonth(today.getMonth() + 1));
        return ({
          amount: amount / fees,
          date: Formats.dateFormat(date),
          fee: index+1,
        });
      }
    );
    setFeesDetails(fd);
  }

  const renderItem = ({item}: {item: FeeDetails}) => (
    <FeeDetailsItem amount={item.amount} date={item.date} fee={item.fee} />
  );

  useEffect(
    () => {
      if (visible) {
        createFeesDetails();
      };
    },
    [visible]
  );

  return (
    <BottomModal visible={visible} onClose={onClose}>
      <FlatList
        data={feesDetails}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Button label={"VOLVER ATRÁS"} onPress={onClose} />
    </BottomModal>
  )
};

export default FeesDetailsModal;
