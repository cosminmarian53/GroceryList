import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GroceryListItem from "./components/GroceryListItem";
import GroceryInput from "./components/GroceryInput";
export default function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addItemHandler = (itemTitle) => {
    setGroceryList((currentList) => [
      ...currentList,
      { id: Math.random().toString(), value: itemTitle },
    ]);
    setIsAddMode(false);
  };
  const removeItemHandler = (itemId) => {
    setGroceryList((currentList) => {
      return currentList.filter((item) => item.id !== itemId);
    });
  };
  const cancelItemAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grocery List</Text>
      <Button
        title="Add New Item"
        color="limegreen"
        onPress={() => setIsAddMode(true)}
      />
      <GroceryInput
        visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={cancelItemAdditionHandler}
      />
      <StatusBar style="auto" />
      <FlatList
        data={groceryList}
        renderItem={(itemData) => (
          <GroceryListItem id={itemData.item.id} onDelete={removeItemHandler}>
            {itemData.item.value}
          </GroceryListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  header: {
    fontSize: 50,
    color: "black",
    padding: 10,
    fontWeight: "bold",
  },
});
