import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";

import MethodCard from "./MethodCard";

const PayingContainer = (props) => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
          Ödəniş metodu
        </Text>
      </View>
      <View style={styles.methodCard}>
        <MethodCard
          id={"cash"}
          title={"Nağd ödəniş"}
          text={"Alınan məhsulları nağd ödə"}
          isSelected={props.isPaymentCash}
          deliveryMethodHandler={props.paymentMethodHandler}
        />
        <MethodCard
          id={"card"}
          title={"Kartla ödəniş"}
          text={"Alınan məhsulları kartla ödə"}
          isSelected={!props.isPaymentCash}
          deliveryMethodHandler={props.paymentMethodHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: { height: 50, marginTop: 10, justifyContent: "center" },
  methodCard: {
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PayingContainer;
