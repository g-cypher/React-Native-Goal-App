import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  FlatList, 
  ScrollView 
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function handleGoalText(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen}>
      
      <FlatList 
        keyExtractor={(item, index) => item.key }
        data={courseGoals} 
        renderItem={itemData => ( <GoalItem title={itemData.item.value}/>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
