import { Link } from "react-router-dom";
import {
    PiSunBold,
    PiSunHorizonBold,
    PiSunglassesBold,
    PiTelevisionBold,
  } from "react-icons/pi";

export default function BucketListHero() {
  return (
    <div className="hero h-[80vh] bg-black">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl flex items-center justify-center font-bold mb-8">
          <PiSunBold/>
          <PiSunglassesBold/>
          </h1>
          <Link to="/bucketlist/new">
            <button className="btn btn-ghost text-white text-2xl bg-[#7ba6de] hover:bg-[#0d1c27] rounded-md normal-case">
              Start Filling Your Bucket!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

