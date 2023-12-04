import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer";

function AnecdoteForm (props){

    let dispatch = useDispatch();
    function addAnecdoteHandler(e){
        e.preventDefault();
        let content = e.target.anecdote.value;
        e.target.anecdote.value = ""
        dispatch(addAnecdote(content))
        console.log("anecdote", content)
      }
    return (
        <div className="anecdote-form-container">
            <h2>create new</h2>
            <form onSubmit={addAnecdoteHandler}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm