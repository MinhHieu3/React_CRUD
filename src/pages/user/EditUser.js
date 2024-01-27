import {useParams} from "react-router-dom";

export default function EditUser(){
    const {id}=useParams();
    console.log(id)
    return(
        <h1>EditUser</h1>
    )
}