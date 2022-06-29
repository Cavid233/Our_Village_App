import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import defaultNumber from "../../Constants/defaultNumber";

import SubmitButton from "../SubmitButton";

const MapSheet = (props) => {
  // ref
  const bottomSheetRef = useRef(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      overDragResistanceFactor={5}
      style={{
        borderTopRightRadius: defaultNumber * 5,
        borderTopLeftRadius: defaultNumber * 5,
        overflow: "hidden",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        paddingTop: 5,
      }}
      index={0}
      snapPoints={[370]}
      keyboardBehavior="fillParent"
    >
      <View style={styles.container}>
        <BottomSheetTextInput
          style={styles.input}
          placeholder={"Ölkə"}
          value={"Azerbaijan"}
        />
        <BottomSheetTextInput
          style={styles.input}
          placeholder={"Şəhər"}
          onChangeText={(txt) => props.cityHandler(txt)}
        />
        <BottomSheetTextInput
          style={styles.input}
          placeholder={"Küçə"}
          value={props.street}
          onChangeText={(txt) => props.streetHandler(txt)}
        />

        <View style={styles.bottomSheetTextContainer}>
          <BottomSheetTextInput style={styles.smallInput} placeholder={"Ev"} />
          <BottomSheetTextInput
            style={styles.smallInput}
            placeholder={"Mənzil"}
          />
          <BottomSheetTextInput
            style={styles.smallInput}
            placeholder={"Blok"}
          />
          <BottomSheetTextInput
            style={styles.smallInput}
            placeholder={"Mərtəbə"}
          />
        </View>

        <SubmitButton
          title={"2-ci Mərhələyə Geç"}
          action={props.submitHandler}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginBottom: 10,
    borderRadius: (defaultNumber * 20) / 4,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    borderWidth: 1,
    paddingLeft: 15,
  },
  smallInput: {
    width: "22%",
    height: 49,
    borderRadius: (defaultNumber * 23) / 4,
    borderWidth: 1,
    borderColor: "#7F7F7F",
    textAlign: "center",
  },
  bottomSheetTextContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default MapSheet;
