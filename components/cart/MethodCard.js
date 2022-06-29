import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";

import { Touchable } from "../Touchable";


const MethodCard = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: props.isSelected ? "#65B804" : "#8C8C8C",
      }}
    >
      <Touchable
        onPress={() => props.deliveryMethodHandler(props.id)}
      >
        <View style={styles.subContainer}>
          <View style={styles.titleContainer}>
            <Text style={{ fontFamily: "Poppins_400Regular" }}>
              {props.title}
            </Text>
            {props.isSelected && <View style={styles.button}></View>}
          </View>

          <Text style={{ color: "#7F7F7F" }}>{props.text}</Text>
        </View>
      </Touchable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "49%",
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
  },
  subContainer: {
    height: "100%",
    width: "100%",
    padding: 10,
    justifyContent: "space-around",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 12,
    width: 12,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#65B804",
  },
});

export default MethodCard;
