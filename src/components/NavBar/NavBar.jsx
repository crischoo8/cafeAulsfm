import { Link, useNavigate, useLocation } from "react-router-dom";
import { logOutService } from "../../utilities/users-service";
import { AiOutlineCaretDown } from "react-icons/ai";
import { PiNotePencilBold, PiPlusSquareFill } from "react-icons/pi";
import { FaBucket } from "react-icons/fa6";
import { GiSpade } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";



export default function NavBar({user, setUser}) {
    const navigate = useNavigate();
    const location = useLocation();

    const renderAddApparelComponent = () => (
        <div
          className={`flex items-center ${
            location.pathname === "/journal/new"
              ? "text-white"
              : "text-neutral-500"
          } hover:text-white hover:text-3xl text-2xl mr-3`}
        >
          <Link to="/journal/new" className="flex items-center justify-center hover:text-teal-500">
            <div
              className="tooltip tooltip-bottom flex items-center justify-center"
              data-tip="Add Journal Post"
            >
              <PiNotePencilBold/>
              <PiPlusSquareFill />
            </div>
          </Link>

          <RxDividerVertical className="hover:text-indigo-400 hover:text-3xl text-2xl mr-3"/>

          <Link to="/bucketlist/new" className="flex items-center justify-center hover:text-amber-300">
            <div
              className="tooltip tooltip-bottom flex items-center justify-center"
              data-tip="Add Bucket List Item"
            >
              <FaBucket/>
              <GiSpade/>
            </div>
          </Link>
        </div>
      );
    // need to add in BucketList Page into NavBar
    const pages = [
        { link: "/home", title: "Home" },
        { link: "/journal", title: "My Journal" },
        { link: "/announcements", title: "Cafe Updates" },
        { link: "/bucketlist", title: "My Bucket List" },
      ];

    const handleLogOut = (e) => {
    e.preventDefault();
    logOutService();
    setUser(null);
    navigate("/");
    };

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
                  : "text-neutral-500 hover:text-indigo-400 hover:bg-slate-600"
              }`}
            >
              {page.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
        {/* do i rly need the following 10 lines to hide the default arrow from details? */}
        <style>
        {`
          details > summary {
            list-style: none;
          }
          details > summary::-webkit-details-marker {
            display: none;
          }
        `}
      </style>
          {renderAddApparelComponent()}
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost pt-1 hover:bg-slate-600">
              <img
                src={"/assets/fearnot-logo.jpeg"}
                alt="profile-pic"
                width={100}
                height={100}
                className="rounded-md"
              />
              <AiOutlineCaretDown className="hover:transform hover:rotate-90 hover:transition-transform" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[2] bg-base-100 rounded-box w-52 font-bebas tracking-widest bg-opacity-80 text-lg">
              <li className="ml-4 mt-2  text-neutral-400">
                {user.username}
                {/* user username  */}
                </li>
              <li className="ml-4 mt-2 mb-2 text-sm  text-neutral-400 break-all">
                {user.email}
                {/* user email */}
              </li>
              <li className="border-t border-white">
                <Link to="/" onClick={handleLogOut} className="text-lg">
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