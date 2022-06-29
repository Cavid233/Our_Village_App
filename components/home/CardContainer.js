import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "./Card";

const CardContainer = (props) => {
  const renderItem = ({ item }) => (
    <Card
      productId={item.id}
      productName={item.name}
      imgSrc={item.item_img}
      price_per={item.price_per}
      price={item.price}
      price_after_discount={item.price_after_discount}
      description={item.description}
      productSheetReverseHandler={props.productSheetReverseHandler}
      isMarginLeft
    />
  );

  return (
    <View>
      <View style={{ height: 50, justifyContent: "center" }}>
        <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 18 }}>
          {props.title}
        </Text>
      </View>
      <FlatList
        data={props.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CardContainer;
