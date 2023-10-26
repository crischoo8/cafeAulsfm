import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // need to add in BucketList Page into NavBar
    const pages = [
        { link: "/home", title: "Home" },
        { link: "/journal", title: "My Journal" },
        { link: "/announcements", title: "Cafe Updates" },
        { link: "/bucketlist", title: "My Bucket List" },
      ];

    return (
        <nav>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen p-4 font-inter font-extralight">
        <div className="flex items-center">
          <span className="mr-10">
            <Link to="/home">
              <img className="w-28 h-10" src="/assets/lsfm-standard-logo.webp" />
            </Link>
          </span>
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.link}
              className={`mr-6 text-lg hover:text-xl ${
                location.pathname === page.link
                  ? "text-white hover:text-lg"
                  : "text-neutral-500 hover:text-white hover:bg-slate-600"
              }`}
            >
              {page.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
          {/* {renderAddApparelComponent()} */}
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost pt-1 hover:bg-slate-600">
              <img
                src={"/assets/fearnot-logo.jpeg"}
                alt="profile-pic"
                width={35}
                height={35}
                className="rounded-md"
              />
              <AiOutlineCaretDown className="hover:transform hover:rotate-90 hover:transition-transform" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[2] bg-base-100 rounded-box w-52 font-bebas tracking-widest bg-opacity-80 text-lg">
              <li className="ml-4 mt-2  text-neutral-400">
                {/* {user.username} */}
                user username 
                </li>
              <li className="ml-4 mt-2 mb-2 text-sm  text-neutral-400 break-all">
                {/* {user.email} */}
                user email
              </li>
              <li className="border-t border-white">
                <Link to="/" className="text-lg">
                  Logout
                </Link>
              </li>
              <li className="border-t border-white">
                <Link to="/" className="text-lg">
                  Deactivate Account
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
    );

}