import { StyleSheet, View, FlatList } from 'react-native'
import { useState } from 'react'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [goals, setGoals] = useState([])

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), text: enteredGoalText },
    ])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => {
            return item.key
          }}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />
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
