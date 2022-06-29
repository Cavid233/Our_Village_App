import React, { useState } from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  SafeAreaView,
} from "react-native";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

const windowHeight = Dimensions.get("window").height;

import defaultNumber from "../../Constants/defaultNumber";

import PhoneInput from "../../components/auth/PhoneInput";

import DefaultInput from "../../components/DefaultInput";

import SubmitButton from "../../components/SubmitButton";

const RegisterScreen = () => {
  const [userFullName, setUserFullName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPassword_2, setUserPassword_2] = useState();

  const [phone, setPhone] = React.useState("");

  const navigation = useNavigation();

  const userFullNameHandler = (data) => {
    setUserFullName(() => data);
  };
  const userPhoneHandler = (data) => {
    setUserPhone(() => data);
  };
  const userPasswordHandler = (data) => {
    setUserPassword(() => data);
  };

  const userPasswordHandler_2 = (data) => {
    setUserPassword_2(() => data);
  };

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

  const SubmitHandler = async (
    userFullName,
    userPhone,
    userPassword,
    userPassword_2
  ) => {
    if (userPassword !== userPassword_2 || !userPhone || !userFullName) {
      flashMessageHandler("Mesaj:", "Xəta Baş Verdi.", "danger");
      return;
    }

    navigation.navigate("SmsScreen", {
      phone: "994" + userPhone,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitleContainer headerTitle={"Qeydiyyat"} isIcon />

      <View style={{ width: "93%", height: "75%" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={(defaultNumber * 70) / 4}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputsContainer}>
              <View>
                <DefaultInput
                  onChangeTextHanlder={(txt) => userFullNameHandler(txt)}
                  inputPlaceHolder={"Ad / Soyad"}
                />

                <PhoneInput
                  userPhone={userPhone}
                  userPhoneHandler={userPhoneHandler}
                />

                <DefaultInput
                  isSecureText
                  onChangeTextHanlder={(txt) => userPasswordHandler(txt)}
                  inputPlaceHolder={"Şifrə"}
                />
                <DefaultInput
                  isSecureText
                  onChangeTextHanlder={(txt) => userPasswordHandler_2(txt)}
                  inputPlaceHolder={"Şifrəni yenidən daxil edin"}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
      <SubmitButton
        title={"Akkaunt yarat"}
        action={() =>
          SubmitHandler(userFullName, userPhone, userPassword, userPassword_2)
        }
      />
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

  inputsContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
});

export default RegisterScreen;
