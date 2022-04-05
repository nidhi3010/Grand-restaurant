import React, { Component } from 'react';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
//import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './reservation.styles.scss';
import Cale from './calendar.copmponent';
import InputBox from './inputbox.component';
import menu from './person-menu.component';

//WiTime9

const Reservation = () => {
  return(
  <div className='reservation'>
    <div className='reserimg'>
      <img src="https://wallpaperaccess.com/full/3353887.jpg" />
    </div>

    <h2>Online</h2>
    <h1>RESERVATION</h1>
    <div className='table'>
      <p>Reservation Form Powered by OpenTable</p>
      <span>1.800.456.6743  contact@grandrestaurant.com</span>
    </div>

    <div className='icons'>
      <AiOutlineCalendar className='cal' size="4rem" />
      <Cale  className='cale'/>
      <AiFillClockCircle  className='clock' size="4rem" />
      <InputBox className='inputbox'/>
      <AiOutlineUser className='user' size="4rem" />
      <menu  className='menuperson'/>
    </div>

  </div>




)};

export default Reservation;