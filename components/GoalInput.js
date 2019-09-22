import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Modal
} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function handleGoalText(enteredText) {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Course Goal' 
          style={styles.input} 
          onChangeText={handleGoalText} 
          value={enteredGoal} 
        />
        <View style={styles.addCancelBtns}>
          <View style={styles.buttonContainer}>
            <Button title='Add' onPress={addGoalHandler}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Go back' color='red' onPress={props.cancelGoal}/>
          </View>
        </View>
      </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginBottom: 12
  },
  addCancelBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: '60%'
  },
  buttonContainer: {
    width: '40%'
  }
})

export default GoalInput

