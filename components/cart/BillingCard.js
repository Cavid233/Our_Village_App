import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

const BillingCard = (props) => {
  return (
    <Touchable onPress={props.action}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>
          {props.productAmount + " x " + props.productName}
        </Text>
        <Text style={{ fontSize: 18 }}>
          {(
            parseFloat(props.product_price_after_discount) *
            props.productQuantity
          ).toFixed(2) + " ₼"}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DEDEDE",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default BillingCard;
