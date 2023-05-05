import Main from "./Main";
import { Outlet } from "react-router-dom";
function Student() {
    return (
        <>
            <Main />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
export default Student;