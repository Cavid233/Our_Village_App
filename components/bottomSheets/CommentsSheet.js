import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import UserComment from "./UserComment";
import defaultNumber from "../../Constants/defaultNumber";

import { useSelector } from "react-redux";

import { allProducts } from "../../data/dummy_data";

const enteredCommentsColors = [
  "#65B804",
  "#5A57ED",
  "#000000",
  "#31A39C",
  "#863CFF",
];

const EnteredComments = (props) => {
  const newDateArray = props.item.created_at.slice(0, 10).split("-");

  return (
    <View style={styles.enteredCommentsContainer}>
      <View style={styles.profilePictureContainer}>
        <View
          style={{
            ...styles.subProfilePictureContainer,
            backgroundColor: enteredCommentsColors[props.index % 5],
          }}
        >
          <Text style={{ color: "white" }}>
            {props.item && props.item.name.charAt(0)}
          </Text>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.userNameContainer}>
          <Text style={{ fontWeight: "bold" }}>
            {props.item && props.item.name}
          </Text>
        </View>
        <View>
          <Text>{props.item.text}</Text>
        </View>
        <View style={styles.commentDateContainer}>
          <Text style={{ color: "#65B804" }}>
            {newDateArray[2] + "." + newDateArray[1] + "." + newDateArray[0]}
          </Text>
        </View>
      </View>
    </View>
  );
};

const CommentsSheet = (props) => {
  const selectedProductİd = useSelector(
    (state) => state.modal.selectedProductİd
  );

  const [feedbacks, setFeedbacks] = useState([]);

  const enterCommentHandler = (data) => {
    setFeedbacks((prev) => [
      ...prev,
      {
        ...data,
      },
    ]);
  };
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["85%"], []);
  const handleDismissPress = () => bottomSheetRef.current.close();

  // callbacks
  const handleSheetChanges = useCallback((index) => {}, []);

  const renderItem = useCallback(
    ({ item, index }) => <EnteredComments item={item} index={index} />,
    []
  );

  useEffect(() => {
    if (selectedProductİd) {
      setFeedbacks(
        () => allProducts.find((e) => e.id == selectedProductİd).feedback
      );
    }
  }, [selectedProductİd]);

  useEffect(() => {
    bottomSheetRef.current.expand();
  }, [props.isShow]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      style={{
        borderTopRightRadius: defaultNumber * 5,
        borderTopLeftRadius: defaultNumber * 5,
        overflow: "hidden",
      }}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
    >
      <View style={styles.container}>
        <BottomSheetFlatList
          // data={feedbacks}
          data={feedbacks ? feedbacks.reverse() : []}
          keyExtractor={() => Math.random().toString()}
          renderItem={renderItem}
          ListHeaderComponent={
            <UserComment
              commentSheetReverseHandler={props.commentSheetReverseHandler}
              enterCommentHandler={enterCommentHandler}
              handleDismissPress={handleDismissPress}
            />
          }
          ListFooterComponent={<View style={{ height: 20 }}></View>}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%", width: "95%", alignSelf: "center" },
  enteredCommentsContainer: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    minHeight: 110,
    padding: 10,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 10,
  },
  profilePictureContainer: {
    height: "100%",
    width: "20%",
    alignItems: "center",
  },
  commentContainer: { width: "80%" },
  subProfilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  userNameContainer: { height: 35, justifyContent: "center" },
  commentDateContainer: {
    height: 35,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default CommentsSheet;
