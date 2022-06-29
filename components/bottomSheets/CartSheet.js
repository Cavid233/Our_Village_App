import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { View, Text, StyleSheet } from "react-native";

import { Touchable } from "../Touchable";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

import defaultNumber from "../../Constants/defaultNumber";
import { AntDesign } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";

import { useDispatch } from "react-redux";

import * as cartActions from "../../store/actions/cart";

const Plus_minus_view = (props) => {
  return (
    <View style={styles.plus_minus_view}>
      <Touchable onPress={props.action}>
        <View style={styles.sub_plus_minus_view}>{props.icon}</View>
      </Touchable>
    </View>
  );
};

const CartSheet = (props) => {
  const bottomSheetRef = useRef(null);
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  const { selectedProduct } = props;

  const dispatch = useDispatch();

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

  const snapPoints = useMemo(() => ["50%"], []);

  const handleSheetChanges = useCallback((index) => {}, []);

  useEffect(() => {
    if (selectedProduct) {
      setTotalPrice(() =>
        (amount * parseFloat(selectedProduct.price_after_discount)).toFixed(2)
      );
    }
  }, [amount, selectedProduct]);

  useEffect(() => {
    bottomSheetRef.current.expand();
  }, [props.isShow]);

  useEffect(() => {
    setAmount(() => 1);
  }, [selectedProduct]);

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
      duration: 1500,
      onPress: () => action(),
    });
  };

  const removeProductHandler = async () => {
    flashMessageHandler("Mesaj:", "Məhsul Səbətdən Silindi", "success");

    dispatch(cartActions.deleteSelectedProduct(selectedProduct.id));
    bottomSheetRef.current.close();
  };

  const handleDismissPress = async () => {
    dispatch(
      cartActions.addProduct(
        selectedProduct.id,
        selectedProduct.name,
        amount,
        selectedProduct.price_after_discount,
        selectedProduct.description
      )
    );

    flashMessageHandler("Mesaj:", "Məhsul Səbətə Əlavə Edildi!", "success");

    bottomSheetRef.current.close();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <View style={styles.topContainer}>
          <View style={styles.title_text_container}>
            <Text style={styles.topTitle}>
              {selectedProduct && selectedProduct.name}
            </Text>
            <BottomSheetScrollView>
              <Text style={styles.topText}>
                {selectedProduct && selectedProduct.description}
              </Text>
            </BottomSheetScrollView>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.trashIconContainer}>
            <View style={styles.iconView}>
              <Touchable onPress={() => removeProductHandler()}>
                <View style={styles.subIconView}>
                  <FontAwesome
                    name="trash-o"
                    size={defaultNumber * 7.5}
                    color="#F44336"
                  />
                </View>
              </Touchable>
            </View>
          </View>
          <View style={styles.middleTextContainer}>
            <Text style={styles.middleText}>
              Sil ({selectedProduct && selectedProduct.quantity})
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.increase_decrease_container}>
            <View style={styles.sub_increase_decrease_container}>
              <Plus_minus_view
                action={decreaseAmount}
                icon={
                  <AntDesign
                    name="minus"
                    size={(defaultNumber * 22) / 4}
                    color="black"
                  />
                }
              />
              <View style={styles.increase_decrease_number_container}>
                <Text style={styles.increase_decrease_text}>{amount}</Text>
              </View>
              <Plus_minus_view
                action={increaseAmount}
                icon={
                  <AntDesign
                    name="plus"
                    size={(defaultNumber * 22) / 4}
                    color="black"
                  />
                }
              />
            </View>
          </View>
          <View style={styles.submitButtonContainer}>
            <View style={styles.subSubmitButtonContainer}>
              <Touchable onPress={handleDismissPress}>
                <View style={styles.submitButtonTextContainer}>
                  <Text style={styles.submitButtonText}>Əlavə edin</Text>
                  <Text style={styles.submitButtonText}> ₼ {totalPrice}</Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: "90%",
    alignSelf: "center",
  },
  topContainer: {
    height: "60%",
    justifyContent: "center",
  },
  middleContainer: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: "#DEDEDE",
  },
  bottomContainer: {
    flexDirection: "row",
    height: "20%",
  },
  trashIconContainer: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
  },
  iconView: {
    height: (defaultNumber * 50) / 4,
    width: (defaultNumber * 50) / 4,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: (defaultNumber * 25) / 4,
  },
  subIconView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleTextContainer: {
    width: "85%",
    height: "100%",
    justifyContent: "center",
  },
  middleText: { color: "#F44336", fontSize: defaultNumber * 4.5 },
  title_text_container: { height: "85%", width: "100%" },
  topTitle: {
    fontSize: defaultNumber * 6.25,
    fontFamily: "Poppins_500Medium",
  },
  topText: { fontSize: defaultNumber * 3.5, color: "#7F7F7F" },
  increase_decrease_container: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  sub_increase_decrease_container: {
    width: "90%",
    height: "85%",
    borderRadius: (defaultNumber * 30) / 4,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    overflow: "hidden",
    flexDirection: "row",
  },
  plus_minus_view: {
    height: "100%",
    width: "33%",
  },
  sub_plus_minus_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  increase_decrease_number_container: {
    width: "34%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  increase_decrease_text: { fontSize: (defaultNumber * 16) / 4 },
  submitButtonContainer: {
    width: "60%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subSubmitButtonContainer: {
    width: "90%",
    height: "85%",
    backgroundColor: "#65B804",
    // borderRadius: 30,
    borderRadius: (defaultNumber * 30) / 4,
    overflow: "hidden",
  },
  submitButtonTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  submitButtonText: {
    color: "white",
    fontSize: (defaultNumber * 18) / 4,
  },
});

export default CartSheet;
