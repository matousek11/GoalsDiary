import { React, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

const GoalInput = ({ addGoalHandler, onCloseModal, visible }) => {
  const [goalInput, setGoalInput] = useState('')

  const goalInputHandler = (text) => {
    setGoalInput(text)
  }

  const onAddGoalHandler = () => {
    addGoalHandler(goalInput)
    goalInputHandler('')
    onCloseModal()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          value={goalInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={onAddGoalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color="#5e0acc" />
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
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    color: '#120438',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})

export default GoalInput
