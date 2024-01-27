import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateUser(){
    const navigate=useNavigate()
    return(
       <>
           <Formik initialValues={
               {
                   username: '',
                   password:''
               }
           } onSubmit={(values)=>{
               axios.post('http://localhost:8080/api/users',values).then(()=>{
                   alert("done")
                   navigate("/admin")
               })
           }}>
               <Form>
                   <Field name={'username'}></Field>
                   <Field name={'password'}></Field>
                   <button>Save</button>
               </Form>
           </Formik>
       </>
    )
}