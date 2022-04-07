import React, { Component } from 'react';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
//import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './reservation.styles.scss';
import Cale from './calendar.copmponent';
import InputBox from './inputbox.component';
//import menu from './person-menu.component';
//import PersonMenu from './person-menu.component';
//import DropdownExampleClearable from './person-menu.component';
import PersonMenu from './person-menu.component';

//WiTime9

const Reservation = () => {
  return (
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

        <div className='calendar'>
          <AiOutlineCalendar className='cal' size="3rem" />
          <Cale className='cale' />
        </div>

        <div className='clocktime'>
          <AiFillClockCircle className='clock' size="3rem" />
          <InputBox className='inputbox' />
        </div>

        <div className='personselection'>
          <AiOutlineUser className='user' size="3rem" />
          <PersonMenu />
        </div>

      </div>

      <div className='findtable'>
        <button>FIND A TABLE</button>
      </div>

    </div>




  )
};

export default Reservation;