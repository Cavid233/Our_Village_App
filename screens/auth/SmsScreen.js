import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from "react-native";
import HeaderTitleContainer from "../../components/HeaderTitleContainer";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import SubmitButton from "../../components/SubmitButton";

import { useNavigation } from "@react-navigation/native";

import defaultNumber from "../../Constants/defaultNumber";

import { showMessage } from "react-native-flash-message";

const CELL_COUNT = 6;

const SmsScreen = (props) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props_2, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation();

  const userPhone = props.route.params ? props.route.params.phone : null;
  const limitExceeded = props.route.params
    ? props.route.params.limitExceeded
    : null;

  const userPhoneFormatted =
    "+" +
    userPhone.substring(0, 3) +
    " " +
    userPhone.substring(3, 5) +
    " " +
    userPhone.substring(5, 8) +
    " " +
    userPhone.substring(8, 10) +
    " " +
    userPhone.substring(10, 12) +
    "";

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

  if (limitExceeded) {
    return (
      <View style={styles.container}>
        <HeaderTitleContainer headerTitle={"SMS Doğrula"} isIcon />
        <View style={styles.alertBoxContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>
              Bu gunluk sms sayini kecmisiniz 24 saat sonra təkrar yoxlayın
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 10% */}
      <HeaderTitleContainer headerTitle={"SMS Doğrula"} isIcon />
      <View style={{ height: "17%", width: "66%", justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: defaultNumber * 4.5 }}>
          Təsdiqləmə kodunu daxil edin. {userPhoneFormatted} nömrəyə təsdiq kodu
          göndərdik.
        </Text>
      </View>

      <CodeField
        ref={ref}
        {...props_2}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={{ fontSize: 24 }}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <SubmitButton
        title={"Göndər"}
        action={async () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
          flashMessageHandler("Mesaj:", "Nömrəniz Təsdiq Olundu.", "success");
        }}
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
  codeFieldRoot: { height: "60%" },
  cell: {
    borderWidth: 2,
    borderColor: "#00000030",
    width: defaultNumber * 15,
    height: defaultNumber * 15,
    borderRadius: defaultNumber * 12.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "lightblue",
  },
  alertBoxContainer: {
    height: "80%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: "90%",
    height: "40%",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: defaultNumber * 2.5,
    elevation: 10,
  },
  alertText: {
    fontSize: defaultNumber * 4.5,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
});

export default SmsScreen;
