// can use for admin journal/board also ^_^
import { Link } from "react-router-dom";

export default function JournalHero() {
  return (
    <div className="hero h-[80vh] bg-black">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-8">
          Ⴚტ◕‿◕ტჂ
          </h1>
          <Link to="/journal/new">
            <button className="btn btn-ghost text-white text-2xl bg-[#7ba6de] hover:bg-[#0d1c27] rounded-md normal-case">
              Click to Start Writing !
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

