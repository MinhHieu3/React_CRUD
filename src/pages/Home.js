import Navbar from "../components/Navbar";
import {Link, Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return(
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List Post</Link> |
            <Link to={'/create-post'}>Create Post</Link> |
            <Link to={'/edit-post'}>Edit Post</Link> |
            <hr/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}