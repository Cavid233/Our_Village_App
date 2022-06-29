import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

import defaultNumber from "../../Constants/defaultNumber";
import { FontAwesome } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

const BigCardContainer = (props) => {
  return (
    <View style={styles.container}>
      <Touchable onPress={() => props.action()}>
        <View style={styles.subContainer}>
          <View style={styles.iconUserCircleView}>
            <FontAwesome
              name="user-circle"
              size={defaultNumber * 11.25}
              color="#65B804"
            />
          </View>
          <View style={styles.userInformationView}>
            <View style={{ height: "50%", justifyContent: "space-between" }}>
              <Text style={{ fontSize: defaultNumber * 5 }}>
                {props.userName}
              </Text>
              <Text style={{ fontSize: defaultNumber * 3.5 }}>
                Müştəri kodu: {props.userId}
              </Text>
            </View>
          </View>
          <View style={styles.iconRightView}>
            <AntDesign
              name="right"
              size={defaultNumber * 7.5}
              color="#FF9900"
            />
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "14%",
    borderRadius: (defaultNumber * 15) / 4,
    overflow: "hidden",
    borderColor: "#D4D4D4",
    borderWidth: 0.8,
    backgroundColor: "white",
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconUserCircleView: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  userInformationView: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  iconRightView: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BigCardContainer;
