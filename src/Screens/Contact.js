import React from "react";

// import emailjs from 'emailjs-com';

// const initialState = {
// 	name: '',
// 	email: '',
// 	message: '',
// }
const Contact = (props) => {
    // const [{ name, email, message }, setState] = useState(initialState)

    // const handleChange = (e) => {
    // 	const { name, value } = e.target
    // 	setState((prevState) => ({ ...prevState, [name]: value }))
    // }
    // const clearState = () => setState({ ...initialState })

    // const handleSubmit = (e) => {
    // 	e.preventDefault()
    // 	console.log(name, email, message)
    // 	emailjs
    // 		.sendForm(
    // 			'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    // 		)
    // 		.then(
    // 			(result) => {
    // 				console.log(result.text)
    // 				clearState()
    // 			},
    // 			(error) => {
    // 				console.log(error.text)
    // 			}
    // 		)
    // }

    return (
        <div id="contact" className="constainer">
            <div className='text-center'>
                <div className="container">
                    <div className="section-title">
                        <h2>Contact <span>Us</span></h2>
                        <p>Can't find what you are looking for? Get in touch with us below.</p>
                        <section className="dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 animated" data-animate="fadeInLeft">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                                <div className="col-md-12">
                                                    <textarea className="form-control" rows="3" placeholder="Tell Us Everything"></textarea>
                                                </div>
                                                <div className="col-md-12">
                                                    <button className="btn btn-default submit">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <br />
                                    <div className="col-md-4 animated" data-animate="fadeInRight">
                                        <address>
                                            {/* <span><i className="fa fa-map-marker fa-lg"></i>Corner Witkoppen and Main, Fourways Sandton</span> */}
                                            {/* <span><i className="fa fa-phone fa-lg"></i> 068 519 5360</span> */}
                                            {/* <span><i className="fa fa-envelope-o fa-lg"></i> <a href="mailto:info@jaysonline.co.za">info&#64;jaysonline.co.za</a></span> */}
                                        </address>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;