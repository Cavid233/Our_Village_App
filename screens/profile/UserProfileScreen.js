import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import DefaultInput from "../../components/DefaultInput";

import { FontAwesome } from "@expo/vector-icons";

import defaultNumber from "../../Constants/defaultNumber";

import SubmitButton from "../../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

import { showMessage } from "react-native-flash-message";

import { Touchable } from "../../components/Touchable";

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iconContainer}>
      <Touchable onPress={() => navigation.goBack()}>
        <View style={styles.subIconContainer}>
          <MaterialIcons
            name="keyboard-arrow-left"
            // size={24}
            size={(defaultNumber * 24) / 4}
            color="black"
          />
        </View>
      </Touchable>
    </View>
  );
};

const UserProfileScreen = (props) => {
  const userInfo = props.route.params ? props.route.params.userInfo : null;

  const [fullName, setFullName] = useState(userInfo && userInfo.name);

  const [password, setPassword] = useState();

  const submitHandler = async () => {
    const flashMessageHandler = (
      pMessage,
      pDescription,
      pType,
      action = () => {}
    ) => {
      showMessage({
        message: pMessage,
        description: pDescription,
        type: pType,
        icon: pType,
        duration: 2000,
        onPress: () => action(),
      });
    };

    flashMessageHandler("Mesaj:", "Məlumatlar Dəyişdirildi", "success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.goBackIconContainer}>
          <GoBackButton />
        </View>
        <View style={styles.profileIconContainer}>
          <FontAwesome
            name="user-circle"
            size={defaultNumber * 11.25}
            color="#65B804"
          />
        </View>
        <View style={{ width: "20%", height: "100%" }}></View>
      </View>
      <View style={styles.inputContainer}>
        <DefaultInput
          title={"Ad / Soyad"}
          inputValue={fullName}
          onChangeTextHanlder={(txt) => setFullName(txt)}
          inputMaxLength={25}
        />
        <DefaultInput
          title={"Mobil nömrə"}
          inputValue={"+994 51 555 44 33"}
          onChangeTextHanlder={() => {}}
          isEditable={false}
        />
        <DefaultInput
          title={"Mövcud şirəni daxil edin"}
          inputValue={password}
          isSecureText
          onChangeTextHanlder={(txt) => setPassword(txt)}
        />
      </View>

      {/* 10% */}
      <SubmitButton title={"Yadda saxlayın"} action={submitHandler} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
  },
  headerContainer: {
    height: "10%",
    width: "100%",

    flexDirection: "row",
  },
  goBackIconContainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  profileIconContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconUserCircleView: {
    height: "10%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputContainer: { height: "75%", width: "100%" },

  iconContainer: {
    height: (defaultNumber * 40) / 4,
    width: (defaultNumber * 40) / 4,
    borderRadius: (defaultNumber * 25) / 4,
    overflow: "hidden",
    backgroundColor: "white",
  },
  subIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserProfileScreen;
