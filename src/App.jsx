import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import {getAll} from "../serviceUtils"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAnecdotes } from './reducers/anecdoteSlice'


const App = () => {
  let dispatch = useDispatch();
  useEffect(()=>{
    getAll().then(response=>{
      dispatch(setAnecdotes(response.data))
    })
  })
  return (
    <div>
      <h2>Filter</h2>
      <AnecdoteFilter />
      <h2>Notification</h2>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App