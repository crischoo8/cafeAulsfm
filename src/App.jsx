import debug from "debug";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";
import LandingPage from "./pages/LandingPage/LandingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import JournalPostCard from "./components/JournalPostCard/JournalPostCard";
import JournalPostForm from "./components/JournalPostForm/JournalPostForm";
import JournalPage from "./pages/JournalPage/JournalPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import BucketListPage from "./pages/BucketListPage/BucketListPage";
import NavBar from "./components/NavBar/NavBar";
import AuthPage from "./pages/AuthPage/AuthPage";
import PostEditForm from "./components/JournalPostForm/PostEditForm";
import { getUser } from "./utilities/users-service";
import { getAllPostService } from "./utilities/posts-service";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const log = debug("cafeaulsfm:src:App");
localStorage.debug = "cafeaulsfm:*";

log("Start React");

function App() {
  const [user, setUser] = useState(getUser());
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchPostData = async () => {
    try {
      const allPost = await getAllPostService();
      setPost(allPost);
      console.log(post);
    } catch (err) {
      console.error(err);
    } 
    // finally {
    //   setLoading(false);
    // }
  };


  useEffect(() => {
    if (user) {
      fetchPostData();
      if (location.pathname === "/") {
        navigate("/home");
      }
    }
  }, [user, navigate, location]);

  return (
    <>
      {/* define routes below */}
      <main className="min-h-screen min-w-screen bg-black text-white">
        <ToastContainer />
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            {!loading && (
              <div className="flex items-center justify-center h-[80vh]">
                <span className="loading loading-spinner w-16 text-[#7BA6DE]"></span>
              </div>
            )}
            {loading && (
              <Routes>
                <Route path="/home" element={<HomePage user={user} />} />
                <Route path="/journal" element={<JournalPage user={user} post={post} setPost={setPost}/>} />
                {/* create a /journal/new route! */}
                <Route path="/journal/new" 
                element={<JournalPostForm
                post={post}
                setPost={setPost}
                />} />

                <Route path="/journal/:postID/edit" 
                element={<PostEditForm
                post={post}
                setPost={setPost}
                />} />

                <Route path="/announcements" element={<AdminPage />} />
                {/*  create a /announcements/new route */}
                {/* for creating new admin posts ^^ */}
                <Route path="/bucketlist" element={<BucketListPage />} />
                {/* create a bucketlist/new */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            )}
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/"
              element={<AuthPage user={user} setUser={setUser} />}
            >
              <Route
                path="signup"
                element={<SignUpForm user={user} setUser={setUser} />}
              />
              <Route
                path="login"
                element={<LoginForm user={user} setUser={setUser} />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
