import { Link } from "react-router-dom";
import constants from "../../utility/constants";
function UserSideNav(props) {
    return (
        <div id="slide-out" className="sidenav d-flex justify-content-center flex-column">
            <button id="close" className="sidenav-close d-block float-end m-3 position-absolute top-0 end-0 bg-transparent" style={{ outline: "0", border: "none" }}>
                <i className="material-icons small">close</i>
            </button>
            <ul>
                <li>
                    <Link to={'profile'}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to={''}>Home</Link>
                </li>
                <li>
                    <Link to={'notes'}>Notes</Link>
                </li>
                <li>
                    <Link to={'searchAlumni'}>
                      
                        Alumni
                    </Link>
                </li>
                {
                    props.data.userType?.localeCompare(constants.USER_ROLE.ADMIN) === 0 ?
                        <li>
                            <Link to={'news'}>news</Link>
                        </li>
                        : ""
                }
                <li>
                    <Link onClick={() => props.logoutHandler()}>Logout</Link>
                </li>
            </ul>

        </div>

    );
}
export default UserSideNav;