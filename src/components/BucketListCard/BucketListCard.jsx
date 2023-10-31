import {
  PiCheckSquareBold,
  PiPencil,
  PiLinkSimpleBold,
  PiTrashDuotone,
  PiSquareBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaBucket } from "react-icons/fa6";
import {
  PiSunHorizonBold,
  PiSunglassesBold,
  PiTelevisionBold,
} from "react-icons/pi";
import { GiSandCastle, GiCoffeeMug } from "react-icons/gi";
import { BiSolidCircle } from "react-icons/bi";
import Swal from "sweetalert2";

export default function BucketListCard({bucketItem, handleDelete}) {
  return (
    <>
      <article>
        <div className="bg-gray-200 p-3 m-1 h-55 w-60 rounded-lg shadow md:flex-row md:max-w-xl">
          <span className="flex items-center justify-between">
            {/* title */}
            <span>
              <i className="text-zinc-600 text-2xl">
                {/* rizz cat dingus */}
                {bucketItem?.title}
              </i>
            </span>
            <span>
              <span
                className="tooltip tooltip-top"
                data-tip="Edit Bucket List Item"
              >
                <Link to={`/bucketlist/${bucketItem?._id}/edit`}>
                <PiPencil className="text-xl mb-2 mr-[2px] text-black cursor-pointer" />
                </Link>
              </span>

              <span
                className="tooltip tooltip-top"
                data-tip="Dump Bucket List Item"
              >
                {/* change this icon */}
                <PiTrashDuotone
                  onClick={() => handleDelete(bucketItem?._id)}
                  className="text-xl mb-2 text-black cursor-pointer"
                />
              </span>
            </span>
          </span>

          <div className="flex flex-col justify-between p-2 leading-normal">
            {/* description, could be like a reminder for airing dates */}
            <p className="flex items-center space-x-0 text-zinc-600">
              <BiSolidCircle/>
              {/* handsomest boi! */}
              {bucketItem?.description}
            </p>
            {/* URL / Link */}
            <p className="flex items-center space-x-0 text-zinc-600 hover:text-indigo-400">
              <BiSolidCircle/>
              <a
                // href="https://www.tiktok.com/@fish___gang/video/7282884444090895658"
                  href={bucketItem?.url}
                target="blank"
              >
                <PiLinkSimpleBold />
              </a>
            </p>
          

          </div>
          <div className="flex items-center space-x-0 text-zinc-600">
                <PiTelevisionBold />
                <GiCoffeeMug />
                <PiSunHorizonBold />
                <PiSunglassesBold />
                <FaBucket />
                <GiSandCastle />
            </div>
        </div>
      </article>
    </>
  );
}
