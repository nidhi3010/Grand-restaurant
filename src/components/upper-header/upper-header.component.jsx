import React from 'react';

import './upper-header.styles.scss';

import { AiFillEnvironment } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const UpperHeader =() => (
    <div className='upper-header'>
      <div className='address-contact'>
        <div className='header-address'>
        <AiFillEnvironment className='adress-logo' />
        <p className='add-info'>732/21 Second Street, King Street, United Kingdom</p>
        </div>
        <div className='header-contact'>
        <AiFillPhone className='call_logo' />
        <p className='phone-number'>+65.4566743</p>
        </div>
        <div className='header-logo'>
         <AiFillFacebook className='facebook-icon' />
         <AiOutlineTwitter className='twitter-icon' />
         <AiFillYoutube className='youtube-icon' />
         <FaPinterest className='pinterest-icon' />
         <FaInstagram className='instagram-icon' />
        </div>
      </div>
    </div>
)

export default UpperHeader;