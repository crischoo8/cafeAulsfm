import {
    PiCoffeeDuotone,
    PiPencil,
    PiLinkSimpleBold,
    PiTrashDuotone,
  } from "react-icons/pi";
  import { Link } from "react-router-dom";
  
  export default function AdminPostCard({postItem}) {
    return (
      <>
        <article>
          <div className="bg-gray-200 p-3 w-full m-1 h-[100%] rounded-lg shadow md:flex-row md:max-w-xl">
            <img
              className="h-auto w-1/2 rounded-lg object-cover mx-auto"
              //   src="./assets/rizzCat.jpeg"
              src={postItem?.imageURL}
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
              {/* title */}
              <p className=" text-zinc-500">
                <i className="text-zinc-600">
                  {/* rizz cat dingus */}
                  {postItem?.title}
                </i>
              </p>
              {/* description */}
              <p className="text-zinc-600">
                {/* handsomest boi! */}
                {postItem?.description}
              </p>
              {/* URL / Link */}
              <p className="text-zinc-600 hover:text-indigo-400">
                <a
                  //   href="https://www.tiktok.com/@fish___gang/video/7282884444090895658"
                  href={postItem?.url}
                  target="blank"
                >
                  <PiLinkSimpleBold />
                </a>
              </p>
              {/* tags */}
              <p className="text-zinc-600  hover:text-indigo-400">
                {/* #dingus #dingusMyIdol */}# {postItem?.tag}
              </p>
  
              <p className="text-zinc-600">
                <PiCoffeeDuotone />
              </p>
            </div>
          </div>
        </article>
      </>
    );
  }