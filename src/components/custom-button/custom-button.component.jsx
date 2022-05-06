import React from 'react';

import './custom-button.styles.scss';
import { connect } from 'react-redux';
import { toggleReservHidden } from '../../redux/reserv/reserv.actions';

const CustomButton = ({toggleModal}) =>
 (
    
     <button className='custom-button' variant="outlined" onClick={toggleModal}> 
          RESERVATION
     </button> 
)
 

 const mapDispatchToProps = dispatch => ({
 toggleReservHidden: () => dispatch(toggleReservHidden())
 });
 
export default connect(null,mapDispatchToProps)(CustomButton);

