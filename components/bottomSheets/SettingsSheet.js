import React, { useCallback, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Touchable } from "../Touchable";

import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import defaultNumber from "../../Constants/defaultNumber";
import * as Linking from "expo-linking";

import * as modalActoin from "../../store/actions/modal-actions"; // Nwe
import { useSelector, useDispatch } from "react-redux";

const SettingsSheet = (props) => {
  const fetchData = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  // ref
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback((index) => {
    if (index == -1) {
      dispatch(modalActoin.modalShowHandler(false));
    }
  }, []);

  const _handleOpenWithLinking = () => {
    Linking.openURL("https://www.youtube.com/watch?v=Fsm71pt4nXk");
  };

  useEffect(() => {
    if (fetchData.isSettingsModalShow) {
      bottomSheetRef.current.expand();
    } else {
      bottomSheetRef.current.close();
    }
  }, [fetchData.isSettingsModalShow]);

  const BottomSection = (props) => {
    return (
      <Touchable
        onPress={() => {
          bottomSheetRef.current.close();
          props.action();
        }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>{props.icon}</View>
          <Text style={styles.textContainer}>{props.text}</Text>
        </View>
      </Touchable>
    );
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      style={{
        borderTopRightRadius: defaultNumber * 5,
        borderTopLeftRadius: defaultNumber * 5,
        overflow: "hidden",
      }}
      snapPoints={["35%"]}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
    >
      <BottomSection
        text={"Profil"}
        icon={
          <FontAwesome5
            name="user-circle"
            size={defaultNumber * 6}
            color="#7F7F7F"
          />
        }
        action={() => navigation.navigate("Settings")}
      />
      <BottomSection
        text={"Hekayəmiz"}
        icon={
          <AntDesign name="smileo" size={defaultNumber * 6} color="#7F7F7F" />
        }
        action={() => navigation.navigate("StoryScreen")}
      />
      <BottomSection
        text={"Necə sifariş verək?"}
        icon={
          <AntDesign
            name="videocamera"
            size={defaultNumber * 6}
            color="#7F7F7F"
          />
        }
        action={_handleOpenWithLinking}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: "33%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: { fontSize: defaultNumber * 4.5, color: "#7F7F7F" },
});

export default SettingsSheet;
