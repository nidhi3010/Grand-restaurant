import react from 'react';

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";

import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>

    <div className='title-logo'>
      <div className='title'>
        <h1>GRAND</h1>
        <h2>RESTAURANT</h2>
        
          <p>Dolor church-key veniam, fap Bushwick mumblecore</p>
          <p>irure Vice consectetur 3 wolf moon sapiente literally</p>
          <p>quinoa.</p>
       
      </div>
      <div className='logo'>
        <AiFillFacebook className='facebook' />
        <AiOutlineTwitter className='twitter' />
        <AiFillYoutube className='youtube' />
        <FaPinterest className='pinterest' />
        <FaInstagram className='instagram' />
      </div>
    </div>

    <div className='recentposts'>
      <h1 className='recentpost_title'>RECENT POSTS</h1>
      <h1 className='post_1'>
        Black Spaghetti with Rock
        Shrimp
      </h1>
      <p className='date_1'>April 20,2015</p>
      <h1 className='post_2'>Cooking Food With Love</h1>
      <p className='date_2'>April 18,2015</p>
      <h1 className='post_3'>Modern Fusion Cuisine</h1>
      <p className='date_3'>April 17, 2015</p>
    </div>

    <div className='gallery_on_flickr'>
      <div className='first_3_img'>
        <img src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80.jpg" alt='img_1' />
        <img src="https://i.pinimg.com/736x/99/68/0d/99680d13681727d892c2902a7500e6ce.jpg" alt='img_2' />
        <img src="https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-1711224258-1697466.transform/lh-dcep-transform-width-1440/img.jpg" alt='img_3' />
      </div>
      <div className='second_3_img'>
        <img src="https://news.italianfood.net/wp-content/uploads/sites/2/2021/02/food-wine-italiano.jpg" alt='img_4' />
        <img src="https://www.gioiaspa.com/wp-content/uploads/2019/10/food-and-beverage-1.jpg" alt='img_5' />
        <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/07/street-food-recipes-1a.jpg" alt='img_6' />
      </div>
    </div>

    <div className='contact_info'>
      <h1 className='contacttitle'>CONTACT INFO</h1>
      <div className='address_info'>
        <AiFillEnvironment className='location' />
        <p className='address'>
          732/21 Second Street, Manchester,
          King Street, Kingston United Kingdom
        </p>
      </div>
      <div className='call_info'>
        <AiFillPhone className='call_icon' />
        <p className='call_number'>+65.4566743</p>
      </div>
      <div className='email_info'>
        <MdEmail className='email_icon' />
        <p className='email_id'>info@grandrestauranttheme.com</p>
      </div>
      <div className='site_info'>
        <RiEarthFill className='site_icon' />
        <p className='site_name'>grandrestauranttheme.com</p>
      </div>
    </div>



  </div>




)

export default Footer;