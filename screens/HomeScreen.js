import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

import { Touchable } from "../components/Touchable";

import SettingsSheet from "../components/bottomSheets/SettingsSheet";
import ProductDetailsSheet from "../components/bottomSheets/ProductDetailsSheet";
import CommentsSheet from "../components/bottomSheets/CommentsSheet";

import CardContainer from "../components/home/CardContainer";
import CrouselContainer from "../components/home/CrouselContainer'";
import BigCardContainer from "../components/home/BigCardContainer";
import CategoriesContainer from "../components/CategoriesContainer";
import defaultNumber from "../Constants/defaultNumber";
import { useNavigation } from "@react-navigation/native";

import { best_seller_products, homeSlider } from "../data/dummy_data";

const windowHeight = Dimensions.get("window").height;

const HomeScreen = (props) => {
  const navigation = useNavigation();

  const [isPorductSheetShow, setIsPorductSheetShow] = useState(false);
  const [isCommentSheetShow, setIsCommentSheetShow] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState("");

  const productSheetReverseHandler = (productObj) => {
    setSelectedProduct(() => productObj);

    setIsPorductSheetShow((prev) => !prev);
  };
  const commentSheetReverseHandler = () => {
    setIsCommentSheetShow((prev) => !prev);
  };

  const productSheetHandler = (num) => {
    if (num == 1) {
      setIsPorductSheetShow(() => true);
    } else {
      setIsPorductSheetShow(() => false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "93%", alignSelf: "center" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Our-Village</Text>
          </View>
          <BigCardContainer
            imgSrc={require("../assets/home/homeTopImg.png")}
            title={"Bakıda ilk orqanik qida butiki"}
            titleSize={defaultNumber * 5}
            text={
              "Saf, qatqısız, GMO-suz, kənd məhsullarını rahat şəkildə sifariş edə bilərsiniz"
            }
            textSize={defaultNumber * 3}
            bgColor={"#41D050"}
            src={"homeTopImg"}
          />
          <View style={styles.categoryTitleContainer}>
            <Text style={styles.categoryTitle}>Kateqoriyalar</Text>
            <View style={styles.viewCategoriesContainer}>
              <Touchable onPress={() => navigation.navigate("Categories")}>
                <View style={styles.viewSubCategoriesContainer}>
                  <Text style={styles.viewCategoriesText}>
                    Hamsına bax {">"}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <CategoriesContainer />
          </View>

          <BigCardContainer
            imgSrc={require("../assets/home/freshMums.png")}
            title={"Fresh Mums"}
            titleSize={defaultNumber * 7.5}
            text={"Hamilə xanımların meyvə butiki"}
            textSize={defaultNumber * 3.5}
            bgColor={"#41D050"}
            src={"freshMums"}
          />
          <CrouselContainer data={homeSlider} />
          <View>
            <CardContainer
              productSheetReverseHandler={productSheetReverseHandler}
              title={"Günün məhsulları"}
              data={best_seller_products}
            />
          </View>
          <View>
            <CardContainer
              productSheetReverseHandler={productSheetReverseHandler}
              title={"Ən çox satılanlar"}
              data={best_seller_products}
            />
          </View>
          <View></View>

          <View style={{ height: 30 }}></View>
        </ScrollView>
      </View>

      <SettingsSheet />
      <ProductDetailsSheet
        isShow={isPorductSheetShow}
        productSheetHandler={productSheetHandler}
        commentSheetOpenHandler={commentSheetReverseHandler}
        selectedProduct={selectedProduct}
      />
      <CommentsSheet
        isShow={isCommentSheetShow}
        commentSheetReverseHandler={commentSheetReverseHandler}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerTitleContainer: {
    height: (windowHeight * 10) / 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: defaultNumber * 6,
    fontFamily: "Poppins_500Medium",
  },
  categoryTitleContainer: {
    height: defaultNumber * 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  categoryTitle: {
    fontSize: defaultNumber * 5,
    fontFamily: "Poppins_500Medium",
  },
  viewCategoriesContainer: {
    borderRadius: (defaultNumber * 15) / 4,
    overflow: "hidden",
  },
  viewSubCategoriesContainer: {
    padding: (defaultNumber * 5) / 4,
  },
  viewCategoriesText: {
    fontSize: defaultNumber * 3.5,
    fontFamily: "Poppins_500Medium",
    color: "gray",
  },
  categoriesContainer: {
    height: defaultNumber * 100,
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default HomeScreen;
