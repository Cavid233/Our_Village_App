import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { Touchable } from "../Touchable";

import { MaterialIcons } from "@expo/vector-icons";

const UserComment = (props) => {
  const [text, setText] = useState();

  const onChangeText = (txt) => {
    setText(() => txt);
  };

  const submitHandler = async () => {
    if (!text) {
      return;
    }

    props.enterCommentHandler({
      id: "us1",
      text: text.trim(),
      name: "John Doe",
      created_at: "2022-02-01T10:07:06.000000Z",
    });
    setText(() => null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <Touchable onPress={() => props.handleDismissPress()}>
            <View style={styles.subIconContainer}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color="black"
              />
            </View>
          </Touchable>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.userProfilePictureContainer}>
          <View style={styles.userProfilePicture}>
            <Text style={{ color: "white" }}>JD</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder={"Rəyinizi daxil edin"}
            multiline={true}
            textAlignVertical={"top"}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Touchable onPress={submitHandler}>
            <View style={styles.subButtonContainer}>
              <Text style={{ fontSize: 16, color: "white" }}>Göndər {">"}</Text>
            </View>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 230,
  },
  topContainer: {
    height: "30%",
    justifyContent: "center",
  },
  middleContainer: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
  },
  bottomContainer: {
    height: "20%",
    width: "100%",
    alignItems: "flex-end",
  },
  userProfilePictureContainer: {
    width: 70,
    height: "100%",
    alignItems: "center",
  },
  userProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#65B804",
  },
  inputContainer: {
    flex: 1,
    height: "95%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  input: {
    height: "90%",
    width: "100%",
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#65B804",
    width: 114,
    height: 42,
    borderRadius: 30,
    overflow: "hidden",
  },
  subButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#F6F6F6",
  },
  subIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserComment;
