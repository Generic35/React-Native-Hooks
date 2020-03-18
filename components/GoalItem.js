import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10
  }
});

export default GoalItem;