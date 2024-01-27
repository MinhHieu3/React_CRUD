import {useNavigate} from "react-router-dom";

export default function CreatePost(){
    const navigate=useNavigate()
    return(
       <>
           <button onClick={()=>{
               navigate('/')
           }}>Save</button>
       </>)
}