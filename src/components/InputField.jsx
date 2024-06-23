import { PropTypes } from 'prop-types';
import  { useState } from 'react';// Assuming you have styles for the input field

function InputField(props) {
  const [value, setValue] = useState('');
 const{name,type,pholder}=props
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={name}>
      <input className=' text-red-600 text-opacity-70 max-md:pr-5 max-md:max-w-full'
        id={name}
        placeholder={pholder}
        value={value}
        type={type}
        onChange={handleChange}
      />
      <input className='text'
        id={name}
        placeholder={pholder}
        value={value}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
}
InputField.propTypes={
  name: PropTypes.string,
  type: PropTypes.string,
  pholder: PropTypes.string
}
export default InputField;
