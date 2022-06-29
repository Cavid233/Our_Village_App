import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Touchable } from "../Touchable";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import defaultNumber from "../../Constants/defaultNumber";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";

import * as modalActoin from "../../store/actions/modal-actions"; // Nwe

import { showMessage } from "react-native-flash-message";

import * as cartActions from "../../store/actions/cart";

import KilogramBox from "./KilogramBox";



const AmountButton = (props) => {
  return (
    <View style={styles.amountButton}>
      <Touchable onPress={props.amountHandler}>
        <View style={styles.subAmountButton}>{props.buttonIcon}</View>
      </Touchable>
    </View>
  );
};

const ProductDetailsSheet = (props) => {
  // ref
  const bottomSheetRef = useRef(null);
  const [amount, setAmount] = useState(1);
  const [selectedKg, setSelectedKg] = useState(0.5);

  const { selectedProduct } = props;

  const navigation = useNavigation();

  const totalPrice = (
    amount * parseFloat(selectedProduct.product_Price_After_Discount)
  ).toFixed(2);

  const dispatch = useDispatch();

  useEffect(() => {
    setAmount(() => 1);
  }, [selectedProduct]);

  const selectedKgHandler = (kilgoram) => {
    setSelectedKg(() => kilgoram);
  };

  const handleDismissPress = async () => {
    dispatch(
      cartActions.addProduct(
        selectedProduct.productId,
        selectedProduct.productName,
        amount,
        selectedProduct.product_Price_After_Discount,
        selectedProduct.productDescription
      )
    );

    showMessage({
      message: "Səbətə Get",
      description:
        "₼ " +
        (amount * selectedProduct.product_Price_After_Discount).toFixed(2),
      type: "success",
      icon: "success",
      duration: 5000,
      onPress: () => {
        navigation.navigate("Cart");
      },
    });

    bottomSheetRef.current.close();
  };

  useEffect(() => {
    bottomSheetRef.current.expand();
  }, [props.isShow]);

  const increaseAmount = () => {
    setAmount((prev) => {
      if (prev < 3) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const decreaseAmount = () => {
    if (amount < 2) {
      return;
    }
    setAmount((prev) => prev - 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      overDragResistanceFactor={5}
      style={{
        borderTopRightRadius: defaultNumber * 5,
        borderTopLeftRadius: defaultNumber * 5,
        overflow: "hidden",
      }}
      index={-1}
      snapPoints={["80%"]}
      enablePanDownToClose={true}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            resizeMode={"contain"}
            source={selectedProduct.productImg}
          />
        </View>
        <View style={styles.kgContainer}>
          <View style={styles.kgTitleContainer}>
            <Text style={styles.kgTitle}>{selectedProduct.productName}</Text>
          </View>
          <View style={styles.kgBoxContainer}>
            <KilogramBox
              selectedKg={selectedKg}
              selectedKgHandler={selectedKgHandler}
              kg={0.5}
            />
            <KilogramBox
              selectedKg={selectedKg}
              selectedKgHandler={selectedKgHandler}
              kg={1}
            />
            <KilogramBox
              selectedKg={selectedKg}
              selectedKgHandler={selectedKgHandler}
              kg={2}
            />
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <View style={styles.aboutTitleContainer}>
            <Text style={styles.aboutTitle}>Haqqında</Text>
          </View>
          <BottomSheetScrollView>
            <Text style={styles.aboutText}>
              {selectedProduct.productDescription}
            </Text>
          </BottomSheetScrollView>
        </View>
        <View style={styles.commentContainer}>
          <Touchable
            onPress={() => {
              dispatch(
                modalActoin.updateSelectedProductIdHandler(
                  selectedProduct.productId
                )
              );
              props.commentSheetOpenHandler();
            }}
          >
            <View style={styles.subCommentContainer}>
              <FontAwesome
                name="comment-o"
                size={(defaultNumber * 24) / 4}
                color="black"
              />
              <Text style={styles.commentText}>
                Məhsul haqqında rəylər {">"}{" "}
              </Text>
            </View>
          </Touchable>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.increase_decrase_buttonContainer}>
            <AmountButton
              amountHandler={decreaseAmount}
              buttonIcon={
                <AntDesign
                  name="minus"
                  size={(defaultNumber * 22) / 4}
                  color="black"
                />
              }
            />
            <Text style={{ fontSize: (defaultNumber * 25) / 4 }}>{amount}</Text>
            <AmountButton
              amountHandler={increaseAmount}
              buttonIcon={
                <AntDesign
                  name="plus"
                  size={(defaultNumber * 22) / 4}
                  color="black"
                />
              }
            />
          </View>

          <View style={styles.submitButtonContainer}>
            <Touchable
              onPress={() => {
                handleDismissPress();
              }}
            >
              <View style={styles.subSubmitButtonContainer}>
                <Text style={styles.submitButtonText}>Əlavə edin</Text>
                <Text style={styles.submitButtonText}>₼{totalPrice}</Text>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  imageContainer: { height: "28%", width: "50%", alignSelf: "center" },
  kgContainer: {
    height: "18%",
    justifyContent: "center",
  },
  aboutContainer: {
    height: "31%",
  },
  commentContainer: {
    width: "100%",
    height: "11%",

    borderRadius: (defaultNumber * 10) / 4,
    overflow: "hidden",
  },
  actionContainer: {
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
  },
  img: { width: "100%", height: "100%", borderRadius: defaultNumber * 4 },
  kgTitle: {
    fontSize: (defaultNumber * 22) / 4,
    fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
  },
  kgTitleContainer: {
    height: "40%",
    justifyContent: "center",
  },
  kgBoxContainer: {
    height: "60%",
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },


  aboutTitleContainer: {
    height: (defaultNumber * 45) / 4,
    justifyContent: "center",
  },
  aboutTitle: {
    fontWeight: "bold",
    fontSize: defaultNumber * 4.5,
    fontFamily: "Poppins_600SemiBold",
  },
  aboutText: {
    fontSize: (defaultNumber * 14) / 4,
    color: "#7F7F7F",
    fontFamily: "Poppins_400Regular",
  },
  subCommentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  commentText: {
    marginLeft: (defaultNumber * 5) / 4,
    fontSize: (defaultNumber * 15) / 4,
    fontFamily: "Poppins_400Regular",
  },
  increase_decrase_buttonContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  amountButton: {
    width: (defaultNumber * 48) / 4,
    height: (defaultNumber * 48) / 4,
    backgroundColor: "#F5F5F5",
    borderRadius: (defaultNumber * 30) / 4,
    overflow: "hidden",
  },
  subAmountButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonContainer: {
    width: "60%",
    height: "92%",
    backgroundColor: "#65B804",
    borderRadius: (defaultNumber * 20) / 4,
    overflow: "hidden",
  },
  subSubmitButtonContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  submitButtonText: { color: "white", fontSize: (defaultNumber * 18) / 4 },
});

export default ProductDetailsSheet;
