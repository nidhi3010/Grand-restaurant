import React from 'react';

import Cale from '../reservation/calendar.copmponent';
import InputBox from '../reservation/inputbox.component';
import PersonMenu from '../reservation/person-menu.component';

import './reservation-drop.styles.scss';

const ReservationDropDown = () => (
    <div className='reservation-drop'>
        <div className='table-booking'>
            <h2>Table</h2>
            <h1>BOOKING</h1>
        </div>

        <div className='datails'>
            <div className='part-1'>
                <div className='name_details'>
                    <label>NAME*</label>
                    <input id="your_name" name="your_name" type="text" className='required_field' />
                </div>
                <div className='date_details'>
                    <label>DATE*</label>
                    <Cale className='date-cal' />
                </div>
            </div>

            <div className='part_2'>
                <div className='email_details'>
                    <label>EMAIL*</label>
                    <input id="email" name="email" type="text" className='required_field' />
                </div>
                <div className='time-details'>
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

export default ReservationDropDown;