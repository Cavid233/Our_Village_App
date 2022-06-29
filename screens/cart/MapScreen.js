import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableNativeFeedback,
  Alert,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapSheet from "../../components/bottomSheets/MapSheet";
import { MaterialIcons } from "@expo/vector-icons";
import defaultNumber from "../../Constants/defaultNumber";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as Location from "expo-location";

import { showMessage } from "react-native-flash-message";

const myApiKey = "your_google_map_api_key";

const MapScreen = (props) => {
  const initialLocation = null;
  const readonly = null;
  const navigation = useNavigation();
  const googleMap = useRef(null);

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [street, setStreet] = useState("");

  const [city, setCity] = useState();

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 40.4,
    longitude: initialLocation ? initialLocation.lng : 49.8,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
    let myLat = event.nativeEvent.coordinate.latitude;
    let myLon = event.nativeEvent.coordinate.longitude;


    // Make sure you added google_map_key

    // fetch(
    //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    //     myLat +
    //     "," +
    //     myLon +
    //     "&key=" +
    //     myApiKey
    // )
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     const myAdress = responseJson.results.find(
    //       (e) => e["types"][0] == "route"
    //     );
    //     setStreet(() => myAdress["address_components"][0]["long_name"]);
    //   });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }

    props.navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    props.navigation.setParams({ saveLocation: savePickedLocationHandler });
  }, [savePickedLocationHandler]);

  const [myLocation, setMyLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const myLocationHandler = async () => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    setMyLocation(location);

    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    let myLat = location.coords.latitude;
    let myLon = location.coords.longitude;


    // Make sure you added google_map_key

    // fetch(
    //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    //     myLat +
    //     "," +
    //     myLon +
    //     "&key=" +
    //     myApiKey
    // )
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     const myAdress = responseJson.results.find(
    //       (e) => e["types"][0] == "route"
    //     );

    //     setStreet(() => myAdress["address_components"][0]["long_name"]);
    //   });

    googleMap.current.animateToCoordinate(
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      1000
    );
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

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

  const submitHandler = () => {
    if (selectedLocation) {
      if (city && city.trim()) {
        if (street.trim()) {
          navigation.navigate("AddAdressScreen", {
            selectedLocation,
            street,
            city,
          });
        } else {
          flashMessageHandler("Mesaj:", "Küçə daxil edin.", "danger");
        }
      } else {
        flashMessageHandler("Mesaj:", "Şəhər daxil edin.", "danger");
      }
    } else {
      flashMessageHandler("Mesaj:", "Adresi xəritədən seçin.", "danger");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={googleMap}
        style={styles.map}
        // region={mapRegion} // bu olanda xeritede hansisa yere basanda yene qaydirdi ilkin yere
        initialRegion={mapRegion} // bu sadece baslangic bir deyer verir.
        onPress={selectLocationHandler}
        showsUserLocation={true}
      >
        {markerCoordinates && (
          <Marker
            title="Picked Location"
            coordinate={markerCoordinates}
          ></Marker>

          // && paxildi deyir men true olsam ozum, false olsam sagdaki cixsin
          // || ureyi aciqdi deyir men true olsam sagdaki, false olsam ozum cixaram
        )}
      </MapView>
      <View style={styles.iconView}>
        <View style={{ height: "80%", width: "100%" }}>
          <View
            style={{
              ...styles.iconContainer,
              height: (defaultNumber * 40) / 4,
              width: (defaultNumber * 40) / 4,
            }}
          >
            <TouchableNativeFeedback onPress={() => navigation.goBack()}>
              <View style={styles.subIconContainer}>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  // size={24}
                  size={(defaultNumber * 27) / 4}
                  color="black"
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.gpsIconContainer}>
          <View
            style={{
              ...styles.iconContainer,

              height: (defaultNumber * 50) / 4,
              width: (defaultNumber * 50) / 4,
            }}
          >
            <TouchableNativeFeedback onPress={myLocationHandler}>
              <View style={styles.subIconContainer}>
                <MaterialCommunityIcons
                  name="crosshairs-gps"
                  // size={24}
                  size={(defaultNumber * 25) / 4}
                  color="black"
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
      <MapSheet
        street={street}
        submitHandler={submitHandler}
        cityHandler={(txt) => setCity(txt)}
        streetHandler={(txt) => setStreet(txt)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  map: {
    flex: 1,
  },
  iconView: {
    position: "absolute",
    width: "95%",
    height: "55%",
    alignSelf: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
  },
  iconContainer: {
    borderRadius: (defaultNumber * 30) / 4,
    overflow: "hidden",
    backgroundColor: "white",
  },
  subIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gpsIconContainer: {
    height: "5%",
    width: "98%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default MapScreen;
