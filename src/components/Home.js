import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <main className="main container py-5">
                <div className="row">
                    <div>
                        <div className="col s8 offset-s2 hide-on-med-and-up show-on-small">
                            <img
                                src={require("../images/main-bg.png")}
                                className="responsive-img"
                                alt="study"
                                draggable={false}
                            />
                        </div>
                        <div className="col s12 m6 xl7 pt-md-5 mt-md-3">
                            <h4 className="txt-col2">Stay informed daily</h4>
                            <h4 className="txt-col2">News, Notes, Subjects, Alumni</h4>
                            <h5 className="txt-col1">Streamline your college experience with organized communication and easy access to information...</h5>
                            <div className="mt-4">
                            <Link to="/login" className="waves-effect waves-light btn btn-1"><i className="material-icons left">login</i>Login</Link>

                            <Link to="student/notes" className="waves-effect waves-light btn btn-2"><i className="material-icons left">insert_drive_file</i>Notes</Link>

                            </div>
                        </div>
                        <div className="col m5 xl4 hide-on-small-only animation">
                            <img
                                src={require("../images/main-bg.png")}
                                className="responsive-img ms-5"
                                alt="boy with laptop"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <h3 className="txt-col1 center-align">Features</h3>
        </>
    );
}
export default Home;