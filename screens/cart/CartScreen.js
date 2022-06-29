import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TimeModal from "../../components/modal/TimeModal";
import CartSheet from "../../components/bottomSheets/CartSheet";
import SettingsSheet from "../../components/bottomSheets/SettingsSheet";

import SubmitButton from "../../components/SubmitButton";

import BillingCard from "../../components/cart/BillingCard";

import InformationCard from "../../components/cart/InformationCard";

import MethodCard from "../../components/cart/MethodCard";

import PayingContainer from "../../components/cart/PayingContainer";
import { useSelector } from "react-redux";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";

const CartScreen = (props) => {
  const [isFirstDeliveryMethodSelected, setIsFirstDeliveryMethodSelected] =
    useState(true);

  const [isPaymentCash, setIsPaymentCash] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState();

  const [defaultAddress, setDefaultAddress] = useState();

  const basketProducts = useSelector((state) => state.cart.basket);

  const [isCartSheetShow, setIsCartSheetShow] = useState(false);

  const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);

  const [totalPrice, setTotalPrice] = useState("0");

  const [minute, setMinute] = useState("25");

  const minuteHandler = (min) => {
    setMinute(() => min);
    toggleTimeModal();
  };

  const navigation = useNavigation();

  const toggleTimeModal = () => {
    setIsTimeModalVisible((prev) => !prev);
  };

  const deliveryMethodHandler = (check) => {
    if (check == "first") {
      setIsFirstDeliveryMethodSelected(() => true);
    } else {
      setIsFirstDeliveryMethodSelected(() => false);
    }
  };

  const cartSheetReverseHandler = () => {
    setIsCartSheetShow((prev) => !prev);
  };

  const paymentMethodHandler = (kind) => {
    if (kind == "cash") {
      setIsPaymentCash(() => true);
    } else {
      setIsPaymentCash(() => false);
    }
  };

  const runFunction = useCallback(async () => {}, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      runFunction();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, runFunction]);

  const submitHandler = async () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TimeModal
        isTimeModalVisible={isTimeModalVisible}
        toggleTimeModal={toggleTimeModal}
        minuteHandler={minuteHandler}
        selectedMinute={minute}
      />
      <View style={styles.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderTitleContainer headerTitle={"Səbət"} fontSize={38} />
          <View style={{ width: "100%" }}>
            <View style={{ height: 40, justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontFamily: "Poppins_500Medium" }}>
                Sifariş verilən məhsullar
              </Text>
            </View>

            {basketProducts.map((item) => (
              <BillingCard
                key={item.id}
                productName={item.name}
                productAmount={item.quantity}
                product_price_after_discount={item.price_after_discount}
                productQuantity={item.quantity}
                action={() => {
                  setSelectedProduct(item);
                  cartSheetReverseHandler();
                }}
              />
            ))}
          </View>

          <View style={styles.method_orderDetails_container}>
            <View style={styles.orderDetailsContainer}>
              <Text style={styles.orderDetailsText}>Sifariş detalları</Text>
            </View>
            <View style={styles.deliveryTextContainer}>
              <Text style={styles.deliveryText}>Çatdırılma</Text>
            </View>
            <View style={styles.methodCardContainer}>
              <MethodCard
                id={"first"}
                title={"Çatdırılma"}
                text={"Məhsulları qapınıza qədər çatdırırıq!"}
                isSelected={isFirstDeliveryMethodSelected}
                deliveryMethodHandler={deliveryMethodHandler}
              />
              <MethodCard
                id={"second"}
                title={"Mağazadan götür"}
                text={"Məhsulları öncədən sifariş verin və götürün!"}
                isSelected={!isFirstDeliveryMethodSelected}
                deliveryMethodHandler={deliveryMethodHandler}
              />
            </View>
          </View>

          {isFirstDeliveryMethodSelected ? (
            <InformationCard
              icon={
                <Ionicons name="location-outline" size={28} color="black" />
              }
              title={"Çatdırılma adresi"}
              text={"Gəncə.pr 270A"}
              // navigationTo={"AddressesScreen"}
              action={() => navigation.navigate("AddressesScreen")}
            />
          ) : (
            <InformationCard
              icon={
                <MaterialCommunityIcons
                  name="clock-time-three-outline"
                  size={28}
                  color="black"
                />
              }
              title={"Mağazadan götürmə müddəti"}
              text={minute + " dəqiqə"}
              action={toggleTimeModal}
            />
          )}

          <InformationCard
            icon={<FontAwesome5 name="user-circle" size={28} color="black" />}
            title={"Sifarişçi haqqında məlumat"}
            text={"+994 51 555 44 33"}
            action={() => {}}
          />

          <PayingContainer
            isPaymentCash={isPaymentCash}
            paymentMethodHandler={paymentMethodHandler}
          />
          <View style={styles.submitContainer}>
            <View style={styles.totalTextContainer}>
              <Text style={{ fontFamily: "Poppins_600SemiBold" }}>Toplam</Text>
              <Text style={{ fontFamily: "Poppins_600SemiBold" }}>
                ₼ {totalPrice}
              </Text>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <SubmitButton title={"Davam Et"} action={submitHandler} />
            </View>
          </View>

          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
      <SettingsSheet />
      <CartSheet
        isShow={isCartSheetShow}
        cartSheetReverseHandler={cartSheetReverseHandler}
        selectedProduct={selectedProduct}
        updateBasketHandler={runFunction}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  subContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  method_orderDetails_container: {
    width: "100%",
    marginTop: 25,
    marginBottom: 10,
  },
  orderDetailsContainer: { height: 40, justifyContent: "center" },
  orderDetailsText: { fontSize: 18, fontFamily: "Poppins_500Medium" },
  deliveryTextContainer: {
    height: 50,
    marginTop: 10,
    justifyContent: "center",
  },
  deliveryText: { fontSize: 16, fontFamily: "Poppins_500Medium" },

  methodCardContainer: {
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submitContainer: {
    height: 150,
    width: "100%",
  },
  totalTextContainer: {
    height: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default CartScreen;
