import { Link } from "react-router-dom";
function HomeSideNav() {
    return (
        <div id="slide-out" className="sidenav d-flex justify-content-center flex-column">
            <button id="close" className="sidenav-close d-block float-end m-3 position-absolute top-0 end-0 bg-transparent" style={{ outline: "0", border: "none" }}>
                <i className="material-icons small">close</i>
            </button>
            <ul>
                <li>
                    <Link to={''}><i className="material-icons left">home</i>Home</Link>
                </li>
                <li>
                    <Link to={''}><i className="material-icons left">featured_play_list</i>Features</Link>
                </li>
                <li>
                    <Link to={''}><i className="material-icons left">alternate_email</i>Contact Us</Link>
                </li>
                <li>
                    <Link to={'signUp'}><i className="material-icons left">login</i>Sign Up</Link>
                </li>
                <li>
                    <Link to={'login'}><i className="material-icons left">login</i>login</Link>
                </li>

            </ul>

        </div>

    );
}
export default HomeSideNav;