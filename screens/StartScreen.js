import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import defaultNumber from "../Constants/defaultNumber";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { Touchable } from "../components/Touchable";

const StartScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: defaultNumber * 7.5,
            fontFamily: "Poppins_500Medium",
          }}
        >
          Bir səbət xoşbəxtlik
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Touchable
          useForeground={true}
          onPress={() => navigation.navigate("VillageNavigator")}
        >
          <View style={styles.iconContainer}>
            <AntDesign
              name="arrowright"
              size={defaultNumber * 10}
              color="white"
            />
          </View>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logoContainer: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: defaultNumber * 12.5,

    overflow: "hidden",
    backgroundColor: "#65B804",
    padding: defaultNumber * 6,
  },
  logo: {
    width: defaultNumber * 50,
    height: defaultNumber * 50,
  },
});

export default StartScreen;
