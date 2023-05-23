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
                    <Link className="fs-3" to={'/'}>College connects</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to={'signUp'}><i className="material-icons left">login</i>SignIn</Link>
                        </li>
                        <li>
                            <Link to={'login'}><i className="material-icons left">login</i>login</Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            <HomeSideNav />
        </>
    );
}

export default HomeNavbar;
