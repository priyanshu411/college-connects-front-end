import HomeSideNav from "./HomeSideNav";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function HomeNavbar() {

    useEffect(() => {
        const M = window.M;
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, { inDuration: 350, outDuration: 350 });
    }, [])


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
                            <Link to={''}><i className="material-icons left">home</i>Home</Link>
                        </li>
                        <li>
                            <Link to={''}><i className="material-icons left">featured_play_list</i>Features</Link>
                        </li>
                        <li>
                            <Link to={'signUp'}><i className="material-icons left">login</i>SignIn</Link>
                        </li>
                        <li>
                            <Link to={'login'}><i className="material-icons left">login</i>login</Link>
                        </li>
                        <li>
                            <Link to={'contact'}><i className="material-icons left">alternate_email</i>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <HomeSideNav />
        </>
    );
}

export default HomeNavbar;
