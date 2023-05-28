import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserSideNav from "./UserSideNav";
import constants from "../../utility/constants";
import { logout } from "../../utility/CommonUtility";
function UserNavBar(props) {
    useEffect(() => {
        const M = window.M;
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, { inDuration: 350, outDuration: 350 });
    }, [])

    const [navigate, setNavigate] = useState(false);

    const logoutHandler = () => {
        logout();
        setNavigate(true);
    }
    if (navigate) {
        return <Navigate to="/login" replace={true} />;
    }
    return (
        <>
            <nav className="px-5 bg-1">
                <a href="!#" data-target="slide-out" className="sidenav-trigger float-end" rel="noreferrer">
                    <i className="material-icons">menu</i>
                </a>
                <div className="nav-wrapper">
                    <Link className="fs-3" to={'/'}><i className="material-icons left">rocket_launch</i><span className="hide-on-small-only">College Connects</span></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to={''}>
                                <i className="material-icons left">home</i>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'notes'}>
                                <i className="material-icons left">notes</i>
                                Notes
                            </Link>
                        </li>
                        {
                            props.data.userType?.localeCompare(constants.USER_ROLE.ADMIN) === 0 ?
                                <li>
                                    <Link to={'news'}>
                                        <i className="material-icons left">article</i>
                                        News
                                    </Link>
                                </li>
                                : ""
                        }
                        <li>
                            <Link to={'profile'}>
                                <i className="material-icons left">person</i>
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link onClick={logoutHandler}>
                                <i className="material-icons left">logout</i>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <UserSideNav data={props.data} logoutHandler={logoutHandler} />
        </>
    );
}
export default UserNavBar;