import { useDispatch } from "react-redux"
import { add } from "../reducers/anecdoteSlice";
import { updateNotification, updateShowNotification } from "../reducers/notificationSlice";
import { saveAnecdote } from "../../serviceUtils";

function AnecdoteForm (){

    let dispatch = useDispatch();
    function addAnecdoteHandler(e){
        e.preventDefault();
        let content = e.target.anecdote.value;
        e.target.anecdote.value = "";
        saveAnecdote({content,votes : 0}).then((res)=>{
            console.log("res.data", res.data)
            dispatch(add(res.data))
            dispatch(updateNotification("New Anecdoted Added : " + res.data.content))
            dispatch(updateShowNotification(true))
            console.log("anecdote", content)
        })
        
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