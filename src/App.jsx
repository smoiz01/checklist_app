import Header from './components/Header'
import Tabs from './components/Tabs'
import Checklist from './components/Checklist'
import CheckListInput from './components/CheckListInput'
import { useState } from 'react'

function App() {
  // const todos = [
  //   {input: 'Hello! Add your first task', completed: true},
  //   {input: 'Buy groceries', completed: false},
  //   {input: 'Learn React', completed: false},
  //   {input: 'Build a project', completed: false},
  //   {input: 'Apply to jobs', completed: false},
  //   {input: 'Prepare for interview', completed: false},
  //   {input: 'Go to the gym', completed: true},
  //   {input: 'Read a book', completed: false},
  // ]
  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first task', completed: true},
  ])

  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTodo(input) {
    setTodos([...todos, {input: input, completed: false}])
  }


  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <Checklist todos={todos} />
      <CheckListInput handleAddTodo={handleAddTodo} />
    </>
  )


}

export default App
