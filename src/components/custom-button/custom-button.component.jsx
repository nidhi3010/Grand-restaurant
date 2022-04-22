import React from 'react';

import './custom-button.styles.scss';
import { connect } from 'react-redux';
import { toggleReservHidden } from '../../redux/reserv/reserv.actions';

const CustomButton = ({toggleReservHidden}) =>
 (
    
     <button className='custom-button' onClick={toggleReservHidden}> 
          RESERVATION
     </button> 
)
 

 const mapDispatchToProps = dispatch => ({
 toggleReservHidden: () => dispatch(toggleReservHidden())
 });
 
export default connect(null,mapDispatchToProps)(CustomButton);

