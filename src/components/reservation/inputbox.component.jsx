import react from 'react';

const InputBox =() => (
    <div className='inputbox'>
      <input type="time" id="appt" name ="appt"
      min="9:00" max="18:00" required
       />
    </div>
)

export default InputBox;