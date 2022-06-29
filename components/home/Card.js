import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

import { Touchable } from "../Touchable";

import { AntDesign } from "@expo/vector-icons";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";

import * as cartActions from "../../store/actions/cart";

const Card = (props) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);

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
      // icon: "success",
      duration: 1000,
      onPress: () => action(),
    });
  };

  const submitHandler = async (productPrice) => {
    setIsSelected(() => true);
    flashMessageHandler("Səbətə Get", "₼ " + productPrice, "success", () =>
      navigation.navigate("Cart")
    );

    dispatch(
      cartActions.addProduct(
        props.productId,
        props.productName,
        1,
        props.price_after_discount,
        props.description
      )
    );
  };

  return (
    <View
      style={{
        ...styles.container,
        borderWidth: isSelected ? 1 : null,
        borderColor: isSelected ? "#65B804" : null,
        marginLeft: props.isMarginLeft ? 6 : 0,
        marginTop: 7,
      }}
    >
      <Touchable
        useForeground={true}
        onPress={() =>
          props.productSheetReverseHandler({
            productId: props.productId,
            productName: props.productName,
            productImg: props.imgSrc,
            productPrice: props.price,
            product_Price_After_Discount: props.price_after_discount,
            productDescription: props.description,
          })
        }
      >
        <View style={styles.cardContainer}>
          <View style={styles.subCardContainer}>
            <View style={styles.imgContainer}>
              <Image
                resizeMode={"contain"}
                style={styles.imgCard}
                source={props.imgSrc}
              />
            </View>
            <View style={styles.title_text_container}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleCard}>{props.productName}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textCard}>{props.price_per}</Text>
              </View>
            </View>
            <View style={styles.cardButtonContainer}>
              <View style={styles.subCardButtonContainer}>
                <Touchable
                  onPress={() => {
                    if (!isSelected) {
                      submitHandler(props.price_after_discount);
                    } else {
                      navigation.navigate("Cart");
                    }
                  }}
                >
                  <View
                    style={{
                      ...styles.buttonView,
                      backgroundColor: isSelected ? "#65B804" : null,
                    }}
                  >
                    {isSelected ? (
                      <View style={styles.button_title_icon_container}>
                        <Text style={{ color: "white", marginRight: 3 }}>
                          Səbət
                        </Text>
                        <AntDesign
                          name="shoppingcart"
                          size={24}
                          color="white"
                        />
                      </View>
                    ) : (
                      <Text>₼{props.price_after_discount}</Text>
                    )}
                  </View>
                </Touchable>
              </View>
            </View>
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 176,
    height: 290,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subCardContainer: { width: "90%", height: "90%" },
  cardButtonContainer: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  subCardButtonContainer: {
    borderRadius: 20,
    overflow: "hidden",

    width: "100%",
    height: 45,
    backgroundColor: "#F5F5F5",
  },
  buttonView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button_title_icon_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title_text_container: { height: "20%" },
  titleContainer: { height: "50%" },
  titleCard: { fontSize: 14, fontFamily: "Poppins_500Medium" },
  textContainer: { height: "50%", justifyContent: "flex-end" },
  textCard: { color: "#7F7F7F", fontFamily: "Poppins_400Regular" },
  imgContainer: {
    height: "50%",
    width: "100%",
  },
  imgCard: {
    width: "100%",
    height: "100%",

    borderRadius: 15,
  },
});

export default Card;
