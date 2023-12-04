import { useSelector, useDispatch } from 'react-redux'
import { voteActionCreator , addAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  let anecdotes = useSelector(state => state)
  function sortAnecdote(init,sorted = []){
    if(init.length == 0){
      return sorted
    }
    else {
      let max = {votes : -Infinity};
      for(let each of init){
        if(each.votes >max.votes ){
          max = each;
        }
      } console.log("max", max)
      sorted.push(max);
      init = init.filter(x=>{
        let boo = x.content !== max.content;
        return boo;
      }) 
      console.log("init", init, init.length)
      return sortAnecdote(init,sorted)
    }
  }
  anecdotes = sortAnecdote(anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteActionCreator(id))
    console.log('vote', id)
  }
  function addAnecdoteHandler(e){
    e.preventDefault();
    let content = e.target.anecdote.value;
    e.target.anecdote.value = ""
    dispatch(addAnecdote(content))
    console.log("anecdote", content)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdoteHandler}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App