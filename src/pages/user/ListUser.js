import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListUser() {
    const [list, setList] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/api/users').then(res => {
            setList(res.data)
        })
    }, [])
    return (
        <>
            {
                list.map((item, key) => {
                    return (
                        <>
                            <h3 key={key}>{item.username}, {item.password},<button ><Link to={'/admin/edit-user/'+item.id}> Edit  </Link></button>,
                                <button onClick={()=>{
                                    axios.delete(`http://localhost:8080/api/users/${item.id}`).then(()=>{
                                        alert('Del Done')
                                        navigate('/admin')
                                    })
                                }}>Del</button></h3>
                        </>
                    )
                })
            }
        </>
    )
}