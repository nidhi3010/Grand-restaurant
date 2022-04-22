import React from 'react';

//import Cale from '../reservation/calendar.copmponent';
import InputBox from '../reservation/inputbox.component';
import PersonMenu from '../reservation/person-menu.component';
import { AiOutlineClose } from "react-icons/ai";

import { toggleReservHidden } from '../../redux/reserv/reserv.actions';

import './reservation-drop.styles.scss';
import { connect } from 'react-redux';

const ReservationDropDown = ({toggleReservHidden}) => (
    <div className='reservation-drop'>
      <AiOutlineClose className='close-button' size="3rem" onClick={toggleReservHidden} />
        <div className='table-booking'>
            <h2>Table</h2>
            <h1>BOOKING</h1>
        </div>

        <div className='datails'>
            <div className='part_1'>
                <div className='name_details'>
                    <label>NAME*</label>
                    <input id="your_name" name="your_name" type="text" className='required_field' />
                </div>
                <div className='date_details'>
                    <label>DATE*</label>
                    <input type="date" id="birthday" name="birthday"></input>
                </div>
            </div>

            <div className='part_2'>
                <div className='email_details'>
                    <label>EMAIL*</label>
                    <input id="email" name="email" type="text" className='required_field' />
                </div>
                <div className='time_details'>
                    <label>TIME*</label>
                    <InputBox className='time-inputbox' />
                </div>
            </div>

            <div className='part_3'>
                <div className='phone_details'>
                    <label>PHONE*</label>
                    <input id="phone" name="phone" type="text" className='required_field' />
                </div>
                <div className='seats_details'>
                    <label>SEATS*</label>
                    <PersonMenu />
                </div>
            </div>

        </div>

        <div className='special-requests'>
            <label>SPECIAL REQUESTS</label>
            <textarea id="message" name="message" rows="7" cols="10"></textarea>
        </div>

        <div className='booknow'>
            <button>BOOK NOW</button>
        </div>

    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleReservHidden: () => dispatch(toggleReservHidden())
    });

export default connect(null, mapDispatchToProps)(ReservationDropDown);