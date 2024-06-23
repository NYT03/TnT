// import AnchorLink from "react";
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './styles/Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

async function SignIn(e) {
  e.preventDefault();
  setLoading(true);

  try {
    await login(email, password).then(
      navigate('/Page')
    ).catch((err) => {
      console.log('User logged in successfully');
    });
  } catch (error) {
    console.error('Sign in error:', error);
    alert('Sign in failed. Please check your email and password.'); 
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="bg-white" id="Login">
      <div className="flex gap-44">
        <div className="object-fill w-1/2 h-1/6">
          <img
            loading="lazy"
            src="src/components/assets/images/Character/Ikbal 4.png"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-1/2">
          <div className="flex flex-col items-center self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-1/3">
            <div className="text-8xl text-center text-red-600 max-md:max-w-1/3 max-md:text-4xl">
              Sign In
            </div>
            <form onSubmit={SignIn} className='flex flex-col w-full justify-center self-stretch items-center'>
            <input id="email" className="justify-center items-start self-stretch p-2.5 mt-14 text-2xl whitespace-nowrap rounded border border-solid border-black border-opacity-50 text-red-600 text-opacity-70 max-md:pr-5 max-md:mt-10 max-md:max-w-full" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            <input  id="password"className="justify-center items-start self-stretch p-2.5 mt-14 text-2xl whitespace-nowrap rounded border border-solid border-black border-opacity-50 text-red-600 text-opacity-70 max-md:pr-5 max-md:mt-10 max-md:max-w-full " value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Password' />
            <button disabled={loading} type="submit" id="sign in" className="justify-center px-5 py-2.5 mt-14 text-4xl leading-10 text-center text-black whitespace-nowrap bg-red-400 rounded-3xl mix-blend-multiply max-md:px-10 max-md:mt-15 hover:bg-red-600">
              Sign in
            </button>
            </form>
            <div className="flex gap-4 mt-7 text-xl leading-10 text-center">
              <div className="grow my-auto font-light text-black">
                Don’t have an account {" "}
              </div>
            <Link to='/'><button id="signup" className="flex-auto text-blue-700 underline">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
