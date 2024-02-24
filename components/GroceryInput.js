import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GroceryInput = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter an item for the list"
          style={styles.textInput}
          onChangeText={itemInputHandler}
          value={enteredItem}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add Item"
            onPress={() => props.onAddItem(enteredItem)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: "95%",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignContent: "center",
    margin: 10,
  },
});

export default GroceryInput;
