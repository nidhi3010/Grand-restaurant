import React, { Component } from 'react';

 import DatePicker from 'react-datepicker';

import Calendar from 'react-calendar';

class Cale extends Component {
    state = {
       selectedate: new Date(),

    }
    onChange = Date => this.setState({ Date })
   

    render() {
        return (
         
           <DatePicker
            date={Date}
            mode="date"

              onChange={this.onChange}
              selected={this.selecteddate}
            />
            // <DatePicker  
            // format="DD-MM-YYYY"
            // mode="date"
            // placeholder="Date of Birth"
            // date={date}
            // confirmBtnText="Confirm"
            // cancelBtnText="Cancel"
            // onDateChange={(date) => {setDate(date);
            //     />


        );
      }
    }

    export default Cale;