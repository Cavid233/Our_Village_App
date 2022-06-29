import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;
import defaultNumber from "../../Constants/defaultNumber";
import { useNavigation } from "@react-navigation/native";

import { Touchable } from "../Touchable";
const BigCardContainer = (props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{ ...styles.bigCardContainer, backgroundColor: props.bgColor }}
    >
      <Touchable onPress={() => navigation.navigate("CampaignScreen")}>
        <View style={styles.subBigCardContainer}>
          <View style={styles.firstPartContainer}>
            <View style={styles.title_text_container}>
              <View style={styles.titleContainer}>
                <Text
                  style={{
                    ...styles.titleText,
                    fontSize: props.titleSize,
                    color: props.isInCrousel ? "black" : "white",
                  }}
                >
                  {props.title}
                </Text>
              </View>

              <View style={styles.textContainer}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: props.textSize,

                    color: props.isInCrousel ? "#7A7A7A" : "white",
                  }}
                >
                  {props.text}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.secondPartContainer,
              justifyContent: props.isInCrousel ? "flex-end" : "center",
              alignItems: props.isInCrousel ? "flex-end" : "center",
            }}
          >
            <Image
              resizeMode={props.isInCrousel ? "stretch" : "contain"}
              style={props.isInCrousel ? styles.crouselImg : styles.img}
              source={props.imgSrc}
            />
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  bigCardContainer: {
    width: "100%",
    height: (windowHeight * 25) / 100,

    borderRadius: defaultNumber * 5,
    overflow: "hidden",
  },
  subBigCardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  firstPartContainer: {
    width: "55%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondPartContainer: {
    width: "45%",
    height: "100%",
  },
  img: {
    width: "75%",
    height: "75%",
  },
  crouselImg: {
    width: "100%",
    height: "90%",
  },
  title_text_container: { width: "90%", justifyContent: "space-around" },
  titleContainer: { height: "48%", justifyContent: "center" },
  titleText: {
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
  },
  textContainer: { height: "48%" },
  text: {
    fontWeight: "300",
    fontFamily: "Poppins_300Light",
  },
});

export default BigCardContainer;
