import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddGoal, setIsAddGoal] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };
  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        return goal.key !== goalId;
      });
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput visible={isAddGoal} onAdd={addGoalHandler} />
      <Button
        title="Add Goal"
        onPress={() => {
          setIsAddGoal(true);
        }}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onPress={removeGoal}
            id={itemData.item.key}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
