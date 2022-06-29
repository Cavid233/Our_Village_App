import React from "react";

import { StyleSheet, Text, View, Dimensions, ImageBackground } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import {Touchable} from "../Touchable";

const windowHeight = Dimensions.get("window").height;

import defaultNumber from "../../Constants/defaultNumber";

import { useNavigation } from "@react-navigation/native";

import SearchInput from "react-native-search-filter";


const SubCategoryHeaderContainer = (props) => { 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imgBackgroundContainer}>
        <ImageBackground
          source={require("../../assets/category/subCategoryTopImage.png")}
          style={styles.image}
          resizeMode={"stretch"}
        >
          <View style={styles.subImgBackgroundContainer}>
            <View style={styles.goBackContainer}>
              <Touchable
                style={{ flex: 1 }}
                onPress={() => navigation.goBack()}
              >
                <View style={styles.subGoBackContainer}>
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={defaultNumber * 6}
                    color="black"
                  />
                </View>
              </Touchable>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.search_title_container}>
        <View style={styles.sub_seach_title_container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.categoryName}</Text>
          </View>

          <View style={styles.seachInputContainer}>
            <View style={styles.subSearchContainer}>
              <View style={styles.searchIconContainer}>
                <MaterialIcons
                  name="search"
                  size={defaultNumber * 6}
                  color="#7F7F7F"
                />
              </View>
              <View style={styles.searchInputContainer}>
                <SearchInput
                  onChangeText={(txt) => {
                    props.searchUpdated(txt);
                  }}
                  style={styles.searchInput}
                  placeholder="Məhsul Axtar"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { width: "100%", height: (windowHeight * 48) / 100 },
  imgBackgroundContainer: {
    height: (windowHeight * 30) / 100,
    backgroundColor: "pink"
  },
  subImgBackgroundContainer: {
    height: "50%",
    width: "15%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  goBackContainer: {
    height: defaultNumber * 10,
    width: defaultNumber * 10,
    borderRadius: defaultNumber * 6.25,
    overflow: "hidden",
    backgroundColor: "white",
  },
  subGoBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  search_title_container: {
    height: (windowHeight * 22) / 100,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: "53%",
  },
  sub_seach_title_container: {
    height: "100%",
    width: "93%",
    alignSelf: "center",
  },
  titleContainer: {
    height: (windowHeight * 13) / 100,
    justifyContent: "center",
  },
  title: {
    fontSize: defaultNumber * 6.25,
    fontFamily: "Poppins_600SemiBold",
  },
  seachInputContainer: {
    height: (windowHeight * 10) / 100,
  },
  subSearchContainer: {
    height: "70%",
    width: "100%",
    borderRadius: defaultNumber * 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },
  searchIconContainer: {
    width: "14%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInputContainer: {
    width: "76%",
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    color: "#7F7F7F",
  },
  image: {
    flex: 1,
  },
});

export default SubCategoryHeaderContainer;
