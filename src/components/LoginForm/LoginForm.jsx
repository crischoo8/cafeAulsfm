import { useState } from "react";
import { loginService } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export default function LoginForm({user, setUser}) {
      const [status, setStatus] = useState(null);
      const [visibility, setVisibility] = useState(false);

      // initialise the form data format - create an object ah
      // useState - credentials, setCredentials = useState(initialFormData)
      // event.target.value  
      const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });

      const navigate = useNavigate();
      //   test TOASTIFY
      const notify = () => toast("Succesful Login");

       const handlePasswordVisibility = function() {
        setVisibility((prev) => !prev);
       }

      // spread operator (?), spread the credential data format
      // "push in" and object key-value pair   
       const handleChange = function(e) {
        setCredentials({
            ...credentials, [e.target.name]: e.target.value,
        });
       };

       const handleSubmit = async function(e) {
        e.preventDefault();
        setStatus("loading");

        try {
            const user = await loginService(credentials);
            if (user !== null && user !== undefined) {
                // await notify();
                await setUser(user);
                navigate("/home");
                
            }
        } catch (err) {
            setCredentials({
                username: "",
                password: "",
              });
              setStatus("error");
        } finally {
            setStatus(null);
        }
       };
    return(
    <div className="container bg-neutral-400 mx-auto max-w-md p-4">
        <form className="p-2" 
        onSubmit={handleSubmit}
        >
            <header className="text-white font-oswald font-inter font-light text-2xl mb-4">
            Log In 
            </header>
            <div className="mb-6">
            <label
                htmlFor="username"
                className="block mb-2 text-sm font-inter font-normal text-gray-600"
            >
                Username
            </label>
            <input
                type="username"
                id="usernameLogin"
                name="username"
                autoComplete="off"
                value={credentials.username}
                onChange={handleChange}
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
                id="passwordLogin"
                name="password"
                autoComplete="off"
                value={credentials.password}
                onChange={handleChange}
                className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-text font-inter font-extralight border-none"
                required
                />
                <button
                className="btn btn-sm btn-ghost text-neutral-500 font-inter font-extralight absolute inset-y-1 right-0 pr-3 flex items-center"
                type="button"
                onClick={handlePasswordVisibility}
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
                // onClick={notify}
         >
                LOGIN
            </button>
            )}
            <footer className="mt-6">
            New to CafeAuLsfm?{" "}
            <span className="text-neutral-700">
                <Link to="/signup">
                <span className="text-white font-oswald text-md btn btn-ghost btn-sm  bg-slate-600 hover:bg-slate-800  rounded-md normal-case">
                    Sign up now!
                </span>
                </Link>
            </span>
            </footer>
        </form>
        </div>
    )
}