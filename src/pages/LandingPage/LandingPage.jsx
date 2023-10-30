import { Link } from "react-router-dom";

export default function LandingPage() {

    return(
        <>
        <span className="absolute top-4 left-4">
        <img className="w-28 h-10" src="/assets/lsfm-standard-logo.webp" />
      </span>
    
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/lsfm-unforgiven-background.jpeg')",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        <div className="bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div className="max-w-2xl mx-auto text-center mt-44">
            <h1 className="font-oswald mb-5 text-5xl font-bold text-white">
              A journaling oasis for you, yourself and nobody else.
            </h1>
            <p className="mb-5 text-white text-xl">
              Catch a break at CafeAuLsfm.
            </p>
            <Link to="/signup">
              <button className="btn btn-ghost font-oswald text-white text-2xl bg-slate-600 hover:bg-slate-800 rounded-md normal-case">
                Get Started {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/login">
        <span className="text-white font-oswald text-md btn btn-ghost btn-sm  bg-slate-600 hover:bg-slate-800 rounded-md absolute top-4 right-4 normal-case">
          Log In
        </span>
      </Link>
        </>
    )
}