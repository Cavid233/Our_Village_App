import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";

const SubOrderCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
      </View>
      <View>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "50%",
    width: "80%",
  },
});

export default SubOrderCard;
