import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import defaultNumber from "../Constants/defaultNumber";

import HeaderTitleContainer from "../components/HeaderTitleContainer";

const StoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <HeaderTitleContainer headerTitle={"Hekayəmiz"} isIcon />
        <View style={styles.topContainer}>
          <View style={styles.subTopContainer}>
            <View style={styles.top_title_text_container}>
              <View style={styles.subTop_title_text_container}>
                <Text style={styles.topTitle}>
                  Bakıda ilk orqanik qida butiki
                </Text>
                <Text style={styles.topText}>
                  Our-Village Bakıda ilk saf, qatqısız, GMO-suz, kənd
                  məhsullarını rahat şəkildə sifariş edə biləcəyiniz qida
                  butikidir.
                </Text>
              </View>
            </View>
            <View style={styles.topImgContainer}>
              <Image
                style={styles.storyFruitImg}
                // resizeMode={"contain"}
                resizeMode={"stretch"}
                source={require("../assets/storyFruit.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View
            style={{ width: "90%", height: "100%", justifyContent: "center" }}
          >
            {/* <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 10 }}> */}
            <Text
              style={{
                fontSize: defaultNumber * 6,
                fontWeight: "600",
                marginBottom: 10,
              }}
            >
              Our-Village
            </Text>
            {/* <Text style={{ fontSize: 16 }}> */}
            <Text style={{ fontSize: defaultNumber * 4 }}>
              Our-Village Bakıda ilk saf, qatqısız, GMO-suz, kənd məhsullarını
              rahat şəkildə sifariş edə biləcəyiniz qida butikidir. Our-Village
              Bakıda ilk saf, qatqısız, GMO-suz, kənd məhsullarını rahat şəkildə
              sifariş edə biləcəyiniz qida butik Our-Village Bakıda ilk saf,
              qatqısız, GMO-suz, kənd məhsullarını rahat şəkildə sifariş edə
              biləcəyiniz qida b
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.subBottomContainer}>
            <View style={styles.bottom_title_text_container}>
              <View style={styles.subBottom_title_text_container}>
                <Text style={styles.bottomTitle}>
                  Bizi sosial mediada izləyin!
                </Text>
                <Text style={styles.bottomText}>Our-Village</Text>
              </View>
            </View>
            <View style={styles.bottomImgContainer}>
              <Image
                style={styles.storyGirlImg}
                // resizeMode={"contain"}
                resizeMode={"stretch"}
                source={require("../assets/storyGirl.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  subContainer: {
    width: "95%",
    height: "100%",
  },
  topContainer: { height: "30%", width: "100%" },
  subTopContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#5EC1D4",
    borderRadius: defaultNumber * 7.5,
  },
  top_title_text_container: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topImgContainer: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
  },
  storyFruitImg: {
    height: "90%",
    width: "90%",
  },

  subTop_title_text_container: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
  },
  topTitle: {
    fontFamily: "Poppins_500Medium",
    color: "white",
    // fontSize: 22,
    fontSize: defaultNumber * 5,
  },
  topText: {
    color: "white",
    fontFamily: "Poppins_300Light",
    fontSize: defaultNumber * 3,
  },

  middleContainer: {
    height: "35%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: { height: "25%", width: "100%" },
  subBottomContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#EB2531",
    // borderTopLeftRadius: 30,
    borderTopLeftRadius: defaultNumber * 7.5,
    // borderTopRightRadius: 30,
    borderTopRightRadius: defaultNumber * 7.5,
  },
  bottom_title_text_container: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  subBottom_title_text_container: {
    width: "85%",
    height: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomTitle: {
    // fontSize: 22,
    fontSize: defaultNumber * 5.5,
    color: "white",
    fontFamily: "Poppins_500Medium",
  },
  bottomText: {
    fontSize: defaultNumber * 5,
    color: "white",
    fontFamily: "Poppins_500Medium",
  },
  bottomImgContainer: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
  },
  storyGirlImg: {
    height: "95%",
    width: "95%",
  },
});

export default StoryScreen;
