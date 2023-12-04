import { useSelector, useDispatch } from "react-redux";
import { sortAnecdote } from "./utils";
import { voteActionCreator } from './reducers/anecdoteReducer'


function AnecdoteList (){

    let anecdotes = useSelector((state)=> state);
    anecdotes = sortAnecdote(anecdotes);
    const dispatch = useDispatch()
    const vote = (id) => {
      dispatch(voteActionCreator(id))
      console.log('vote', id)
    }

    return (
        <div className="anecdoteListContainer">
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
        </div>
    )
}

export default AnecdoteList