import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "./utils/animations";

import defaultNumber from "../../Constants/defaultNumber";
const SLIDER_WIDTH = (Dimensions.get("window").width * 93) / 100;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2) / 4);

const windowHeight = Dimensions.get("window").height;

const DATA = [];
for (let i = 0; i < 3; i++) {
  DATA.push(i);
}

export default class CrouselContainer extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View style={styles.imgContainer}>
        <View style={styles.subImgContainer}>
          <Image
            resizeMode={"stretch"}
            style={{ width: "100%", height: "100%" }}
            source={item.item_img}
          />
        </View>
      </View>
    );
  }

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={this.props.data ? this.props.data.length : 0}
        activeDotIndex={this.state.index}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "black",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: windowHeight / 9,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: defaultNumber * 5,
              fontFamily: "Poppins_500Medium",
            }}
          >
            Kampaniyalar
          </Text>
        </View>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={this.props.data ? this.props.data : []}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
  },
  imgContainer: {
    width: "100%",

    height: windowHeight / 4,
    alignItems: "center",
  },
  subImgContainer: {
    height: "100%",
    width: "95%",
    overflow: "hidden",
    borderRadius: defaultNumber * 5,
  },
});
