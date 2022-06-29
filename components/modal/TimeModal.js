import React, { useState } from "react";

import Modal from "react-native-modal";

import { StyleSheet, View, Text, Dimensions } from "react-native";

import { Touchable } from "../Touchable";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import WheelPickerExpo from "react-native-wheel-picker-expo";
import defaultNumber from "../../Constants/defaultNumber";

const MINUTES = "0,5,10,15,20,25,30,35,40,45,50,55".split(",");

const TimeModal = (props) => {
  const [minute, setMinute] = useState(props.selectedMinute);

  return (
    <Modal
      isVisible={props.isTimeModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onBackdropPress={props.toggleTimeModal}
      onBackButtonPress={props.toggleTimeModal}
      style={styles.ModalConatiner}
    >
      <View style={styles.container}>
        <View style={styles.wheelPickerContainer}>
          <View style={{ width: "10%" }}></View>
          <View style={styles.wheelPickerView}>
            <WheelPickerExpo
              height={(deviceHeight * 40) / 100}
              width={defaultNumber * 45}
              backgroundColor={"#F6F6F6"}
              initialSelectedIndex={MINUTES.indexOf(
                String(props.selectedMinute)
              )}
              items={MINUTES.map((item) => ({
                label: item,
                value: item,
              }))}
              onChange={({ item }) => setMinute(item.label)}
              selectedStyle={{ borderWidth: 1.5, borderColor: "#E6E4EA" }}
            />
          </View>

          <View style={{ width: "10%", backgroundColor: "#F6F6F6" }}>
            <Text style={{ fontSize: defaultNumber * 6.25 }}>dq</Text>
          </View>
        </View>
        <View style={styles.actionButtonContainer}>
          <View style={styles.cancelButtonView}>
            <Touchable onPress={props.toggleTimeModal}>
              <View style={styles.subCancelButtonView}>
                <Text
                  style={{ fontSize: defaultNumber * 3.75, color: "#7F7F7F" }}
                >
                  Ləvğ et
                </Text>
              </View>
            </Touchable>
          </View>
          <View style={styles.acceptButtonView}>
            <Touchable onPress={() => props.minuteHandler(minute)}>
              <View style={styles.subAcceptButtonView}>
                <Text style={{ fontSize: defaultNumber * 4.25 }}>
                  Yadda saxla
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalConatiner: {},
  container: {
    height: "55%",
    width: "95%",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  wheelPickerContainer: {
    height: "80%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonContainer: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "green",
  },
  wheelPickerView: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonView: {
    width: "50%",
    height: "100%",
    borderTopRightRadius: defaultNumber * 6.25,
    overflow: "hidden",
  },
  subCancelButtonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButtonView: {
    width: "50%",
    height: "100%",
    borderTopLeftRadius: (defaultNumber * 25) / 4,
    overflow: "hidden",
  },
  subAcceptButtonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimeModal;
