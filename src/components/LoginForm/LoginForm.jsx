import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function LoginForm() {
      // temporary fix, need to figure out the visibility component later 
      // the ternary operator toggles between 2 different icons base on the truthy/falsy values(LOL what are these words)   
      let visibility = false

    return(
    <div className="container bg-neutral-400 mx-auto max-w-md p-4">
        <form className="p-2" 
        // onSubmit={handleSubmit}
        >
            <header className="text-white font-inter font-light text-2xl mb-4">
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
                // value={credentials.username}
                // onChange={handleChange}
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
                // value={credentials.password}
                // onChange={handleChange}
                className="bg-neutral-300 text-gray-900 text-sm focus:ring-zinc-500 block w-full p-2.5 cursor-text font-inter font-extralight border-none"
                required
                />
                <button
                className="btn btn-sm btn-ghost text-neutral-500 font-inter font-extralight absolute inset-y-1 right-0 pr-3 flex items-center"
                type="button"
                // onClick={handlePasswordVisibility}
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
                className="text-white bg-[#E50A14] hover:bg-[#c11119] focus:ring-2 focus:outline-none focus:ring-gray-400 font-bebas font-normal text-3xl px-3 py-2.5 text-center w-full"
            >
                LOGIN
            </button>
            )}
            <footer className="mt-6">
            Care for some CafeAuLsfm?{" "}
            <span className="text-neutral-700">
                {/* <Link to="/signup"> */}
                <span className="text-white text-md btn btn-ghost btn-sm bg-[#E50A14] hover:bg-[#c11119] rounded-md normal-case">
                    Sign up now!
                </span>
                {/* </Link> */}
            </span>
            </footer>
        </form>
        </div>
    )
}