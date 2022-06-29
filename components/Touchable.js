import React from "react";

import { Platform } from "react-native";

import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

export const Touchable = (props) => {
  return Platform.OS === "android" && Platform.Version >= 21 ? (
    <TouchableNativeFeedback useForeground={true} onPress={props.onPress}>
      {props.children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity style={{flex: 1}} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
