import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";

import { FlatList } from "react-native-gesture-handler";

import SubmitButton from "../../components/SubmitButton";

import AddressCard from "../../components/cart/AddressCard";

import { user_addresses } from "../../data/dummy_data";

const AddressesScreen = () => {
  // const [userAdresses, setUserAdresses] = useState([]);
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => <AddressCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitleContainer isIcon headerTitle={"Adreslərim"} />

      <View style={{ height: "75%", width: "100%" }}>
        <FlatList
          data={user_addresses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <SubmitButton
        title={"Ünvanı yadda saxla"}
        action={() => navigation.navigate("MapScreen")}
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

export default AddressesScreen;
