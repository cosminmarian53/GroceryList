import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GroceryListItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    width: 300,
  },
});

export default GroceryListItem;
