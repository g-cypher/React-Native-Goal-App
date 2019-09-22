import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Course Goal' 
        style={styles.input} 
        onChangeText={handleGoalText} 
        value={enteredGoal} 
      />
      <Button title='Add' onPress={addGoalHandler}/>
    </View>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  }
})

export default GoalInput

