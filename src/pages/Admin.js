import {Link, Outlet} from "react-router-dom";
import Footer from "../components/Footer";

export default function Admin() {
    return (
        <>

            <Link to={'/admin'}>List User</Link> |
            <Link to={'/admin/create-user'}>Create User</Link> |
            <Link to={'/admin/edit-user/:id'}>Edit user</Link> |
            <hr/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}