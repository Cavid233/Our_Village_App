import React, { useState } from "react";

import {
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";

import OrderCard from "../../components/profile/OrderCard";

import { order_cards } from "../../data/dummy_data";

const renderItem = ({ item }) => (
  <OrderCard
    orderId={item.id}
    total={item.total}
    count={item.count}
    date={item.date}
  />
);

const ProfileOredersScreens = () => {
  const [userOrders, setUserOrders] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitleContainer headerTitle={"Sifarişlərim"} isIcon />

      <FlatList
        data={order_cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default ProfileOredersScreens;
