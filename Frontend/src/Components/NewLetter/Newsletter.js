import React from 'react';
import { Send } from "@material-ui/icons";
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="containerNewsletter">
            <div className="titleNewsletter">Newsletter</div>
            <div className='descriptionNewsletter'>Get timely updates from your favorite products.</div>
            <div className='inputContainerNewsletter'>
                <input placeholder="Your email"  className='inputNewsletter'/>
                <button className='buttonNewsletter'>
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;