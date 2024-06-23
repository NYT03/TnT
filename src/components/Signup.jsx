import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Use camelCase
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state before signup attempt

    try {
      await signup(email, password).then(
        navigate('/Page'),
        console.log("User signed up successfully")
      );
    } catch (error) {
      console.error("Signup failed:", error);

      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white" id="signup">
      <div className="flex gap-44">
        <div className="object-fill w-1/2 h-full">
          <img
            src="src/components/assets/images/Character/Ikbal 5.png"
            className="object-fill h-1/6"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-1/2">
          <div className="flex flex-col items-center  px-5 my-auto max-md:mt-10 max-md:max-w-1/3">
            <div className="text-8xl text-center text-red-600 max-md:max-w-1/3 max-md:text-4xl">
              Sign Up
            </div>
            <form
              onSubmit={handleSignup}
              className="flex flex-col w-full justify-center self-stretch items-center"
            >
              <input
                id="email"
                className="justify-center self-stretch items-start  p-2.5 mt-14 text-2xl whitespace-nowrap rounded border border-solid border-black border-opacity-50 text-red-600 text-opacity-70 max-md:pr-1 max-md:mt-1 max-md:max-w-full"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email/Phone"
              />
              <input
                id="password"
                className="justify-center self-stretch items-start  p-2.5 mt-14 text-2xl whitespace-nowrap rounded border border-solid border-black border-opacity-50 text-red-600 text-opacity-70 max-md:pr-5 max-md:mt-10 max-md:max-w-"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              <button
                disabled={loading}
                type="submit"
                id="sign up"
                className="justify-center px-5 py-2.5 mt-14 text-4xl leading-10 text-center text-black whitespace-nowrap bg-red-400 rounded-3xl mix-blend-multiply max-md:px-10 max-md:mt-15 hover:bg-red-600"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </form>
            <div className="flex gap-5 mt-12 text-xl leading-10 text-center max-md:flex-wrap max-md:mt-10">
              <div className="grow font-light text-black">
                Already have an acoount
              </div>
              <Link to="/Login">
                <button
                  disabled={loading}
                  id="signup"
                  className="flex-auto text-blue-700 underline"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
