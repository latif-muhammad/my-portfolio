import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = (props) => {
    const [show, setShow] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const name = useRef('');
    const email = useRef('');
    const message = useRef('');
    const config = require('../../utilities/config.js');

    const serviceID = config.smtp.serviceID;
    const templateId = config.smtp.templateId;
    const publicKey = '7cWJ8cHPrNz_27aNZ';

    //USE YOUR KEYS HERE
    //CREATE ACCOUNT AT EMAILJS


    const formSubmission = (event) => {
        let data = {
            from_name: name.current.value,
            message: message.current.value,
            email: email.current.value,
        }
        event.preventDefault();
        setShow(true)

        emailjs.send(serviceID, templateId, data, publicKey).then(function (response) {
            if (response.status === 200) {
                setShow(false);
                setSuccessMsg("sent");
                email.current.value = "";
                name.current.value = "";
                message.current.value = "";
            }
        }, function (err) {
            setShow(false);
            setSuccessMsg("failed");
        });
    }

    return (
        <form>
            <div className="form-group mb-4">
                <label className="mb-2 custom-sub-title">Name</label>
                <input type="name" className="form-control bg-transparent border-muted py-2 text-light" id="contact-name"
                    placeholder="Name" ref={name} />
            </div>
            <div className="form-group mb-4">
                <label className="mb-2 custom-sub-title">Email address</label>
                <input type="email" className="form-control bg-transparent border-muted py-2 text-light" id="contact-email"
                    placeholder="Email" ref={email} />
            </div>
            <div className="form-group mb-4">
                <label className="mb-2 custom-sub-title">Message</label>
                <textarea className="form-control bg-transparent border-muted py-2 text-light" id="exampleFormControlTextarea1"
                    placeholder="Type Message here.." rows="4" ref={message}></textarea>
            </div>
            {
                show ?

                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only text-muted"></span>

                    </div>
                    :

                    <button onClick={formSubmission} type="submit" className="me-2 btn btn-danger px-3 py-2">Submit</button>
            }
            <span className={`badge ${successMsg === 'sent' ? "text-bg-success" : "text-bg-danger"} p-1 ${(successMsg !== '') ? "" : "fade"}`}>{successMsg}</span>

        </form>
    )
}

export default ContactForm;