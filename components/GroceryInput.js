import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GroceryInput = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };
  const addItemHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem("");
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
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Item"
              color="limegreen"
              onPress={addItemHandler}
            />
          </View>
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
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    flex: 1,
    margin: 5,
    borderRadius: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default GroceryInput;
