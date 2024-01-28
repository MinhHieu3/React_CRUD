import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditUser(){
    const {id}=useParams();
    const [user,setUser]=useState();
    const navigate=useNavigate()

    useEffect(() => {
        if (id){ axios.get(`http://localhost:8080/api/users/${id}`).then(res => {
           setUser(res.data)

            console.log(res.data)
        })}
    }, [id])
    return(
        <>
            <Formik enableReinitialize={true} initialValues={
                {
                    username:user?.username ,
                    password: user?.password,
                }
            } onSubmit={(values)=>{
                axios.put(`http://localhost:8080/api/users/`+id,values).then(()=>{
                    alert("Edit Done")
                    navigate('/admin')
                    console.log(values)
                })
            }}>
                <Form >
                    <Field name='username'>
                        {({ field }) => (
                            <div>
                                <input type="text" {...field} />
                            </div>
                        )}
                    </Field>
                    <Field name={'password'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}