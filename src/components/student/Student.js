import { Outlet } from "react-router-dom";
import UserNavBar from "../navbar/UserNavbar";
function Student(props) {
    return (
        <>
            <UserNavBar data={props.data}/>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
export default Student;