import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

// after Routes are set up, need to take in setUser prop {setUser}

export default function AuthPage({setUser}) {
    const [status, setStatus] = useState(null);
    return(
        <>
        <span className="absolute top-4 left-4">
          <Link to="/">
            <img className="w-28 h-10" src="/assets/lsfm-standard-logo.webp" />
          </Link>
        </span>
  
        <main className="text-white p-4 container flex mx-auto min-h-screen items-center justify-center">
          <Outlet
            context={[
              setUser,
            //   visibility,
            //   handlePasswordVisibility,
              status,
              setStatus,
            ]}
          />
        </main>
      </>
    );
}