import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";

import DefaultInput from "../../components/DefaultInput";
import PhoneInput from "../../components/auth/PhoneInput";

import SubmitButton from "../../components/SubmitButton";

import { useNavigation } from "@react-navigation/native";

import { showMessage } from "react-native-flash-message";

const AddAdressScreen = (props) => {
  const [fullName, setFullName] = useState();

  const [notes, setNotes] = useState();

  const [userPhone, setUserPhone] = useState();

  const selectedLocation = props.route.params
    ? props.route.params.selectedLocation
    : null;

  const street = props.route.params ? props.route.params.street : null;
  const city = props.route.params ? props.route.params.city : null;

  const navigation = useNavigation();

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
    flashMessageHandler("Mesaj:", "Yeni Adres Yaradıldı.", "success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "88%", width: "100%" }}>
        <HeaderTitleContainer headerTitle={"Yeni Ünvan Yarat"} isIcon />
        <DefaultInput
          title={"Ad, Soyad, Telefon"}
          onChangeTextHanlder={(txt) => setFullName(txt)}
        />
        <PhoneInput
          userPhone={userPhone}
          userPhoneHandler={(txt) => setUserPhone(txt)}
        />
        <DefaultInput
          title={"Qeyd"}
          onChangeTextHanlder={(txt) => setNotes(txt)}
        />
      </View>

      <SubmitButton title={"Ünavnı Yadda Saxla"} action={submitHandler} />
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

export default AddAdressScreen;
