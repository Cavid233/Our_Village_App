import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

const InformationCard = (props) => {
  return (
    <Touchable onPress={() => props.action()}>
      <View style={styles.container}>
        <View style={styles.iconView}>{props.icon}</View>
        <View style={styles.textView}>
          <Text style={{ fontSize: 16.5, fontFamily: "Poppins_400Regular" }}>
            {props.title}
          </Text>

          <Text style={{ fontSize: 14, color: "#7F7F7F" }}>{props.text}</Text>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DEDEDE",
    flexDirection: "row",
  },
  iconView: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },
  textView: {
    width: "75%",
    height: "100%",
    justifyContent: "center",
  },
});

export default InformationCard;
