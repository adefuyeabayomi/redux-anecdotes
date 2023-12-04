import { useSelector } from "react-redux"
import { updateShowNotification } from "../reducers/notificationSlice"
import { useDispatch } from "react-redux"

const Notification = () => {
  let dispatch = useDispatch()
  let notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 2,
    borderRadius : 8,
    borderColor : "gray"
  }
  if(notification.show){
    setTimeout(()=>{
      dispatch(updateShowNotification(false))
    },5000)
    return ( 
      <div style={style}>
        {notification.message}
      </div>
    )    
  }
  else {
    return <div></div>
  }
}

export default Notification