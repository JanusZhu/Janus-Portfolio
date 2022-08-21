import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href={"https://www.facebook.com/ziqian.zhu.7/"} target="_blank" rel="noreferrer">
                <FaFacebookF />
            </a>

        </div>
        <div>
            <a href={"https://www.instagram.com/januszzq/"} target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>

        </div>
    </div>
);

export default SocialMedia;