import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ListPost from "./pages/post/ListPost";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import ListUser from "./pages/user/ListUser";
import CreateUser from "./pages/user/CreateUser";
import EditUser from "./pages/user/EditUser";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/'} element={<ListPost/>}></Route>
                    <Route path={'/create-post'} element={<CreatePost/>}></Route>
                    <Route path={'/edit-post/:id'} element={<EditPost/>}></Route>
                </Route>
                <Route path={'/admin'} element={<Admin/>}>
                    <Route path={'/admin'} element={<ListUser/>}></Route>
                    <Route path={'/admin/create-user'} element={<CreateUser/>}></Route>
                    <Route path={'/admin/edit-user/:id'} element={<EditUser/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
