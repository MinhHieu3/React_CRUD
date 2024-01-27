import {useParams} from "react-router-dom";

export default function EditPost(){
    const {id}=useParams()
    console.log(id)
    return(
        <h1>Edit</h1>
    )
}