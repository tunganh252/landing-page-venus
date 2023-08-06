"use client"
import { COMPANY_MAIL } from "@/assets/utils/constant";
import bannerContact from "@assets/img/banner_contact.png";
import sendgrid from "@sendgrid/mail";
import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import BtnDowload from '../BtnDowload';
import "./style.scss";


export default function Contact() {

    const [labelBtnSubmit, setLabelBtnSubmit] = useState<"SUBMIT" | "SENDING">('SUBMIT');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!email.trim()) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!message.trim()) {
            alert('Please enter a message.');
            return;
        }
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        try {
            setLabelBtnSubmit("SENDING")
            const cfg = {
                from: COMPANY_MAIL,
                to: email,
                subject: subject,
                html: message,
            }

            sendgrid.send(cfg)
        } catch (error) {
            alert('Send mail error.',);
            console.log("ERR_SEND_MAIL: ", JSON.stringify(error));
        } finally {
            setLabelBtnSubmit("SUBMIT")
            setEmail("")
            setSubject("")
            setMessage("")
        }
    };

    useEffect(() => {
        if (process.env.SENDGRID_API_KEY) {
            sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
        }
    }, []);

    return (
        <div id='contact' className="contact-container pt-20">
            <div className='xl:flex xl:h-[880px]'>
                <div className='xl:!w-[calc(100vw_-_735px)] bg-n90 p-6 lg:p-14 xl:px-[100px] xl:py-[100px]'>
                    <p className='text-2xl xl:text-5xl font-bold'>CONTACT</p>
                    <p className='xl:text-xl mt-8 w-full'>
                        Fill form below to get in touch with us if there are any concerns or questions.
                    </p>

                    {/* Contact Form */}
                    <div className="mt-6 lg:mt-[60px]">
                        <form className="form-contact flex flex-col" onSubmit={handleSubmit}>
                            <div>
                                <p className="text-sm text-n30">Email</p>
                                <input
                                    type="email"
                                    className="email text-white bg-transparent rounded-lg border border-n70 h-[52px] mt-[6px] w-full px-4"
                                    placeholder="eg.example@gmail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="mt-6">
                                <p className="text-sm text-n30">Subject</p>
                                <input
                                    type="subject"
                                    className="subject text-white bg-transparent rounded-lg border border-n70 h-[52px] mt-[6px] w-full px-4"
                                    placeholder="Enter the subject"
                                    value={subject}
                                    onChange={handleSubjectChange}
                                    required
                                />
                            </div>
                            <div className="mt-6">
                                <p className="text-sm text-n30">Message</p>
                                <textarea
                                    className="message text-white bg-transparent rounded-lg border border-n70 h-[173px] mt-[6px] w-full px-4 py-3"
                                    placeholder="Type your message here..."
                                    value={message}
                                    onChange={handleMessageChange}
                                    rows={4}
                                    required
                                />
                            </div>
                            <button
                                className={`flex justify-center items-center rounded-3xl bg-pink w-[145px] h-[52px] mt-6 ${labelBtnSubmit === "SENDING" ? 'select-none opacity-50 cursor-not-allowed' : ''}`}
                                type="submit"
                            >
                                <p className="font-bold text-black">{labelBtnSubmit}</p>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="banner-contact w-screen h-full xl:w-[735px] xl:h-[880px]">
                    <Image className="w-full h-full" src={bannerContact} alt="icon" loading='lazy' />
                </div>
            </div>

            <div className='bg-black flex flex-col justify-center items-center p-6 lg:p-0'>
                {/* Button Download */}
                <div className='flex lg:mt-[60px] gap-x-6'>
                    <div className='w-fit'>
                        <BtnDowload type='apple' />
                    </div>
                    <div className='w-fit'>
                        <BtnDowload type='android' />
                    </div>
                </div>
                <p className='hidden lg:block my-6 text-center'>Copyright © 2023 Venus AI. All rights reserved</p>
                <div className='lg:hidden mx-10 my-6 text-center'>
                    <p>Copyright © 2023 Venus AI.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
