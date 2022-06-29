import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import Card from "../../components/home/Card";

import ProductDetailsSheet from "../../components/bottomSheets/ProductDetailsSheet";
import CommentsSheet from "../../components/bottomSheets/CommentsSheet";

import { createFilter } from "react-native-search-filter";

import { allProducts } from "../../data/dummy_data";

import SubCategoryHeaderContainer from "../../components/category/SubCategoryHeaderContainer";

const KEYS_TO_FILTERS = ["name"];

const windowWidth = Dimensions.get("window").width;

const SubCategoryScreen = (props) => {
  const [isPorductSheetShow, setIsPorductSheetShow] = useState(false);
  const [isCommentSheetShow, setIsCommentSheetShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const categoryId = props.route.params ? props.route.params.categoryId : null;

  const categoryProducts = allProducts.filter(
    (e) => e.category_id == categoryId
  );

  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([
    ...categoryProducts,
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  const categoryName = props.route.params
    ? props.route.params.categoryName
    : null;

  const [inputText, setInputText] = useState("");

  const searchUpdated = (txt) => {
    setInputText(() => txt);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(() => true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (categoryProducts) {
      setSelectedCategoryProducts(() =>
        categoryProducts.filter(createFilter(inputText, KEYS_TO_FILTERS))
      );
    }
  }, [inputText]);

  const commentSheetReverseHandler = () => {
    setIsCommentSheetShow((prev) => !prev);
  };

  const productSheetReverseHandler = (productObj) => {
    setSelectedProduct(() => productObj);

    setIsPorductSheetShow((prev) => !prev);
  };

  const renderItem = ({ item, index }) => {
    let isMarginLeft_3_5;
    if (index % Math.round(windowWidth / 180) == 0) {
      isMarginLeft_3_5 = true;
    } else {
      isMarginLeft_3_5 = false;
    }

    return (
      <View style={styles.cardContainer}>
        <Card
          productId={item.id}
          productName={item.name}
          imgSrc={item.item_img}
          price_per={item.price_per}
          price={item.price}
          price_after_discount={item.price_after_discount}
          description={item.description}
          itemMarginLeft={(windowWidth * 3.5) / 100}
          productSheetReverseHandler={productSheetReverseHandler}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        {isLoaded ? (
          <FlatList
            data={selectedCategoryProducts}
            // data={filteredProducts}
            numColumns={Math.round(windowWidth / 180)}
            renderItem={renderItem}
            ListHeaderComponent={
              <SubCategoryHeaderContainer
                categoryName={categoryName}
                searchUpdated={searchUpdated}
              />
            }
            ListFooterComponent={<View style={{ height: 30 }}></View>}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View>
            <SubCategoryHeaderContainer
              categoryName={categoryName}
              searchUpdated={searchUpdated}
            />
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          </View>
        )}
      </View>
      <ProductDetailsSheet
        isShow={isPorductSheetShow}
        commentSheetOpenHandler={commentSheetReverseHandler}
        selectedProduct={selectedProduct}
      />
      <CommentsSheet
        isShow={isCommentSheetShow}
        commentSheetReverseHandler={commentSheetReverseHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: windowWidth / Math.round(windowWidth / 180),
    alignItems: "center",
  },
});

export default SubCategoryScreen;
