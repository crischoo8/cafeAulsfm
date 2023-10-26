import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";
import LandingPage from "./pages/LandingPage/LandingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import JournalPostCard from "./components/JournalPostCard/JournalPostCard";
import JournalPostForm from "./components/JournalPostForm/JournalPostForm";
import JournalPage from "./pages/JournalPage/JournalPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import BucketListPage from "./pages/BucketListPage/BucketListPage";
import NavBar from "./components/NavBar/NavBar";
import AuthPage from "./pages/AuthPage/AuthPage";
import { getUser } from "./utilities/users-service";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  // const [user, setUser] = useState(getUser());
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    {/* <AuthPage/> */}
    {/* <NavBar/> */}
    {/* <SignUpForm/> */}
    {/* <LoginForm/> */}
    {/* <JournalPostForm/> */}

    {/* define routes below */}
    <main className="min-h-screen min-w-screen bg-black text-white">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          {loading && (
            <div className="flex items-center justify-center h-[80vh]">
              <span className="loading loading-spinner w-16 text-[#E50A14]"></span>
            </div>
          )}
          {!loading && (
            <Routes>
              <Route
                path="/home"
                element={
                  <HomePage/>
                }
              />
              <Route
                path="/journal"
                element={
                  <JournalPage/>
                }
              />
              <Route
                path="/announcements"
                element={
                  <AdminPage/>
                }
              />
              <Route
                path="/bucketlist"
                element={
                  <BucketListPage/>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          )}
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<AuthPage setUser={setUser} />}>
            <Route path="signup" element={<SignUpForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
    </main>
    </>
  )
}

export default App
