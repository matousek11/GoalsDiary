import { StyleSheet, View, FlatList, Button } from 'react-native'
import { useState } from 'react'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  const toggleAddGoalHandler = () => {
    setModalIsVisible((prev) => !prev)
  }

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), text: enteredGoalText },
    ])
  }

  const deleteGoalHandler = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.key !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={toggleAddGoalHandler}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        onCloseModal={toggleAddGoalHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => {
            return item.key
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
})
