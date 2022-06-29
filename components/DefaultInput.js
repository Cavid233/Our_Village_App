import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";
import React from "react";

import defaultNumber from "../Constants/defaultNumber";

const windowHeight = Dimensions.get("window").height;

const DefaultInput = (props) => {
  return (
    <View
      style={{
        width: "100%",
        height: !props.title
          ? (windowHeight * 9) / 100
          : (windowHeight * 14) / 100,
        justifyContent: !props.title ? "center" : "flex-start",
        marginVertical: !props.title ? 5 : 0,
      }}
    >
      {props.title && (
        <View style={styles.titleContainer}>
          <Text style={{ color: "#777D86", fontFamily: "Poppins_400Regular" }}>
            {props.title}
          </Text>
        </View>
      )}

      <View
        style={{
          ...styles.textInputContainer,
          height: !props.title ? "90%" : "55%",
        }}
      >
        <TextInput
          value={props.inputValue}
          placeholder={props.inputPlaceHolder}
          style={{ width: "90%", height: "100%" }}
          maxLength={props.inputMaxLength}
          onChangeText={(txt) => props.onChangeTextHanlder(txt)}
          secureTextEntry={props.isSecureText}
          autoCapitalize={"none"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: "45%",
    justifyContent: "center",
  },
  textInputContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: defaultNumber * 5,
    alignItems: "center",
    borderColor: "#DEDEDE",
    borderWidth: 1,
  },
});

export default DefaultInput;
