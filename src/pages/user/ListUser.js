import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListUser() {
    const [list, setList] = useState([]);
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
                            <h3 key={key}>{item.username}, {item.password},<button ><Link to={'/admin/edit-user/'+item.id}> Edit  </Link></button></h3>
                        </>
                    )
                })
            }
        </>
    )
}