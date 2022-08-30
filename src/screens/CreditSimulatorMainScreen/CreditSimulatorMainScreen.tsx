import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ContainerParent from '../../components/ContainerParent';
import Text, { FontFamily } from '../../components/Text';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import SimulatorOption from './components/SimulatorOption';

const CreditSimulatorMainScreen = () => {
  const [amount, setAmount] = useState(5000);
  const [dues, setDues] = useState(3);
  
  return (
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
          minValue={5000}
          maxValue={50000}
          currency={true}
        />
        <SimulatorOption
          name={"PLAZO"}
          value={dues}
          onValueChange={(value) => {setDues(value)}}
          minValue={3}
          maxValue={24}
          step={3}
        />
      </View>
    </ContainerParent>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 32
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
  }
});

export default CreditSimulatorMainScreen;
