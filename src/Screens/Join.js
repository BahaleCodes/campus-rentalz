import React, { useState } from "react";
import ModernDatepicker from 'react-modern-datepicker';

import Spinner from '../Components/Spinner/Spinner';

const Join = () => {
    const [startDate, setStartDate] = useState('01-01-1990');
    const initialState = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        gender: "",
        study_year: "",
        password: "",
        con_password: "o",
        isSubmitting: false,
        done: false,
        errorMessage: null,
        error: false
    }

    const [data, setData] = useState(initialState);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        console.log(startDate);
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        fetch("http://localhost:8000/api/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: data.firstName,
                last_name: data.lastName,
                cell_number: data.phone,
                email: data.email,
                dob: startDate,
                gender: data.gender,
                study_year: data.study_year,
                password: data.con_password
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .catch(error => {
                setData({
                    ...data,
                    isSubmitting: false,
                    error: true,
                    errorMessage: `Error: ${error.status} ${error.statusText}`
                });
            });
        setData({
            ...data,
            done: true
        })
    };
    const signup_form = (
        <form name='sentApplication' onSubmit={handleFormSubmit} validate>
            <input
                name='firstName'
                value={data.firstName}
                type="text"
                placeholder="* First Name"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            <input
                name='lastName'
                value={data.lastName}
                type="text"
                placeholder="* Last Name"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>

            <input
                name='phone'
                value={data.phone}
                type="number"
                placeholder="* Phone Number"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            <input
                name='email'
                value={data.email}
                type="email"
                placeholder="* Your Email"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            <ModernDatepicker
                className='form-control'
                date={startDate}
                format={"DD-MM-YYYY"}
                showBorder
                onChange={date => setStartDate(date)}
                placeholder={'Select your date of birth'}
            />
            <p className='help-block text-danger'></p>
            <select className="form-control" name="gender" 
                value={data.gender} required
                onChange={handleInputChange}>
                <option value="none">Your Choice</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="LGBTQIA+">LGBTQIA+</option>
                <option value="No Response">Rather Not Say</option>
            </select>
            <p className='help-block text-danger'></p>
            <input
                name='study_year'
                value={data.study_year}
                type="text"
                placeholder="* Your Year of Study"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            <input
                name='password'
                type="password"
                placeholder="* Your Password"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            <input
                name='con_password'
                type="password"
                placeholder="* Confirm Your Password"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            {
                data.password === data.con_password
                    ? <button className='btn-custom'>Submit</button>
                    : ""
            }
        </form>
    )
    const handleLogin = (e) => {
        e.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        fetch("http://localhost:8000/api/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.con_password
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .catch(error => {
                setData({
                    ...data,
                    isSubmitting: false,
                    error: true,
                    errorMessage: `Error: ${error.status} - ${error.statusText}`
                });
            });
        setData({
            ...data,
            done: true
        })

    }
    const loginDiv = (
        <form name='sentApplication' onSubmit={handleLogin} validate>
            <h2>Log IN</h2>
            <p className='help-block text-danger'></p>
            <input
                name='email'
                type="email"
                value={data.email}
                placeholder="* Your Email"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            <input
                name='con_password'
                type="password"
                placeholder="* Confirm Your Password"
                className="form-control"
                required
                onChange={handleInputChange}
            />
            <p className='help-block text-danger'></p>
            {/* <button
                className='btn-custom'
                onClick={() => {
                    setData({
                        ...data,
                        error: false,
                        isSubmitting: false,
                        done: false
                    })
                }}
            >Register</button> */}
            <br />
            <br />
            <button className='btn-custom'>Log In</button>
        </form>
    )
    const loadingDiv = (
        <div>
            <Spinner />
        </div>
    );
    const doneDiv = (
        <div>
            <h2>Form Submitted Successfully</h2>
        </div>
    );
    const errorDiv = (
        <div>
            <h2>{data.errorMessage}</h2>
            <h3>Please make sure you used a unique email.</h3>
            <h3>If you've already registered, please sing in.</h3>
            <br />
            <button
                className='btn-custom'
                onClick={() => {
                    setData({
                        ...data,
                        error: false,
                        isSubmitting: false,
                        done: false
                    })
                }}
            >Try Again</button>
            <br />
            {/* <br />
            <button
                className='btn-custom'
                onClick={() => {
                    setData({
                        ...data,
                        error: false,
                        isSubmitting: false,
                        done: false,
                        login: true
                    })
                }}
            >Log in</button> */}
        </div>
    );

    return (
        <div id='join-us' className="text-center">
            <div className="container">
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>Join the <span>Faminly</span></h2>
                    <h5>Are you a student looking for a stable and safe accommodation?</h5>
                    <h3>Send us your details and we will help you find you new home away from home.</h3>
                    <h3>Create a profile on our system and with your aid, well find you a place that fully matches your personality.</h3>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {' '}
                        <img src="img/Building1.jpeg" className="img-responsive" alt="Candidates" />
                        {' '}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {/* <h4>Anther Inc. Consultants is more than willing to help you find the career you want, in a place where your contributions will be valued, your accomplishments appreciated, and your experience will forever be respected. Take the first step on the path to your success by uploading your resume along with a brief summary of your skills and we will take care of the rest!</h4> */}
                        {!data.error && !data.isSubmitting && !data.done && !data.login && signup_form}
                        {data.isSubmitting && !data.error && !data.done && loadingDiv}
                        {data.done && !data.error && !data.isSubmitting && doneDiv}
                        {data.error && !data.done && !data.isSubmitting && errorDiv}
                        {/* {!data.error && !data.done && !data.isSubmitting && data.login && loginDiv} */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Join;