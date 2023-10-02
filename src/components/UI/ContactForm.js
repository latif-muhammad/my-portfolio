const ContactForm = (props) => {
    return (
        <form>
            <div className="form-group mb-4">
                <label htmlFor="name" className="mb-2 custom-sub-title">Name</label>
                <input type="name" className="form-control bg-transparent border-muted py-2 text-light  " id="contact-name"
                    placeholder="Name" />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="exampleInputEmail1" className="mb-2 custom-sub-title">Email address</label>
                <input type="email" className="form-control bg-transparent border-muted py-2 text-light" id="contact-email"
                    aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="exampleFormControlTextarea1" className="mb-2 custom-sub-title">Message</label>
                <textarea className="form-control bg-transparent border-muted py-2 text-light" id="exampleFormControlTextarea1"
                    placeholder="Type Message here.." rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-danger px-3 py-2">Submit</button>
        </form>
    )
}

export default ContactForm;