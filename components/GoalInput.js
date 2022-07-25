import { React, useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({ addGoalHandler }) => {
  const [goalInput, setGoalInput] = useState('')

  const goalInputHandler = (text) => {
    setGoalInput(text)
  }

  const onAddGoalHandler = () => {
    addGoalHandler(goalInput)
    goalInputHandler('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={goalInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={onAddGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})

export default GoalInput
