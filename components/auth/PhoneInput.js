import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";

import MaskInput from "react-native-mask-input";

const windowHeight = Dimensions.get("window").height;
import defaultNumber from "../../Constants/defaultNumber";

const PhoneInput = (props) => {
  return (
    <View style={styles.container}>
      <MaskInput
        value={props.userPhone}
        keyboardType="phone-pad"
        onChangeText={(masked, unmasked) => {
          props.userPhoneHandler(unmasked);
        }}
        style={styles.input}
        mask={[
          "+",
          "9",
          "9",
          "4",
          " ",
          "(",
          /\d/,
          /\d/,
          ")",
          "-",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (windowHeight * 8) / 100,
    backgroundColor: "pink",
    marginVertical: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: defaultNumber * 5,

    alignItems: "center",
    borderColor: "#DEDEDE",
    borderWidth: 1,
  },
  input: { width: "90%", height: "100%" },
});

export default PhoneInput;
