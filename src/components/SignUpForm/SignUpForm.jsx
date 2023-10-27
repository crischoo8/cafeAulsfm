import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { signUpService } from "../../utilities/users-service";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SignUpForm(user, setUser) {
    const [status, setStatus] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        username: "",
        password: "",
        repeat: "",
    });
   
    const navigate = useNavigate();

     const handlePasswordVisibility = function() {
      setVisibility((prev) => !prev);
     }

     const handleChange = function(e) {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value,
        });
     };

     const handleSubmit = async function(e) {
        e.preventDefault();
        setStatus("loading");

        try{
            const newUser = await signUpService(userData);
            if (newUser !== null && newUser !== undefined) {
                setUser(newUser);
                console.log(newUser)
                navigate("/home");
            }
        } catch(err) {
            setStatus("error");
        } finally {
            setStatus(null);
        }
        
     };
     
    return (
        <div className="container bg-neutral-400 mx-auto max-w-md p-4">
        <form className="p-2" 
        onSubmit={handleSubmit} 
        autoComplete="off">
          <header className="text-white  font-inter font-light text-2xl mb-4">
            Join us at{" "}
            <span className=" text-slate-600 text-3xl font-bold">CafeAuLsfm!</span>
          </header>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-inter font-normal text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-text font-inter font-extralight border-none"
              placeholder="name@email.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-inter font-normal text-gray-600"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="Username"
              autoComplete="off"
              className="bg-neutral-300 text-gray-900 text-sm focus:outline-none block w-full p-2.5 cursor-text font-inter font-extralight border-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-inter font-normal text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={visibility ? "text" : "password"}
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Password"
                className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-text font-inter font-extralight border-none"
                required
              />
              <button
                className="btn btn-sm btn-ghost text-neutral-500 font-inter font-extralight absolute inset-y-1 right-0 pr-3 flex items-center"
                onClick={handlePasswordVisibility}
                type="button"
              >
                {visibility ? (
                  <AiOutlineEyeInvisible className="text-2xl" />
                ) : (
                  <AiOutlineEye className="text-2xl" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-inter font-normal text-gray-600"
            >
              Repeat Password
            </label>
            <div className="relative">
              <input
                type={visibility ? "text" : "password"}
                id="repeat-password"
                name="repeat"
                value={userData.repeat}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Repeat Password"
                className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block focus:outline-none w-full p-2.5 cursor-text font-inter font-extralight border-none"
                required
              />
              <button
                className="btn btn-sm btn-ghost text-neutral-500 font-inter font-extralight absolute inset-y-1 right-0 pr-3 flex items-center"
                onClick={handlePasswordVisibility}
                type="button"
              >
                {visibility ? (
                  <AiOutlineEyeInvisible className="text-2xl" />
                ) : (
                  <AiOutlineEye className="text-2xl" />
                )}
              </button>
            </div>
          </div>
          {status === "loading" ? (
            <div className="flex items-center justify-center">
              <span className="loading loading-dots loading-lg bg-gray-500 px-3 py-2.5 "></span>
            </div>
          ) : (
            <button
              type="submit"
              className="text-white font-oswald bg-slate-600 hover:bg-slate-800  focus:ring-2 focus:outline-none focus:ring-gray-400 font-bebas font-normal text-3xl px-3 py-2.5 text-center w-full"
            >
              SIGN UP
            </button>
          )}
        </form>
        <Link to="/login">
          <span className="text-white font-oswald text-md btn btn-ghost btn-sm  bg-slate-600 hover:bg-slate-800 rounded-md absolute top-4 right-4 normal-case">
            Sign In
          </span>
        </Link>
      </div>
    );
}