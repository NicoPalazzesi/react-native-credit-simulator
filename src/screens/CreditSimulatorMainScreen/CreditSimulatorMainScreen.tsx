import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ContainerParent from '../../components/ContainerParent';
import Text, { FontFamily } from '../../components/Text';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import AmountPerMonth from './components/AmountPerMonth';
import SimulatorOption from './components/SimulatorOption';
import FeesDetailsModal from './components/FeesDetailsModal';
import GetCreditModal from './components/GetCreditModal';

const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 50000;
const MIN_FEES = 3;
const MAX_FEES = 24;

const CreditSimulatorMainScreen = () => {
  const [amount, setAmount] = useState(MIN_AMOUNT);
  const [fees, setFees] = useState(MIN_FEES);
  const [showGetCredit, setShowGetCredit] = useState(false);
  const [showFeesDetails, setShowFeesDetails] = useState(false);
  
  return (
    <>
      <ContainerParent style={styles.container}>
        <View style={styles.contentContainer} >
          <Text
            text={"Simulá tu crédito"}
            style={styles.title}
            fontFamily={FontFamily.Bold}
          />
          <SimulatorOption
            name={"MONTO TOTAL"}
            value={amount}
            onValueChange={(value) => {setAmount(value)}}
            minValue={MIN_AMOUNT}
            maxValue={MAX_AMOUNT}
            currency={true}
          />
          <SimulatorOption
            name={"PLAZO"}
            value={fees}
            onValueChange={(value) => {setFees(value)}}
            minValue={MIN_FEES}
            maxValue={MAX_FEES}
            step={3}
          />
          <AmountPerMonth amount={amount} fees={fees} />
          <View style={styles.buttonContainer}>
            <Button
              label={"OBTENÉ CRÉDITO"}
              onPress={() => setShowGetCredit(true)}
              style={styles.mainButton}
              labelSize={FontSize.subtitle}
            />
            <Button
              label={"VER DETALLE DE\nCUOTAS"}
              onPress={() => setShowFeesDetails(true)}
              color={Colors.lightBlue}
              labelSize={FontSize.note}
            />
          </View>
        </View>
      </ContainerParent>

      <GetCreditModal
        visible={showGetCredit}
        onClose={() => setShowGetCredit(false)}
      />
      <FeesDetailsModal
        visible={showFeesDetails}
        onClose={() => setShowFeesDetails(false)}
        amount={amount}
        fees={fees}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32, 
    backgroundColor: Colors.backgroundBlue,
    width: "100%",
  },
  title: {
    fontSize: FontSize.title,
    marginBottom: 16,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row"
  },
  mainButton: {
    flex: 1,
    marginRight: 8,
  }
});

export default CreditSimulatorMainScreen;
