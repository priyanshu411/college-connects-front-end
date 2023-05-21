import { useEffect,useState } from "react";
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
    
  const logoutHandler=()=>{
    logout();
    setNavigate(true);
  }
  if(navigate){
    return <Navigate to="/login" replace={true} />;
  }
    return (
        <>
            <nav className="px-5 bg-1">
                <a href="!#" data-target="slide-out" className="sidenav-trigger float-end" rel="noreferrer">
                    <i className="material-icons">menu</i>
                </a>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to={'/'}>{props.data.userName}</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to={''}>Home</Link>
                        </li>
                        <li>
                            <Link to={'notes'}>Notes</Link>
                        </li>
                        {
                            props.data.userType?.localeCompare(constants.USER_ROLE.ADMIN) === 0 ?
                                <li>
                                    <Link to={'news'}>news</Link>
                                </li>
                                : ""
                        }
                        <li>
                            <Link onClick={logoutHandler}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <UserSideNav data={props.data} logoutHandler={logoutHandler} />
        </>
    );
}
export default UserNavBar;