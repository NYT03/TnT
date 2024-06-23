import React from 'react'
import { Link } from 'react-router-dom';

function Go() {
  return (
    <div className="bg-white" id="signup">
      <div className="flex gap-44">
        <div className="object-fill w-1/2 h-full">
          <img
            src="src/components/assets/images/Character/Saly-3.png"
            className="object-fill h-1/6"
          />
        </div>
        <div>
            <div>
                <h1 className='text-4xl text-wrap'>
                    Read
                     To
                </h1>
            </div>
            <>
            <Link to='/'><button type="submit" id="sign up" className="justify-center px-5 py-2.5 mt-14 text-4xl leading-10 text-center text-black whitespace-nowrap bg-red-400 rounded-3xl mix-blend-multiply max-md:px-10 max-md:mt-15 hover:bg-red-600" onClick={handleSignup}>
                Next
                </button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Go