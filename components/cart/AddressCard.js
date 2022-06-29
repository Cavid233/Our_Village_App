import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Touchable } from "../Touchable";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AddressCard = (props) => {
  const navigation = useNavigation();

  const selectedAddressHandler = async () => {
    navigation.goBack();
  };

  return (
    <Touchable onPress={() => selectedAddressHandler()}>
      <View style={styles.container}>
        <View style={styles.leftIconView}>
          <Ionicons name="location-outline" size={28} color="black" />
        </View>
        <View style={styles.textView}>
          <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
            {props.item.street}
          </Text>
          <Text>{props.item.city + " , " + props.item.country}</Text>
        </View>
        <View style={styles.rightIconView}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DEDEDE",
    paddingVertical: 10,
  },
  leftIconView: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  textView: { width: "70%", justifyContent: "center" },
  rightIconView: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddressCard;
