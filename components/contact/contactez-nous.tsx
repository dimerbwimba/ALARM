"use client";

import { useState } from "react";
import Image from 'next/image'

const ContactezNous = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [message,setMessage] = useState("")

    return (
        <div className="contact-page-area overflow-hidden  rpt-100">
            <div className="container">
                <div className="row gap-60 align-items-center">
                    <div className="col-lg-6">
                        <div className="faq-three-left-part mb-20 rel rmb-75">
                            <Image 
                                src="assets/img/about/contactez-nous.png" 
                                alt="Man" 
                                width={500} 
                                height={300} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="experiences-years">
                                <span className="experiences-years__number">25</span>
                                <span className="experiences-years__text">Ans d&apos;Experiences</span>
                            </div>
                            <div className="counter-item counter-text-wrap">
                                <div className="counter-item__content">
                                    <span className="count-text" data-speed="3000" data-stop="80">0</span>
                                    <h5 className="counter-title">Centre d'ALARM</h5>
                                </div>
                            </div>
                            <div className="project-complete">
                                <div className="project-complete__icon">
                                    <i className="flaticon-charity"></i>
                                </div>
                                <div className="project-complete__content">
                                    <h5>Plus de 34 900 personnes <br/>
                                    ont été servies</h5>
                                    <span>Par ALARM DR Congo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-page-form form-style-two py-110 rpy-85">
                            <div className="section-title mb-10">
                                <span className="section-title__subtitle mb-10">Besoin d&apos;aide ?</span>
                                <h3>Contactez nous</h3>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-9 mb-10">
                                        <p>Envoie nous un message pour plus d&apos;imformation et autre imformation populaire.</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Nom</label>
                                            <input  type="text" id="name" name="name" className="form-control" 
                                                placeholder="Your Name" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Adress mail</label>
                                            <input type="email" id="email" name="email" 
                                            className="form-control" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Télephone</label>
                                            <input type="text" id="phone_number" name="phone_number" 
                                            className="form-control" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Date de naissance</label>
                                            <input type="date" id="birth-day" name="birth-day" 
                                            className="form-control"  placeholder="Birth Day"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" className="form-control" placeholder="Write Your Messages" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group pt-10 mb-0">
                                            <button type="submit" className="btn ml-5">Send us a message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactezNous;