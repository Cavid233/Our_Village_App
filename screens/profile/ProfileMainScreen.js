import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";

import HeaderTitleContainer from "../../components/HeaderTitleContainer";
import { useNavigation } from "@react-navigation/native";

import AlertModal from "../../components/modal/AlertModal";

import BigCardContainer from "../../components/profile/BigCardContainer";

import SmallCardContainer from "../../components/profile/SmallCardContainer";

const ProfileMainScreen = () => {
  const navigation = useNavigation();

  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);

  const alertModalHandler = () => {
    setIsAlertModalVisible((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        isAlertModalVisible={isAlertModalVisible}
        alertModalHandler={alertModalHandler}
      />
      <HeaderTitleContainer headerTitle={"Profil"} isIcon />
      <BigCardContainer
        userName={"John Doe"}
        userId={"42672"}
        action={() =>
          navigation.navigate("UserProfileScreen", {
            userInfo: "John Doe",
          })
        }
      />
      <SmallCardContainer
        text={"Sifarişlərim"}
        action={() => navigation.navigate("ProfileOredersScreens")}
      />
      <SmallCardContainer
        text={"Şifrəni Yenilə"}
        action={() => navigation.navigate("ResetPasswordScreen")}
      />
      <SmallCardContainer text={"Çıxış"} action={() => alertModalHandler()} />
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

export default ProfileMainScreen;
