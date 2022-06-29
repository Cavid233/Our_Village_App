import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";

import DefaultInput from "../../components/DefaultInput";

import SubmitButton from "../../components/SubmitButton";

import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

const ResetPasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword_1, setNewPassword_1] = useState("");

  const [newPassword_2, setNewPassword_2] = useState("");


  const navigation = useNavigation();

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
      duration: 1500,
      onPress: () => action(),
    });
  };

  const updatePasswordHandler = async () => {
    if (newPassword_1 === newPassword_2) {
      if (newPassword_1.trim().length > 8) {
        try {
          navigation.navigate("Home");
          flashMessageHandler(
            "Mesaj",
            "Şifrəniz Uğurla Dəyişdirildi",
            "success"
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        flashMessageHandler(
          "Mesaj:",
          "Passwordunuzun uzunlugu 8-den yuxari olmalidir",
          "danger"
        );
      }
    } else {
      flashMessageHandler("Mesaj:", "Yeni passwordlar eyni deyil", "danger");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 10% */}
      <HeaderTitleContainer headerTitle={"Şifrəni yenilə"} isIcon />
      <View style={{ height: "75%", width: "90%" }}>
        <DefaultInput
          title={"Mövcud  şifrəni daxil edin:"}
          isSecureText
          onChangeTextHanlder={(txt) => setCurrentPassword(() => txt)}
        />
        <DefaultInput
          title={"Yeni şifrə yarat:"}
          isSecureText
          onChangeTextHanlder={(txt) => setNewPassword_1(() => txt)}
        />
        <DefaultInput
          title={"Yeni şifrə yarat:"}
          isSecureText
          onChangeTextHanlder={(txt) => setNewPassword_2(() => txt)}
        />
      </View>

      {/* 10% */}
      <SubmitButton title={"Yadda saxlayın"} action={updatePasswordHandler} />
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
});

export default ResetPasswordScreen;
