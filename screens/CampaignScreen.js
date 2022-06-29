import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import BigCardContainer from "../components/home/BigCardContainer";
import defaultNumber from "../Constants/defaultNumber";
import HeaderTitleContainer from "../components/HeaderTitleContainer";
import Card from "../components/home/Card";

import ProductDetailsSheet from "../components/bottomSheets/ProductDetailsSheet";
import CommentsSheet from "../components/bottomSheets/CommentsSheet";

import { allProducts } from "../data/dummy_data";

const windowWidth = Dimensions.get("window").width;

const HeaderContainer = () => {
  return (
    <View style={{ width: "98%", alignSelf: "center", marginBottom: 30 }}>
      <HeaderTitleContainer headerTitle={"Fresh Mums"} isIcon />
      <BigCardContainer
        imgSrc={require("../assets/home/freshMums.png")}
        title={"Fresh Mums"}
        // titleSize={24}
        titleSize={defaultNumber * 7.5}
        text={"Hamilə xanımların meyvə butiki"}
        // textSize={25}
        textSize={defaultNumber * 3.5}
        bgColor={"#41D050"}
        src={"freshMums"}
      />
    </View>
  );
};

const CampaignScreen = () => {
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

  const renderItem = ({ item, index }) => {
    let isMarginLeft_3_5;
    if (index % Math.round(windowWidth / 180) == 0) {
      isMarginLeft_3_5 = true;
    } else {
      isMarginLeft_3_5 = false;
    }

    return (
      <View
        style={{
          width: windowWidth / Math.round(windowWidth / 180),
          alignItems: "center",
        }}
      >
        <Card
          productId={item.id}
          productName={item.name}
          imgSrc={item.item_img}
          price_per={item.price_per}
          price={item.price}
          price_after_discount={item.price_after_discount}
          description={item.description}
          // isMarginLeft
          productSheetReverseHandler={productSheetReverseHandler}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={allProducts}
        numColumns={Math.round(windowWidth / 180)}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderContainer />}
        ListFooterComponent={
          <View style={{ width: "98%", alignSelf: "center", marginTop: 30 }}>
            <BigCardContainer
              title={"Bakıda ilk orqanik qida butiki"}
              // titleSize={14}
              titleSize={defaultNumber * 5}
              text={
                "Saf, qatqısız, GMO-suz, kənd məhsullarını rahat şəkildə sifariş edə bilərsiniz"
              }
              // textSize={22}
              textSize={defaultNumber * 3.5}
              bgColor={"#FAEAEA"}
              imgSrc={require("../assets/home/strawberry.png")}
              isInCrousel={true}
            />
          </View>
        }
        keyExtractor={(item) => item.id}
      />
      <ProductDetailsSheet
        isShow={isPorductSheetShow}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignSelf: "center",
  },
});

export default CampaignScreen;
