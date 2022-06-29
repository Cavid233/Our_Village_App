import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native";

import { Touchable } from "../../components/Touchable";

const windowHeight = Dimensions.get("window").height;
import defaultNumber from "../../Constants/defaultNumber";

import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import HeaderTitleContainer from "../../components/HeaderTitleContainer";

import PhoneInput from "../../components/auth/PhoneInput";

import SubmitButton from "../../components/SubmitButton";

import DefaultInput from "../../components/DefaultInput";

const LoginScreen = () => {
  const [userPhone, setUserPhone] = useState();
  const [userPassword, setUserPassword] = useState();
  const navigation = useNavigation();

  const userPhoneHandler = (data) => {
    setUserPhone(() => data);
  };
  const userPasswordHandler = (data) => {
    setUserPassword(() => data);
  };

  const flashMessageHandler = (pMessage, pDescription, pType) => {
    showMessage({
      message: pMessage,
      description: pDescription,
      type: pType,
      icon: pType,
      duration: 5000,
    });
  };

  const submitHandler = async () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Home",
        },
      ],
    });
    flashMessageHandler("Mesaj:", "Daxil Oldunuz.", "success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitleContainer headerTitle={"Daxil Ol"} isIcon />

      <View style={{ height: 40, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>
          Mobil nömrənizi və şifrənizi daxil edin
        </Text>
      </View>

      <PhoneInput userPhone={userPhone} userPhoneHandler={userPhoneHandler} />

      <DefaultInput
        isSecureText
        inputPlaceHolder={"Şifrə"}
        onChangeTextHanlder={(txt) => userPasswordHandler(txt)}
      />

      <View
        style={{
          height: 60,
          paddingVertical: 10,
          justifyContent: "space-around",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          <Text style={{ color: "gray" }}>Hesabınız yoxdur?</Text>
          <Touchable onPress={() => navigation.navigate("RegisterScreen")}>
            <Text> Qeydiyyatdan keçin</Text>
          </Touchable>
        </Text>
      </View>
      <SubmitButton title={"Daxil Olma"} action={submitHandler} />
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
  inputContainer: {
    height: (windowHeight * 9) / 100,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: (defaultNumber * 30) / 4,
    alignItems: "center",
    marginTop: 20,
  },
});

export default LoginScreen;
