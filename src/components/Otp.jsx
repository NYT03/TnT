import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Otp() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const handleChange = (event) => {
     setValue(event.target.value);
   };
   function handleClick()
   {
    navigate('/');
   }
  return (
    <div className="bg-white">
      <div className="flex gap-2 ">
        <div className="object-scale-down h-1/4">
          <img
            src="src/components/assets/images/Character/Ikbal 2.png"
            className="grow w-full aspect-[0.64] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch text-8xl text-center text-red-600 max-md:max-w-full max-md:text-4xl">
              Enter OTP
            </div>
            <div className="flex gap-2 justify-center mt-11 text-xl text-black max-md:flex-wrap max-md:mt-10">
              <div className="font-light">Enter OTP sent on </div>
              <div className="font-bold">abcd123@gmail.com</div>
            </div>
            <div>
            <input
              className="justify-center items-middle p-2.5 mt-10 text-2xl whitespace-nowrap rounded border border-solid border-black border-opacity-50 text-red-600 text-opacity-70 max-w-60"
              id="OTP"
              placeholder="OTP"
              value={value}
              type="numeric"
              onChange={handleChange}
            />
            </div>
            <div>
            <button id="sign in" className="justify-center px-5 py-2.5 mt-14 text-4xl leading-10 text-center text-black whitespace-nowrap bg-red-400 rounded-3xl mix-blend-multiply max-md:px-10 max-md:mt-15 hover:bg-red-600" onClick={handleClick}>
              Confirm
            </button>
            </div>
            <div className="flex gap-5 justify-between mt-14 text-xl text-center max-md:flex-wrap max-md:mt-10">
              <div className="font-light leading-10 text-black">
                Already have an acoount
              </div>
              <Link to='/Login'><button id="signup" className="flex-auto text-blue-700 underline" onClick={''}>Sign in</button></Link>            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
