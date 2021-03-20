import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const notify = () => {
        toast("Your Message Send!");
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form className="from-group" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Enter Email</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Send Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  name='textMessage'></textarea>
                            </div>
                            <button className="btn btn-primary" onClick={notify}>Submit</button>
                            <ToastContainer
                                position="top-center"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
