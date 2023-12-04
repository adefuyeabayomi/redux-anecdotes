import { useSelector, useDispatch } from "react-redux";
import { sortAnecdote } from "../utils";
import { vote } from "../reducers/anecdoteSlice";
import { updateShowNotification , updateNotification} from "../reducers/notificationSlice";

function AnecdoteList (){

    let {anecdotes,filter} = useSelector((state)=> state);
    anecdotes = sortAnecdote(anecdotes);
    const dispatch = useDispatch()
    const voteHandler = (id) => {
      dispatch(vote(id))
      dispatch(updateNotification("You Voted for anecdote id : " + id))
      dispatch(updateShowNotification(true))

    }

    return (
        <div className="anecdoteListContainer">
            {anecdotes.filter(x=>{
                let boo = x.content.indexOf(filter) !== -1;
                return boo;
            }).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteHandler(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList