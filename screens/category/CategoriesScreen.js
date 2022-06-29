import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

import defaultNumber from "../../Constants/defaultNumber";

import CategoriesContainer from "../../components/CategoriesContainer";
import SettingsSheet from "../../components/bottomSheets/SettingsSheet";

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kateqoriyalar</Text>
      </View>
      <View style={styles.categoryContainer}>
        <CategoriesContainer isInCategoriesScreen={true} />
      </View>
      <SettingsSheet />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  titleContainer: {
    height: "10%",
    width: "90%",
    justifyContent: "center",
  },
  title: {
    fontSize: defaultNumber * 7,
    fontFamily: "Poppins_500Medium",
  },
  categoryContainer: {
    width: "90%",
    height: "90%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CategoriesScreen;
