import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
function Root() {
    return (
    <div className="p-6">
        <NavBar/>
        <Outlet/>
    </div>);
}

export default Root;
