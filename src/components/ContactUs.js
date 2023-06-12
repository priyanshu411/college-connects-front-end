function ContactUs() {
    return (
        <>
            <section id="contact mt-5">
                <div className="container">
                    <h4 className="center-align txt-col1 heading">Contact Us</h4>
                    <div className="row">
                        <form
                            className="col s12 m8 offset-m2"
                            name="portfolio-contact"
                            onSubmit={(event)=>event.preventDefault()}
                        >

                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_outline</i>
                                    <input
                                        id="name"
                                        type="text"
                                        className="validate"
                                        name="_name"
                                        required
                                       
                                    />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mail_outline</i>
                                    <input
                                        id="email"
                                        type="email"
                                        className="validate"
                                        name="email"
                                        
                                        required
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">chat_bubble_outline</i>
                                    <textarea
                                        id="message"
                                        className="mt-textarea"
                                        name="message"
                                        
                                        required

                                    />
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div className="center-align">
                                    <button
                                        className="btn waves-effect waves-light btn-2"
                                        type="submit"
                                    >
                                        Submit
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ContactUs;