import {useRef} from 'react'

const ContactForm = (props) => {
    const email = useRef('');
    const message = useRef('');

    const formSubmission = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(message.current.value);


    }
    
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
                     placeholder="Email" ref = { email }/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="exampleFormControlTextarea1" className="mb-2 custom-sub-title">Message</label>
                <textarea className="form-control bg-transparent border-muted py-2 text-light" id="exampleFormControlTextarea1"
                    placeholder="Type Message here.." rows="4" ref = { message }></textarea>
            </div>
            <button onClick= { formSubmission } type="submit" className="btn btn-danger px-3 py-2">Submit</button>
        </form>
    )
}

export default ContactForm;