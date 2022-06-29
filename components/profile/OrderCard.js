import { View, StyleSheet } from "react-native";

import React from "react";

import SubOrderCard from "./SubOrderCard";

const OrderCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstPartView}>
        <SubOrderCard title={"Sifariş No"} text={props.orderId} />
        <SubOrderCard title={"Tarix"} text={props.date} />
      </View>
      <View style={styles.secondPartView}>
        <SubOrderCard title={"Məhsul sayı"} text={props.count} />
        <SubOrderCard title={"Qiymət"} text={props.total + " ₼"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: "93%",
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D4D4D4",
    borderRadius: 20,
    borderWidth: 0.8,
  },
  firstPartView: {
    width: "50%",
    height: "70%",
    borderRightWidth: 0.5,
    borderColor: "#D3D3D3",
    alignItems: "center",
  },
  secondPartView: {
    width: "50%",
    height: "70%",
    alignItems: "center",
  },
});

export default OrderCard;
