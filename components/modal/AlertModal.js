import React from "react";

import Modal from "react-native-modal";

import { StyleSheet, View, Text, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import defaultNumber from "../../Constants/defaultNumber";

import { useNavigation } from "@react-navigation/native";

import { showMessage } from "react-native-flash-message";

import CancelButton from "./CancelButton";

import ModalActionButton from "./ModalActionButton";

const AlertModal = (props) => {
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

  const logoutHandler = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });

    flashMessageHandler("Mesaj:", "Çıxış Edildi.", "success");
  };

  return (
    <Modal
      isVisible={props.isAlertModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onBackdropPress={props.toggleTimeModal}
      onBackButtonPress={props.toggleTimeModal}
      style={styles.ModalConatiner}
    >
      <View style={styles.container}>
        <View style={styles.cancelButtonContainer}>
          <CancelButton action={() => props.alertModalHandler()} />
        </View>
        <View style={styles.questionTextContainer}>
          <Text style={{ fontSize: defaultNumber * 4.5 }}>
            Çıxmaq istədiyinizə əminsiniz?
          </Text>
        </View>
        <View style={styles.actionButtonContainer}>
          <ModalActionButton
            text={"Xeyr"}
            color={"#FF2828"}
            action={() => props.alertModalHandler()}
          />
          <ModalActionButton
            text={"Bəli"}
            color={"#65B804"}
            action={logoutHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalConatiner: {},
  container: {
    height: "30%",
    width: "95%",
    backgroundColor: "#F6F6F6",
    borderRadius: defaultNumber * 6.25,
  },
  cancelButtonContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  questionTextContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonContainer: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default AlertModal;
